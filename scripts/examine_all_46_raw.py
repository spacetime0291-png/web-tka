import json

with open("data/parsed_questions_prelim.json", "r", encoding="utf-8") as f:
    qs = json.load(f)

with open("data/raw_questions_pages.json", "r", encoding="utf-8") as f:
    pages = json.load(f)

# Map page images
page_img_map = {p["page"]: p["images"] for p in pages}

with open("data/all_46_inspection.txt", "w", encoding="utf-8") as f:
    for q in qs:
        f.write(f"========================================\n")
        f.write(f"SOAL NO: {q['q_num']}\n")
        f.write(f"Kompetensi: {q['kompetensi']}\n")
        f.write(f"Sub Kompetensi: {q['sub_kompetensi']}\n")
        f.write(f"Bentuk: {q['bentuk']}\n")
        f.write(f"Kunci: {q['kunci']}\n")
        f.write(f"--- CONTENT BODY ---\n")
        f.write(q['content_body'] + "\n\n")

print("Generated data/all_46_inspection.txt")
