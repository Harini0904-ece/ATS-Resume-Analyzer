from analyzer import extract_text
from flask import Flask, render_template, request
import os

from ats import calculate_ats


app = Flask(__name__)

UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/upload", methods=["POST"])
def upload():

    resume = request.files.get("resume")

    if resume is None or resume.filename == "":
        return "Please select a resume before submitting."
    job_description = request.form["job_description"]

    filepath = os.path.join(app.config["UPLOAD_FOLDER"], resume.filename)

    resume.save(filepath)

    resume_text = extract_text(filepath)

    print(resume_text)

    

    score, matched, missing = calculate_ats(
    resume_text,
    job_description
)

    return render_template(
    "result.html",
    score=score,
    matched=matched,
    missing=missing
    )

if __name__ == "__main__":
    app.run(debug=True)