import pymupdf
import os

doc = pymupdf.open("soal matwa.pdf")

os.makedirs("assets/images/inspected", exist_ok=True)

# Page 28: Cube Q34
p28 = doc[27]
for idx, img in enumerate(p28.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    with open(f"assets/images/inspected/p28_img_{idx}_{xref}.png", "wb") as f:
        f.write(base["image"])

# Page 29: Q35
p29 = doc[28]
for idx, img in enumerate(p29.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    with open(f"assets/images/inspected/p29_img_{idx}_{xref}.png", "wb") as f:
        f.write(base["image"])

# Page 32: Q39
p32 = doc[31]
for idx, img in enumerate(p32.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    with open(f"assets/images/inspected/p32_img_{idx}_{xref}.png", "wb") as f:
        f.write(base["image"])

# Page 33: Q40
p33 = doc[32]
for idx, img in enumerate(p33.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    with open(f"assets/images/inspected/p33_img_{idx}_{xref}.png", "wb") as f:
        f.write(base["image"])

# Page 35: Q43
p35 = doc[34]
for idx, img in enumerate(p35.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    with open(f"assets/images/inspected/p35_img_{idx}_{xref}.png", "wb") as f:
        f.write(base["image"])

# Page 36: Q44
p36 = doc[35]
for idx, img in enumerate(p36.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    with open(f"assets/images/inspected/p36_img_{idx}_{xref}.png", "wb") as f:
        f.write(base["image"])

# Page 37: Q45
p37 = doc[36]
for idx, img in enumerate(p37.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    with open(f"assets/images/inspected/p37_img_{idx}_{xref}.png", "wb") as f:
        f.write(base["image"])

# Page 38: Q46
p38 = doc[37]
for idx, img in enumerate(p38.get_images()):
    xref = img[0]
    base = doc.extract_image(xref)
    with open(f"assets/images/inspected/p38_img_{idx}_{xref}.png", "wb") as f:
        f.write(base["image"])

print("Successfully saved all inspected images.")
