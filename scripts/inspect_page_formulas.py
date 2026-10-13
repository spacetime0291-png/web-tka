import pymupdf

doc = pymupdf.open("soal matwa.pdf")

for page_idx in [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]:
    page = doc[page_idx]
    print(f"=== PAGE {page_idx+1} ===")
    drawings = page.get_drawings()
    images = page.get_images()
    fonts = page.get_fonts()
    print(f"Drawings count: {len(drawings)}, Images: {len(images)}, Fonts: {len(fonts)}")
    text_page = page.get_textpage()
    # Check text with flags
    print("PAGE TEXT:")
    for line in page.get_text("text").split('\n'):
        if line.strip():
            print("  ", line.strip())
