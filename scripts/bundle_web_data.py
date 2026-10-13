import json
import glob
import os

with open("data/curriculum_matrix.json", "r", encoding="utf-8") as f:
    matrix = json.load(f)

with open("data/questions.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

modules_data = {}
for path in glob.glob("data/modules/subchapter_*.json"):
    with open(path, "r", encoding="utf-8") as f:
        mod = json.load(f)
        sub_id = mod.get("sub_chapter_id")
        if sub_id:
            modules_data[sub_id] = mod

bundle = {
    "matrix": matrix,
    "questions": questions,
    "subchapters": modules_data
}

with open("data/all_data.js", "w", encoding="utf-8") as f:
    f.write("window.APP_DATA = " + json.dumps(bundle, ensure_ascii=False, indent=2) + ";\n")

print(f"Bundled {len(questions)} questions and {len(modules_data)} sub-chapters into data/all_data.js!")
