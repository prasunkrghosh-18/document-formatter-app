# Document Formatter & Exporter Web Application 📝✨

A modern, high-performance web application designed to automatically format user-provided text into professional templates, enhance content using AI, and export seamlessly to PDF and DOCX formats. 

This project was built as part of a competitive hackathon/problem statement to leverage Google technologies, specifically Google AI (Gemini) and Google Cloud (Firebase).

## 🚀 Features

- **Predefined Templates:** Instantly format plain text into structured templates like Resumes, Business Letters, and Project Reports.
- **AI Content Enhancement:** Powered by Google's state-of-the-art **Gemini 3.5 Flash**, users can automatically rewrite, expand, or professionally enhance their input text with a single click.
- **Real-Time Live Preview:** See your document dynamically update as you type or change templates using a beautifully crafted split-pane interface.
- **Multi-Format Exporting:** Download your finalized documents perfectly formatted in either **PDF** or **DOCX** formats.
- **Premium UI/UX:** Built with a glassmorphism design system, dark mode, smooth micro-animations, and modern typography.

## 🛠️ Technologies Used

- **Frontend Core:** React.js, Vite
- **Styling:** Vanilla CSS (Modern CSS variables, Flexbox/Grid, Glassmorphism)
- **AI Integration:** `@google/genai` (Gemini 3.5 Flash)
- **Exporting Libraries:** `html2pdf.js` (for PDF), `docx` (for Word documents)
- **Deployment:** Google Cloud / Firebase Hosting
- **IDE:** Google Antigravity (Next-generation agentic IDE)

## 🌐 Live Demo

The application is deployed on Firebase Hosting and can be accessed here:
**[https://practice-ccfef.web.app](https://practice-ccfef.web.app)**

## 💻 Local Setup Instructions

If you want to run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/prasunkrghosh-18/document-formatter-app.git
   cd document-formatter-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your Google AI Gemini API Key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be running at `http://localhost:5173`.

---
*Built with ❤️ for the Document Formatter Problem Statement.*
