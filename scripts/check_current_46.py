import json
import re

# Load parsed questions if available or inspect raw
with open("data/questions_classified.json", "r", encoding="utf-8") as f:
    q_data = json.load(f)

print(f"Total questions classified: {len(q_data)}")
for q in q_data:
    qno = q.get("no")
    key = q.get("kunci", "")
    sub = q.get("sub_chapter_id", "")
    body_len = len(q.get("body", ""))
    print(f"Q{qno}: sub={sub}, key={key}, body_len={body_len}")
