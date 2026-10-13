import json

with open("data/questions_classified.json", "r", encoding="utf-8") as f:
    qs = json.load(f)

for q in qs:
    if not q["module_id"]:
        print(f"=== UNMAPPED Q{q['q_num']} ===")
        print(f"Kompetensi: {q['kompetensi']}")
        print(f"Sub: {q['sub_kompetensi']}")
        print(f"Body: {q['content_body'][:200]}")
        print()
