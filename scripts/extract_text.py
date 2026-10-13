import os
import pypdf

os.makedirs("data", exist_ok=True)

def extract_pdf(pdf_path, out_txt_path):
    print(f"Extracting {pdf_path}...")
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"Total pages: {total_pages}")
    
    with open(out_txt_path, "w", encoding="utf-8") as f:
        for idx, page in enumerate(reader.pages):
            text = page.extract_text() or ""
            f.write(f"--- PAGE {idx + 1} / {total_pages} ---\n")
            f.write(text)
            f.write("\n\n")
    print(f"Saved to {out_txt_path}")

if __name__ == "__main__":
    extract_pdf("matriks matwa.pdf", "data/extracted_matrix.txt")
    extract_pdf("soal matwa.pdf", "data/extracted_soal.txt")
