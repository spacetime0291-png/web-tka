import re
import json

with open("data/full_text_debug.txt", "r", encoding="utf-8") as f:
    text = f.read()

# Split by No Soal <n>
pattern = r'(No\s*Soal\s*(\d+))'
splits = list(re.finditer(pattern, text, re.IGNORECASE))

items = []
for i in range(len(splits)):
    m = splits[i]
    q_num = int(m.group(2))
    start_pos = m.end()
    end_pos = splits[i+1].start() if i+1 < len(splits) else len(text)
    q_body = text[start_pos:end_pos].strip()
    items.append({
        "q_num": q_num,
        "raw_text": q_body
    })

items.sort(key=lambda x: x["q_num"])

with open("data/split_questions_raw.json", "w", encoding="utf-8") as f:
    json.dump(items, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(items)} questions raw.")
for it in items[:5]:
    print(f"--- Q{it['q_num']} ---")
    print(it['raw_text'][:200])
