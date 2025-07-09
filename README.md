## Candidate Referral Management System

Welcome to Candidate Referral Management System , a modern full-stack MERN application designed to streamline the candidate referral process for organizations. This comprehensive platform allows HR professionals and employees to efficiently manage candidate referrals, track application status, and maintain organized records throughout the hiring pipeline. The system emphasizes user experience with intuitive navigation, real-time updates, and seamless file handling capabilities. With features spanning candidate management, resume uploads, status tracking, and dashboard analytics, this system is an excellent solution for modern recruitment workflows.

**Table of Contents**
* Project Description
* Project Type
* Deployed App
* Directory Structure
* Technologies Used
* Setup and Installation
* Usage
* Features
* Screenshots
* API Documentation
* Future Scope
* Team Members
* Acknowledgments
* References

## Project Description

The **Candidate Referral Management System** replicates modern HR management functionality, allowing users to:
* Add new candidates with comprehensive details including resume uploads.
* View and manage all referred candidates through an intuitive dashboard.
* Update candidate status throughout the hiring pipeline (Pending → Reviewed → Hired).
* Search and filter candidates by job title, status, or name.
* Upload and view PDF resumes securely.

This project aims to deliver a seamless recruitment experience, enabling HR teams to efficiently manage candidate referrals, track progress, and maintain organized records. It includes features like file upload handling, real-time status updates, and comprehensive candidate management.

## Project Type
Frontend | Backend | Fullstack

**Project Link**
https://candidatereferal.netlify.app/

## Deployed App
* **Frontend:** [Deployed Frontend](https://candidatereferal.netlify.app/)
* **Backend:** [Deployed Backend](https://candidate-referral-api.railway.app/)
* **Database:** MongoDB Atlas

## Directory Structure

```
candidate-referral/
├── client/                    # React frontend application
│   ├── public/
│   │   ├── screenshots/       # Application screenshots
│   │   └── uploads/          # Resume upload directory
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── ReferralForm.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CandidateCard.jsx
│   │   │   └── Navigation.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── utils/            # Utility functions
│   │   │   └── axiosConfig.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/                    # Node.js backend application
│   ├── controllers/          # Business logic
│   │   └── candidate.controller.js
│   ├── models/               # Database models
│   │   └── candidate.model.js
│   ├── routes/               # API routes
│   │   └── candidate.routes.js
│   ├── middlewares/          # Custom middleware
│   │   └── upload.js
│   ├── uploads/              # Resume storage
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## Technologies Used

**Frontend:**
* React 18
* Vite
* Tailwind CSS
* React Router DOM
* Axios

**Packages:**
* Multer (file upload)
* Mongoose (MongoDB ODM)
* Express.js
* CORS
* dotenv

**Backend:**
* Node.js
* Express.js
* MongoDB Atlas
* Multer (file handling)

## Setup and Installation

Detailed instructions on how to install, configure, and get the project running.

**Prerequisites:**
```
Node.js (v18.0 or higher)
MongoDB Atlas account
Git
```

To set up the project locally:

1. Clone the repository:
```bash
git clone hhttps://github.com/Tikesh097/Candidate-Referal
```

2. Navigate to the project directory:
```bash
cd candidate-referral
```

3. Backend Setup:
```bash
cd server
npm install
```

4. Create environment file:
```bash
cp .env.example .env
```

5. Configure `.env` file:
```env
MONGO_URI=mmongodb+srv://aswaletinku:6KrUsx4ZtUQWlSqF@cluster0.bmyh9.mongodb.net/CandidateReferal_Data
PORT=5000
NODE_ENV=development
```

6. Start backend server:
```bash
npm start
```

7. Frontend Setup (open new terminal):
```bash
cd client
npm install
npm run dev
```

## Usage :

Follow these steps to use the project:

1. Open the application in a web browser at `http://localhost:5173`.
2. Navigate to the home page to see available options.
3. Click "Refer Candidate" to add a new candidate with details and resume.
4. Use the "View Dashboard" to see all referred candidates.
5. Search and filter candidates by job title or status.
6. Update candidate status by clicking the status dropdown on candidate cards.

# Features 

## Candidate Management:
* Add candidates with comprehensive details (name, email, phone, job title).
* Upload PDF resumes with file validation.

## Search & Filter:
* Search candidates by name, email, or job title.
* Filter by status (Pending, Reviewed, Hired).

## File Handling:
* Secure PDF resume upload and storage.
* Resume viewing and download functionality.

## Responsive Design:
* Fully optimized for desktop, tablet, and mobile devices.
* Modern UI with Tailwind CSS styling.


## Screenshots

1. **Home Page:**  
   ![Home Page](https://github.com/Tikesh097/Candidate-Referal/blob/main/client/src/Screenshots/HomePage.png)

1. **DashBoard:**  
   ![Dashbaord Page](https://github.com/Tikesh097/Candidate-Referal/blob/main/client/src/Screenshots/Dashboard.png)

3. **Referal Form Page:**  
   ![Referal Form Page](https://github.com/Tikesh097/Candidate-Referal/blob/main/client/src/Screenshots/Referal%20Form.png)

## API Documentation

**Base URL:** `http://localhost:5000/api`

**Endpoints:**

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/candidates` | Add new candidate | `multipart/form-data` |
| `GET` | `/candidates` | Fetch all candidates | - |
| `GET` | `/candidates/:id` | Get candidate by ID | - |
| `PUT` | `/candidates/:id/status` | Update candidate status | `application/json` |
| `DELETE` | `/candidates/:id` | Delete candidate | - |

**Request Examples:**

**Add Candidate:**
```bash
POST /api/candidates
Content-Type: multipart/form-data

Fields:
- name: "John Doe"
- email: "john@example.com"
- phone: "9876543210"
- jobTitle: "Frontend Developer"
- resume: [PDF file]
```

**Update Status:**
```bash
PUT /api/candidates/:id/status
Content-Type: application/json

{
  "status": "Hired"
}
```

## Future Scope

1. **Enhanced Analytics:**
   * Add reporting dashboards with charts and statistics.
   * Integration with HR analytics tools.

2. **Advanced Features:**
   * Email notifications for status updates.
   * Interview scheduling integration.
   * Candidate rating and feedback system.

3. **Mobile App Development:**
   * Create native mobile apps for iOS and Android.
   * Push notifications for real-time updates.

4. **Integration Capabilities:**
   * Integration with popular ATS systems.
   * LinkedIn profile integration.
   * Calendar scheduling for interviews.

## Team Members

* **Tikesh Aswale** - *Full Stack Developer*


## Acknowledgments

* **MongoDB Atlas:** For providing reliable cloud database services.
* **Vercel:** For seamless frontend deployment.
* **Railway:** For efficient backend hosting.
* **Tailwind CSS:** For beautiful and responsive UI components.
* **React Community:** For excellent documentation and support.

## References

* [React Documentation](https://reactjs.org/docs)
* [MongoDB Documentation](https://docs.mongodb.com/)
* [Express.js Guide](https://expressjs.com/en/guide/routing.html)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [Node.js Documentation](https://nodejs.org/en/docs/)