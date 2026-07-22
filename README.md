# 📄 Resume Analyzer

A Flask-based web application that analyzes a resume against a job description to calculate an ATS (Applicant Tracking System) score. The application extracts text from PDF resumes, identifies matched and missing keywords, and provides suggestions to improve resume compatibility with job requirements.

---

## 🚀 Features

- Upload resume in PDF format
- Enter a job description
- Extract text from the uploaded resume
- Compare resume keywords with job description keywords
- Calculate ATS score
- Display matched and missing skills
- Generate resume improvement suggestions
- Clean and user-friendly web interface

---

## 🛠️ Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Python
- Flask

**Libraries**
- PyPDF2
- Scikit-learn
- Werkzeug
- Jinja2

---

## 📂 Project Structure

```
Resume-Analyzer/
│
├── app.py                 # Flask application
├── analyzer.py            # Extracts text from PDF
├── ats.py                 # ATS score calculation
├── skills.py              # Keyword comparison
├── requirements.txt
│
├── uploads/               # Uploaded resumes
│
├── templates/
│   ├── index.html
│   └── result.html
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/resume-analyzer.git
```

2. Navigate to the project

```bash
cd resume-analyzer
```

3. Install dependencies

```bash
pip install -r requirements.txt
```

4. Run the application

```bash
python app.py
```

5. Open your browser

```
http://127.0.0.1:5000
```

---

## 📌 How It Works

1. Upload a PDF resume.
2. Paste the job description.
3. The application extracts text from the resume.
4. Keywords from both the resume and job description are compared.
5. An ATS score is calculated.
6. Matched and missing skills are identified.
7. Suggestions are displayed to improve the resume.

---

## 📊 Output

The application provides:

- ✅ ATS Score
- ✅ Matched Skills
- ✅ Missing Skills
- ✅ Resume Improvement Suggestions

---

## 📸 Screenshot

> Add screenshots of your application here.

---

## 🔮 Future Enhancements

- NLP-based semantic matching
- Multiple resume format support (DOCX)
- AI-powered resume suggestions
- Resume history dashboard
- Skill visualization charts
- User authentication
- Resume ranking for multiple candidates

---

## 👩‍💻 Author

**Harini S**

- B.E. Electronics and Communication Engineering
- AI & Machine Learning Enthusiast
- SIH 2025 Winner 🏆

---

## 📜 License

This project is developed for educational and learning purposes.
