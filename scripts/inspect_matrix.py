import sys
import pypdf

reader = pypdf.PdfReader('matriks matwa.pdf')
print(f"Num pages: {len(reader.pages)}")

with open('data/matrix_detailed.txt', 'w', encoding='utf-8') as f:
    for i, p in enumerate(reader.pages):
        f.write(f"=== PAGE {i+1} ===\n")
        # plain
        f.write("--- PLAIN ---\n")
        f.write(p.extract_text() or "")
        f.write("\n\n--- LAYOUT ---\n")
        try:
            f.write(p.extract_text(extraction_mode='layout') or "")
        except Exception as e:
            f.write(f"Layout error: {e}\n")
        f.write("\n\n--- VISITOR ---\n")
        parts = []
        def visitor_body(text, cm, tm, font_dict, font_size):
            if text.strip():
                parts.append(f"[{tm[4]:.1f}, {tm[5]:.1f}] {text}")
        p.extract_text(visitor_text=visitor_body)
        f.write("\n".join(parts))
        f.write("\n")

print("Done inspecting matrix")
