from skills import SKILLS
import re

def extract_skills(text):
    text = text.lower()

    words = set(re.findall(r"\b[\w+#.]+\b", text))

    found = []

    for skill in SKILLS:
        if " " in skill:
            if skill.lower() in text:
                found.append(skill)
        else:
            if skill.lower() in words:
                found.append(skill)

    return found


def calculate_ats(resume_text, job_description):

    resume_skills = extract_skills(resume_text)
    jd_skills = extract_skills(job_description)

    matched = list(set(resume_skills) & set(jd_skills))
    missing = list(set(jd_skills) - set(resume_skills))

    if len(jd_skills) == 0:
        score = 0
    else:
        score = int((len(matched) / len(jd_skills)) * 100)

    return score, matched, missing