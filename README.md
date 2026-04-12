# mindcheck
# 🌸 MindCheck — Am I Okay?

> A gentle, anonymous student stress & wellness tracker

[![Live Demo](https://img.shields.io/badge/🌿_Live_Demo-GitHub_Pages-5c9e6a?style=for-the-badge)](https://YOUR-USERNAME.github.io/mindcheck)

---

## 💚 What is MindCheck?

MindCheck is a free, anonymous, browser-based wellness check-in tool designed for students. Every day, you answer 10 simple, friendly questions about your sleep, mood, food, energy, and stress — and get back a **Wellness Score (0–100)** with a personalised tip and a 7-day mood graph.

No login. No sign-up. No data ever leaves your device.

---

## ✨ Features

- 🌸 **10 simple questions** — covers sleep, anxiety, eating, connection, energy, mood, workload, body, rest, and overall wellbeing
- 💯 **Wellness Score (0–100)** — falls into one of three zones: Doing Well · Slightly Stressed · Needs Support
- 🌱 **Personalised daily tip** — based on your specific answers that day
- 💗 **Gentle support message** — shown when score is below 40, reminding you it's okay
- 📅 **7-day mood graph** — powered by Chart.js, stored in localStorage (your device only)
- 🌿 **Falling petals** — hover/click for tiny positive quotes
- 🌺 **Flower meadow** — tulips, daisies, lavender, sunflowers swaying at the bottom
- 🏡 **Home button** — always lets you go back to the start screen
- 📞 **Resources section** — iCall, Vandrevala Foundation, 4-7-8 breathing

---

## 🗂️ File Structure

```
mindcheck/
├── index.html    ← Main HTML structure (all 3 screens)
├── style.css     ← All styling, animations, design tokens
├── script.js     ← Petals, flowers, quiz logic, results, chart
└── README.md     ← This file
```

---

## 🚀 How to Run Locally

1. Download or clone this repository
2. Open the folder in VS Code
3. Install the **Live Server** extension (if not already)
4. Right-click `index.html` → **Open with Live Server**
5. The site opens at `http://127.0.0.1:5500`

---

## 🌐 How to Deploy on GitHub Pages (FREE hosting!)

1. Push this folder to a GitHub repository (see below)
2. Go to your repo → **Settings** → **Pages**
3. Under "Branch", select `main` → `/ (root)` → click **Save**
4. Wait ~60 seconds → your site is live at `https://YOUR-USERNAME.github.io/REPO-NAME`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & quiz layout |
| CSS3 | Soft UI, animations, meadow theme |
| Vanilla JavaScript | Quiz logic, petal animation (rAF), scoring |
| Chart.js (CDN) | 7-day mood line graph |
| localStorage | Saves daily scores on device only |
| Google Fonts | Caveat (handwritten) + Nunito (body) |

---

## 📊 Scoring System

Each question has a weight. The weighted average gives the final score out of 100.

| Question | Topic | Weight |
|---|---|---|
| Q1 | Sleep | 15 |
| Q2 | Anxiety | 15 |
| Q3 | Eating | 10 |
| Q4 | Social connection | 8 |
| Q5 | Energy (slider) | 10 |
| Q6 | Mood | 12 |
| Q7 | Workload | 10 |
| Q8 | Body / physical | 8 |
| Q9 | Rest & breaks | 7 |
| Q10 | Overall feeling (slider) | 15 |

---

## 🫂 Mental Health Resources

| Resource | Contact |
|---|---|
| iCall (TISS) | 9152987821 · Mon–Sat 8am–10pm |
| Vandrevala Foundation | 1860-2662-345 · 24/7 |
| 4-7-8 Breathing | Linked in the app |

---

## 🌿 Made with love for UniMerge 1.0

> *"mind check · your only true one"*

This project was built for the UniMerge 1.0 hackathon idea submission.  
The goal: help at least one student realise they need a break before it's too late.
