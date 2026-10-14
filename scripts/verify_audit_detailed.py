import json

with open("data/curriculum_matrix.json", "r", encoding="utf-8") as f:
    matrix = json.load(f)

with open("data/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

print(f"Total Questions Verified: {len(questions)}")
assert len(questions) == 46, "Expected 46 questions"

total_subchapters = 0
for mod in matrix["modules"]:
    print(f"\n[MODULE AUDIT] {mod['module_id']}: {mod['module_name']}")
    for sc in mod["sub_chapters"]:
        total_subchapters += 1
        sub_id = sc["sub_chapter_id"]
        short_title = sc.get("short_title")
        sub_topics = sc.get("sub_topics", [])
        
        # Load subchapter json
        sub_file = f"data/modules/subchapter_{sub_id.replace('.', '_')}.json"
        with open(sub_file, "r", encoding="utf-8") as sf:
            sub_data = json.load(sf)
        
        rangkuman = sub_data.get("rangkuman")
        variasi = sub_data.get("variasi_soal", [])
        
        assert short_title, f"Missing short_title for {sub_id}"
        assert len(sub_topics) >= 4, f"Insufficient sub_topics for {sub_id}: {len(sub_topics)}"
        assert rangkuman and len(rangkuman) > 50, f"Missing or short rangkuman for {sub_id}"
        assert len(variasi) >= 3, f"Insufficient variasi_soal for {sub_id}: {len(variasi)}"
        
        print(f"  [OK] Sub {sub_id:4s} | {short_title:35s} | Sub-topics: {len(sub_topics)} | Variasi: {len(variasi)} | Rangkuman: OK")

print(f"\nAll {total_subchapters} sub-chapters 100% verified with short titles, sub-topics, summaries, and problem variations!")
