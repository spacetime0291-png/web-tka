import pymupdf

doc = pymupdf.open("soal matwa.pdf")

with open("data/debug_pages_25_38.txt", "w", encoding="utf-8") as out:
    for page_idx in range(24, len(doc)):
        page = doc[page_idx]
        out.write(f"\n==================== PAGE {page_idx+1} ====================\n")
        images = page.get_images()
        drawings = page.get_drawings()
        out.write(f"Images count: {len(images)}, Drawings count: {len(drawings)}\n")
        txt = page.get_text("text")
        out.write(txt)

print("Dumped pages 25-38 to data/debug_pages_25_38.txt")
