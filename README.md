# Srujan H M - Premium 3D Portfolio (Srujan OS v2.0)

![Portfolio Banner](https://res.cloudinary.com/duf8kshsz/image/upload/v1779219766/PLACEMENT_PIC2_ckncvk.jpg)

Welcome to the open-source repository for my premium, interactive 3D personal portfolio! Designed to feel like a high-end operating system and an immersive digital experience, this portfolio pushes the boundaries of modern web technologies.

⭐️ **If you like this project or find it helpful, please consider giving it a Star!** ⭐️

## 🚀 Features
- **Cinematic 3D Hero Section**: Powered by Spline, featuring a massive interactive 3D environment that lazily loads to maintain high performance.
- **AI Personal Assistant (Gemini)**: An integrated AI Chatbot trained on a custom JSON knowledge base of my life, skills, and gaming achievements. It can even physically navigate you through the website!
- **Cyberpunk Preloader**: A custom 0-100% boot sequence that masks 3D asset downloads, ensuring a blazing fast First Contentful Paint.
- **Cinematic Train Timeline**: A highly advanced horizontal parallax scrolling experience mapping a train journey across my educational milestones.
- **Buttery Smooth Scrolling**: Implemented using `@studio-freight/react-lenis` for a premium, heavy-gliding scroll feel.
- **Dynamic Projects Gallery**: Interactive Bento Grids and a custom overlay portal for viewing detailed case studies and dynamic image galleries.

## 🛠️ Tech Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & GSAP
- **3D Graphics**: Spline (`@splinetool/react-spline`) & Three.js
- **Scrolling Physics**: Lenis
- **AI Engine**: Google Gemini API 

## 💻 Installation Guide

Want to run this locally and explore the code? Follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Srujan253/PortFolio.git
   cd PortFolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Google Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be running at `http://localhost:5173`.

## 📄 License & Usage Restrictions

This project is open source under the **MIT License** with specific restrictions regarding design copying. 

You are entirely free to explore the code, learn from the architecture, and use isolated components (such as the AI Robot implementation heavily inspired by the awesome creators at **21st.dev**) in your own projects. 

However, **you may NOT completely clone the design, layout, and visual branding of this portfolio to use as your own personal website.** Please respect the effort put into the unique visual identity of this portfolio. Use it as inspiration, but build your own masterpiece! 

See the `LICENSE` file for more details.