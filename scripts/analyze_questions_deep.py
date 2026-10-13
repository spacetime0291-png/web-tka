import os
import fitz # PyMuPDF
import json

os.makedirs("assets/images", exist_ok=True)
os.makedirs("data", exist_ok=True)

doc = fitz.open("soal matwa.pdf")
print(f"Total pages in soal matwa.pdf: {len(doc)}")

pages_data = []

for i, page in enumerate(doc):
    page_num = i + 1
    text = page.get_text("text")
    blocks = page.get_text("blocks") # (x0, y0, x1, y1, text, block_no, block_type)
    images = page.get_images(full=True)
    
    # Save any embedded image
    img_files = []
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_img = doc.extract_image(xref)
        img_bytes = base_img["image"]
        img_ext = base_img["ext"]
        img_filename = f"q_img_p{page_num}_{img_idx+1}.{img_ext}"
        img_path = os.path.join("assets/images", img_filename)
        with open(img_path, "wb") as f_img:
            f_img.write(img_bytes)
        img_files.append(img_filename)
        
    pages_data.append({
        "page": page_num,
        "text": text,
        "blocks": [b[4] for b in blocks if b[6] == 0],
        "image_count": len(images),
        "images": img_files
    })

with open("data/raw_questions_pages.json", "w", encoding="utf-8") as f:
    json.dump(pages_data, f, ensure_ascii=False, indent=2)

print(f"Extracted {len(pages_data)} pages and images saved to assets/images.")
