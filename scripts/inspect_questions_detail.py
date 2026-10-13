import json
import re

with open("data/split_questions_raw.json", "r", encoding="utf-8") as f:
    raw_qs = json.load(f)

print(f"Total raw questions loaded: {len(raw_qs)}")

def clean_text(t):
    # remove page markers
    t = re.sub(r'=== PAGE \d+ ===', '', t)
    t = re.sub(r'Denisi\s+Muatan\s+Kompetensi\s+Matriks\s+Asesmen\s+Contoh\s+Soal', '', t)
    t = re.sub(r'[\uf145\ufffd]', '', t)
    return t.strip()

parsed = []
for q in raw_qs:
    q_num = q["q_num"]
    txt = clean_text(q["raw_text"])
    
    # Extract Kompetensi
    komp_m = re.search(r'Kompetensi(.*?)(?=Sub\s*Kompetensi|Bentuk\s*Soal|Kunci|$)', txt, re.DOTALL)
    kompetensi = komp_m.group(1).strip() if komp_m else ""
    
    # Extract Sub Kompetensi
    sub_m = re.search(r'Sub\s*Kompetensi(.*?)(?=Bentuk\s*Soal|Kunci|$)', txt, re.DOTALL)
    sub_kompetensi = sub_m.group(1).strip() if sub_m else ""
    
    # Extract Bentuk Soal
    bentuk_m = re.search(r'Bentuk\s*Soal(.*?)(?=Kunci|$)', txt, re.DOTALL)
    bentuk = bentuk_m.group(1).strip() if bentuk_m else "Pilihan Ganda (PG)"
    
    # Extract Kunci
    kunci_m = re.search(r'Kunci\s*(.*?)(?=\n[A-Z0-9\n\r]|\n[A-Za-z0-9\-\.\,\s]{10,}|$)', txt, re.DOTALL)
    kunci_line = ""
    after_kunci = ""
    lines = txt.split('\n')
    kunci_idx = -1
    for idx, l in enumerate(lines):
        if 'Kunci' in l:
            kunci_idx = idx
            kunci_line = l.replace('Kunci', '').strip()
            break
            
    if kunci_idx != -1 and kunci_idx + 1 < len(lines):
        # if kunci_line was empty, maybe it's on next line
        if not kunci_line:
            kunci_line = lines[kunci_idx+1].strip()
            after_kunci = "\n".join(lines[kunci_idx+2:])
        else:
            after_kunci = "\n".join(lines[kunci_idx+1:])
    else:
        after_kunci = txt
        
    parsed.append({
        "q_num": q_num,
        "kompetensi": kompetensi.replace('\n', ' ').strip(),
        "sub_kompetensi": sub_kompetensi.replace('\n', ' ').strip(),
        "bentuk": bentuk.replace('\n', ' ').strip(),
        "kunci": kunci_line,
        "content_body": after_kunci.strip()
    })

with open("data/parsed_questions_prelim.json", "w", encoding="utf-8") as f:
    json.dump(parsed, f, ensure_ascii=False, indent=2)

print("Saved prelim parsed questions.")
