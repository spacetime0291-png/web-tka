import json

with open("data/parsed_questions_prelim.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

for q in questions:
    q_num = q["q_num"]
    komp = q["kompetensi"].lower()
    sub_k = q["sub_kompetensi"].lower()
    body = q["content_body"][:120].lower()
    
    # Map to module and sub_chapter
    mod = ""
    sub_ch = ""
    
    if "peluang" in komp or "peluang" in sub_k or "peluang" in body:
        mod = "MOD-5"
        if "majemuk" in komp or "majemuk" in body or "kamar" in body or "atau" in body:
            sub_ch = "5.4"
        elif "tunggal" in komp or "sederhana" in sub_k:
            sub_ch = "5.4"
        else:
            sub_ch = "5.4"
    elif "pencacahan" in komp or "aturan perkalian" in komp or "kombinasi" in komp or "permutasi" in komp or "banyak cara" in body:
        mod = "MOD-5"
        sub_ch = "5.3"
    elif "diagram" in komp or "grafik" in komp or "data dan peluang" in komp or "pengusaha" in body:
        mod = "MOD-5"
        sub_ch = "5.1"
    elif "pemusatan" in komp or "penyebaran" in komp or "rata-rata" in body or "median" in body or "modus" in body or "kuartil" in body:
        mod = "MOD-5"
        sub_ch = "5.2"
    elif "trigonometri" in komp or "sinus" in komp or "kosinus" in komp or "tangen" in komp:
        mod = "MOD-4"
        if "elevasi" in body or "depresi" in body or "tinggi" in body:
            sub_ch = "4.3"
        elif "tumpul" in body or "kuadran ii" in body or "kuadran" in body:
            sub_ch = "4.2"
        else:
            sub_ch = "4.1"
    elif "transformasi" in komp or "translasi" in komp or "refleksi" in komp or "rotasi" in komp or "dilatasi" in komp:
        mod = "MOD-3"
        sub_ch = "3.6"
    elif "dimensi tiga" in komp or "ruang" in komp or "kubus" in body or "balok" in body or "jarak" in komp:
        mod = "MOD-3"
        if "jarak" in komp or "jarak" in body:
            sub_ch = "3.3"
        elif "volume" in komp or "luas permukaan" in komp or "jaring-jaring" in komp:
            sub_ch = "3.5"
        else:
            sub_ch = "3.3"
    elif "keliling" in komp or "luas bangun datar" in komp:
        mod = "MOD-3"
        sub_ch = "3.4"
    elif "sudut" in komp or "garis" in komp or "bidang" in komp:
        mod = "MOD-3"
        sub_ch = "3.1"
    elif "kesebangunan" in komp or "kekongruenan" in komp:
        mod = "MOD-3"
        sub_ch = "3.2"
    elif "sistem persamaan" in komp or "spldv" in body or "spltv" in body or "buku dan" in body:
        mod = "MOD-2"
        sub_ch = "2.1"
    elif "pertidaksamaan" in komp or "program linear" in komp or "daerah yang memenuhi" in body:
        mod = "MOD-2"
        sub_ch = "2.2"
    elif "invers" in komp:
        mod = "MOD-2"
        sub_ch = "2.4"
    elif "komposisi" in komp:
        mod = "MOD-2"
        sub_ch = "2.4"
    elif "fungsi" in komp:
        mod = "MOD-2"
        sub_ch = "2.3"
    elif "barisan dan deret" in komp or "bunga" in body or "investasi" in body or "bobin" in body or "aritmetika" in komp or "geometri" in komp:
        mod = "MOD-2"
        if "geometri" in komp or "investasi" in body or "bunga" in body:
            sub_ch = "2.6"
        else:
            sub_ch = "2.5"
    elif "bilangan" in komp or "akar" in komp or "eksponen" in komp or "volt" in body or "tegangan" in body:
        mod = "MOD-1"
        if "akar" in komp or "akar" in body:
            sub_ch = "1.2"
        elif "operasi" in komp or "hitung" in komp:
            sub_ch = "1.3"
        else:
            sub_ch = "1.1"
            
    q["module_id"] = mod
    q["sub_chapter_id"] = sub_ch

with open("data/questions_classified.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print("Classification complete.")
counts = {}
for q in questions:
    k = f"{q['module_id']}:{q['sub_chapter_id']}"
    counts[k] = counts.get(k, 0) + 1
for k, v in sorted(counts.items()):
    print(f"  {k}: {v} questions")
