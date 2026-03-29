# CVision AI - AI Resume Analyser

A modern, full-stack application that provides smart, AI-powered feedback for your resume to help you land your dream job! CVision AI tracks your applications and rates your resumes to ensure you're putting your best foot forward.

## 🎯 Objectives

- **Smart Resume Feedback**: Upload your resume and instantly receive AI-generated insights and ratings.
- **Application Tracking**: Keep a history of your uploaded resumes and their performance over time.
- **Serverless & Seamless**: Fully powered by [Puter.js](https://puter.com) for authentication, database (KV store), and AI integration without the hassle of managing servers.
- **User-friendly Interface**: A clean, modern UI built with React Router 7 and Tailwind CSS.

## ✨ Features

- 🔐 Secure Authentication (via Puter)
- 📄 Seamless Resume Uploads (PDF support via `react-dropzone` and `pdfjs-dist`)
- 🤖 AI-Powered Analysis and Rating
- 📊 Dashboard to track all your resumes
- ⚡️ Fast, optimized performance with React Router 7

## 🛠️ Tech Stack

- **Framework**: [React Router 7](https://reactrouter.com/) (formerly Remix)
- **UI & Styling**: [Tailwind CSS v4](https://tailwindcss.com/), `clsx`, `tailwind-merge`
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Backend & AI Ecosystem**: [Puter.js](https://docs.puter.com)
  - Auth: `puter.auth`
  - Database: `puter.kv`
  - AI: `puter.ai.chat`
- **File Utilities**: `pdfjs-dist`, `react-dropzone`

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed. Note that this project uses Puter.js for backend services, which works out-of-the-box in the browser.

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

You can preview the built app using:
```bash
npm run start
```

## 📂 Project Structure

- `app/routes/` - File-based routing for the application (`home.tsx`, `upload.tsx`, `resume.tsx`, etc.)
- `app/components/` - Reusable UI components (`Navbar.tsx`, `ResumeCard.tsx`, etc.)
- `app/lib/` - Utility functions and store setup (`puter.ts` for Puter integration)


## 🖼️ Screenshots

![Home Page](/public/images/ss-1.png)
![Upload Page](/public/images/ss-3.png)
![Review Page](/public/images/ss-2.png)