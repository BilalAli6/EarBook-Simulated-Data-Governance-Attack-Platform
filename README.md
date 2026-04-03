# 🚨 When Data Governance Fails  
### Exploiting Mismanaged Data in Real Systems  

👤 **Author:** Muhammad Bilal Ali Saif  
🎤 **Presented at:** Positive Hack Talks Kuala Lumpur 2026  
🛡️ **Track:** Offensive Security  

---

## Overview

Organizations invest heavily in **data governance frameworks**, yet sensitive data continues to leak.

This project demonstrates how **small misconfigurations** in real systems can expose critical data — and how attackers exploit these weaknesses to gain deeper access.

> ⚠️ Educational purposes only — no real systems targeted.

---

## Objective

- Show how weak data governance leads to data exposure  
- Simulate real-world attacker behavior  
- Demonstrate how small leaks → full compromise  
- Bridge the gap between **policy vs real security**

---

## Demo Application — EarBook

**EarBook** is a simulated social media platform:

- User authentication system  
- Social feed (Facebook-style UI)  
- Simulated attacker scan interface  
- Exposed data visualization (Hacker Dashboard)  

---

## Attack Simulation Workflow

### Step 1 — Login Page

<img width="1919" height="876" alt="image" src="https://github.com/user-attachments/assets/91522dae-3d6e-4b3b-b72f-fc16ad4cbf60" />


### Step 2 — Failed Login

<img width="1919" height="867" alt="image" src="https://github.com/user-attachments/assets/6d2c62f4-42c0-4f99-8352-681f4283eb93" />


### Step 3 — Dashboard (Normal Usage)

<img width="1893" height="865" alt="image" src="https://github.com/user-attachments/assets/5412f807-38a0-4ee4-96ff-e73274b48103" />


### Step 4 — Hacker Scan Interface

<img width="1919" height="874" alt="image" src="https://github.com/user-attachments/assets/515846e9-873d-4f82-bde4-03e34beec3a4" />
<img width="1919" height="869" alt="image" src="https://github.com/user-attachments/assets/913e2950-53fc-47d9-b398-df35949941d8" />


### Step 5 — Endpoint Discovery

<img width="827" height="385" alt="image" src="https://github.com/user-attachments/assets/f89f1b23-8a8b-4281-98a2-36a1db7b165b" />


### Step 6 — Hacker Dashboard (Data Exposure)

<img width="1849" height="876" alt="image" src="https://github.com/user-attachments/assets/40ead1e5-29f5-4d7a-a173-7726fe842a90" />


---

## Features

- Login system (success + failure simulation)  
- Social media dashboard  
- Hacker scan terminal (typing animation + sound)  
- Endpoint discovery simulation  
- Data exposure visualization  

---

## Tech Stack

- **Backend:** Python (Flask)  
- **Frontend:** HTML, CSS, JavaScript  
- **Simulation:** Custom attacker logic  
- **Assets:** AI-generated images  

---

## Project Structure

```

EarBook/
│
├── app.py                     # Main Flask app
├── endpoints.txt              # Endpoints for hacker scan
│
├── templates/                 # HTML templates
│   ├── index.html             # Landing page
│   ├── login.html             # Login page
│   ├── failed.html            # Failed login page
│   ├── dashboard.html         # Social feed / dashboard
│   ├── hack.html              # Hacker scan page
│   └── hacker_dashboard.html  # Hacker dashboard
│
└── static/
    ├── style.css              # Common CSS
    ├── js/
    │   └── hack.js            # JS for hacker scan typing animation
    ├── images/                # All images go here
    │   ├── user1.jpg          # Profile pics
    │   ├── user2.jpg
    │   ├── post1.jpg          # Post images
    │   ├── post2.jpg
    │   └── hacker_bg.jpg      # Hacker dashboard background / media
    └── sounds/
        ├── typing.mp3         # Typing sound
        └── success.mp3        # Scan complete sound

````

---

## Run Locally

```bash
git clone https://github.com/bilalali6/EarBook-Simulated-Data-Governance-Attack-Platform
cd EarBook-Simulated-Data-Governance-Attack-Platform
pip install -r requirements.txt
python app.py
````

Open in browser:

```
http://127.0.0.1:5000
```

---

## Example Attacker Command

```bash
ffuf -u http://127.0.0.1:5000/FUZZ -w endpoints.txt
```

---

## Key Learning

* Data governance failures are often invisible
* Small leaks can lead to major breaches
* Attackers rely on exposed data, not just exploits
* Systems must be tested from an attacker perspective

---

## Core Insight

> “We didn’t hack the system — we found what it exposed.”

---

## Disclaimer

This project is for **educational purposes only**.
All demonstrations are performed in a **controlled environment**.

---

## Acknowledgment

Built for **Positive Hack Talks Kuala Lumpur 2026**.

---

## Contact

Muhammad Bilal Ali Saif  
Cyber Security Undergraduate – NUCES Islamabad  
📧 Email: bilalalisaif6@gmail.com

---

⭐ Star this repo if you found it useful!

