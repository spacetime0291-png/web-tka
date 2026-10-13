import pymupdf
import os

doc = pymupdf.open("soal matwa.pdf")

print("Checking pages 28 to 38...")
for pno in range(28, 39):
    page = doc[pno - 1]
    text = page.get_text("text").strip()
    images = page.get_images()
    print(f"\n--- PAGE {pno} ---")
    print(f"Text lines: {len(text.splitlines())}, Images: {len(images)}")
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        print(f"  Img {img_idx}: xref={xref}, size={len(image_bytes)} bytes, ext={image_ext}, dim={base_image.get('width')}x{base_image.get('height')}")

