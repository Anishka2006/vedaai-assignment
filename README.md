# VedaAI – AI-Powered Question Paper Generator

## Overview

VedaAI is an AI-powered assignment and question paper generation platform designed for educators. The platform enables teachers to create assignments by providing instructions, question types, and assessment requirements. Using Google's Gemini AI, the system automatically generates structured question papers and stores them for future access.

## Features

### Assignment Management

* Create assignments with custom instructions
* Define multiple question types
* Configure number of questions and marks
* View generated assignments

### AI-Powered Question Generation

* Gemini AI integration
* Automatic generation of MCQs
* Short-answer question generation
* Long-answer question generation
* Custom instruction support

### Dashboard

* Teacher dashboard
* Assignment tracking
* Status monitoring
* Assignment history

### User Interface

* Modern responsive UI
* Teacher-focused workflow
* Clean dashboard design
* Assignment management pages

---

## Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Lucide React Icons

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MongoDB

### Queue Processing

* BullMQ
* Redis

### AI Integration

* Google Gemini API

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## Project Structure

```text
vedaai-assignment/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── models/
│   ├── routes/
│   ├── workers/
│   ├── services/
│   └── package.json
│
└── README.md
```

## Architecture

1. Teacher creates an assignment.
2. Frontend sends request to backend.
3. Assignment is stored in MongoDB.
4. Job is added to BullMQ queue.
5. Worker consumes the job.
6. Gemini AI generates the question paper.
7. Generated paper is stored in MongoDB.
8. Frontend polls assignment status and displays results.

## API Endpoints

### Create Assignment

```http
POST /api/assignments
```

Request:

```json
{
  "title": "Science Test",
  "instructions": "Create 5 MCQs and 2 Long Questions"
}
```

### Get Assignment

```http
GET /api/assignments/:id
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd vedaai-assignment
```

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
MONGODB_URI=your_mongodb_uri
REDIS_URL=your_redis_url
GEMINI_API_KEY=your_gemini_api_key
```

Start Backend

```bash
npm run dev
```

Start Worker

```bash
npm run worker
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Deployment

### Frontend

Hosted on Vercel.

### Backend

Hosted on Render.

---

## Future Enhancements

* PDF question paper export
* Authentication and role management
* Assignment sharing
* Real-time notifications
* Student submission portal
* Analytics dashboard
* Question bank management
* AI-generated answer keys

---

## Author

Anishka
