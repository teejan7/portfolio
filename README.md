# Teejan Teepee Portfolio

Personal portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

This site presents Teejan Teepee's work across AI/ML, computer vision, cybersecurity ML, full-stack web development, and embedded systems. It is designed as a single-page portfolio with a cinematic space-inspired visual style and focused sections for projects, experience, skills, achievements, and certifications.

## Overview

- Hero section with animated visuals and quick career highlights
- About section covering technical focus and background
- Skills grouped across AI/ML, full-stack, cloud, embedded systems, and core programming
- Project showcase featuring ASL Vision, PhishGuard, PARKIKO, and embedded systems work
- Experience section covering Microsoft AICTE Elevate and Einfachzauberer Technologies
- Proof section for hackathons, achievements, and AI/cloud certifications
- Resume download and direct GitHub, LinkedIn, and email links

## Featured Work

### ASL Vision

Real-time sign language recognition using MediaPipe landmarks and machine learning, built to run efficiently without requiring a GPU.

### PhishGuard

ML-based phishing URL detection system focused on feature engineering, classification, and practical deployment.

### PARKIKO

Smart parking management platform with live slot booking, role-based dashboards, and Firebase-powered real-time updates.

### Embedded Lock

ATmega32-based digital lock with keypad input, EEPROM password storage, relay control, and RTOS task scheduling.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- Heroicons

## Project Structure

```text
app/
components/
  main/
  sub/
config/
constants/
lib/
public/
```

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Links

- GitHub: https://github.com/teejan7
- Portfolio Source: https://github.com/teejan7/portfolio
- LinkedIn: https://www.linkedin.com/in/teejan/
- Email: teejan107@gmail.com

## Notes

- Resume file is served from `public/Teejan.pdf`
- Main portfolio content is configured in `constants/index.ts`
- Site metadata is configured in `config/index.ts`
