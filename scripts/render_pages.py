import os
import pymupdf

os.makedirs("assets/images/pages", exist_ok=True)
doc = pymupdf.open("soal matwa.pdf")

for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    out_path = f"assets/images/pages/page_{i+1}.png"
    pix.save(out_path)
    print(f"Rendered page {i+1} -> {out_path}")

print("All 38 pages rendered.")
