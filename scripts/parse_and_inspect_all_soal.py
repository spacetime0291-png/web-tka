import json
import re

with open("data/raw_questions_pages.json", "r", encoding="utf-8") as f:
    pages_data = json.load(f)

print(f"Total pages: {len(pages_data)}")

full_text = ""
for p in pages_data:
    full_text += f"\n=== PAGE {p['page']} ===\n" + p['text']

with open("data/full_text_debug.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

# Find all "No Soal"
matches = list(re.finditer(r'No\s*Soal\s*(\d+)', full_text, re.IGNORECASE))
print(f"Found {len(matches)} 'No Soal' matches:")
found_numbers = []
for m in matches:
    found_numbers.append(int(m.group(1)))
print("Matched question numbers:", sorted(found_numbers))

# Find any missing from 1 to 46
missing = [i for i in range(1, 47) if i not in found_numbers]
print("Missing question numbers:", missing)
