# Real-Trust-full-stack
A full-stack web application built with React, Node.js, Express, and MongoDB that includes a modern landing page and an admin panel for managing projects, clients, contact form submissions, and newsletter subscriptions.

Live Deployment Links:

Frontend (Landing Page + Admin Panel)
https://real-trust-full-stack-one.vercel.app/

Backend (REST APIs)
https://real-trust-full-stack-1.onrender.com

Core Features & Working
🔹 Landing Page (User Side)

Fully Responsive UI
Designed using Tailwind CSS to match the provided reference across all screen sizes.

Our Projects Section

Displays project image, title, and description

Data is fetched dynamically from backend APIs

Automatically updates when admin adds or modifies projects

Happy Clients Section

Shows client image, name, designation, and feedback

Data is dynamically loaded from the database

Contact Form

Collects user details (Name, Email, Mobile, City)

Data is validated and stored securely in MongoDB

Entries are visible in the Admin Panel

Newsletter Subscription

Stores subscribed email addresses in the database

Prevents duplicate entries (backend validation)

🔹 Admin Panel (CMS Functionality)

Access Route:
/admin
Example:
https://real-trust-full-stack-one.vercel.app/admin

The Admin Panel acts as a Content Management System (CMS) for the entire website.

✅ Admin Capabilities

Project Management

Upload project image

Add project name and description

Data stored in MongoDB and instantly reflected on landing page

Client Management

Upload client image

Add name, designation, and feedback

Updates visible in real-time on frontend

Contact Form Management

View all user contact submissions

Data fetched directly from MongoDB

Newsletter Management

View all subscribed email addresses

Centralized management via admin dashboard

Image Cropping Feature (Important Enhancement)

Implemented directly in the Admin Panel

Images are cropped to a fixed aspect ratio (450 × 350) before upload

Ensures:

Uniform image dimensions

Consistent layout

Professional UI appearance

Cropped images are then:

Sent to backend

Stored and served efficiently

Application Workflow (End-to-End)

Admin logs into Admin Panel

Admin adds or updates projects and clients

Backend REST APIs handle data storage using MongoDB Atlas

Landing page fetches updated data using Axios

UI updates automatically without redeployment

Contact form and newsletter data is stored and visible in Admin Panel

Technology Stack
Frontend

React.js (Vite)

Tailwind CSS

Axios

React Router DOM

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose (ODM)

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

Frontend and backend are deployed independently and communicate via REST APIs.


👩‍💻 Developed By

Priyanshi Shrivastava