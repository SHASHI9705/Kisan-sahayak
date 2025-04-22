# 🌾 Kisan Sahayak

**Kisan Sahayak** is an AI-powered web platform developed to assist farmers in diagnosing **skin and crop diseases**, providing **precautions**, **remedies**, and helping them with **weather updates**, **water irrigation tips**, and **informative articles**. The goal is to empower rural agricultural communities with smart, accessible, and health-focused technology.

---

## 🧠 Features

### 👨‍🌾 Farmer Health Assistant
- Upload an image of your skin issue.
- Get AI-based detection of possible skin diseases.
- Receive relevant precautions and remedies instantly.
- Read helpful articles on common skin diseases and skincare tips.

### 🌱 Crop Health Assistant
- Upload an image of your crop showing signs of disease.
- AI will identify the crop and diagnose potential diseases.
- Get detailed insights, similar case references, and cure suggestions.

### 🌦️ Weather & Irrigation
- Stay updated with localized weather information.
- Access helpful tips for water irrigation management based on seasonal and environmental needs.

---

## 🖼️ How It Works

1. User uploads an image (crop or skin-related).
2. The image is analyzed using AI-powered models (ISIC for skin, Kindwise API for crop).
3. The platform displays the diagnosis, disease name, probability, and recommendations.
4. Additional features allow browsing articles and weather/irrigation sections.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, EJS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (for user data, articles, appointments)
- **AI Integration:**
  - Skin Disease Detection: ISIC 2019 pre-trained model
  - Crop Disease Detection: Kindwise API
- **Deployment:** AWS (3-tier architecture - secure, scalable, reliable)

---

