import json

with open("data/curriculum_matrix.json", "r", encoding="utf-8") as f:
    matrix = json.load(f)

total_sub = 0
complete_count = 0
pending_list = []

for m in matrix["modules"]:
    for sc in m["sub_chapters"]:
        total_sub += 1
        status = sc.get("audit_status", "")
        if status == "LENGKAP":
            complete_count += 1
        else:
            pending_list.append((sc["sub_chapter_id"], sc["title"], status))

print(f"Total Sub-chapters in Matrix: {total_sub}")
print(f"Audit Complete: {complete_count} / {total_sub}")
if pending_list:
    print("Pending Sub-chapters:", pending_list)
else:
    print("ALL 20 SUB-CHAPTERS ARE 100% AUDITED AND MARKED LENGKAP! ZERO-OMISSION CRITERIA ACHIEVED!")
