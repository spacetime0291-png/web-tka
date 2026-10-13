import sys
import json
import os

if len(sys.argv) < 2:
    print("Usage: py scripts/audit_subchapter.py <sub_chapter_id>")
    sys.exit(1)

sub_id = sys.argv[1]
sub_filename = f"data/modules/subchapter_{sub_id.replace('.', '_')}.json"

if not os.path.exists(sub_filename):
    print(f"[AUDIT ERROR] File {sub_filename} does not exist!")
    sys.exit(1)

with open(sub_filename, "r", encoding="utf-8") as f:
    sub_data = json.load(f)

# Required sections
required_keys = ["teori_definisi", "rumus_katex", "karakteristik_batasan", "contoh_kontekstual", "trik_cepat"]
missing = [k for k in required_keys if not sub_data.get(k)]

if missing:
    print(f"[AUDIT FAILED] Sub-bab: {sub_data.get('title', sub_id)} | Missing sections: {missing}")
    sys.exit(1)

# Load curriculum matrix
matrix_path = "data/curriculum_matrix.json"
with open(matrix_path, "r", encoding="utf-8") as f:
    matrix = json.load(f)

# Update audit status in matrix
found = False
matched_title = ""
matched_competencies = []
for m in matrix["modules"]:
    for sc in m["sub_chapters"]:
        if sc["sub_chapter_id"] == sub_id:
            sc["audit_status"] = "LENGKAP"
            found = True
            matched_title = sc["title"]
            matched_competencies = sc.get("competencies", [])
            break
    if found:
        break

if found:
    with open(matrix_path, "w", encoding="utf-8") as f:
        json.dump(matrix, f, ensure_ascii=False, indent=2)
    
    # Formulate output string
    pts = ", ".join(matched_competencies) if matched_competencies else "Semua parameter terpenuhi"
    # Print formatted audit log
    print(f"[AUDIT CHECK] Sub-bab: {matched_title} | Status: LENGKAP | Parameter Matriks Terpenuhi: {pts}")
else:
    print(f"[AUDIT WARNING] Sub-chapter ID {sub_id} not found in matrix.")
