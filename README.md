# SkillMint - Advanced Student Professional Dashboard

SkillMint is a high-fidelity frontend platform designed to showcase a student's professional technical journey. It features role-based access control, a professional "Startup" light theme, and advanced integrations like a live Codolio portfolio.

##  Features
- **Role-Based Access Control (RBAC)**: Distinct dashboards for Students, Faculty, and Admin.
- **Advanced Insight Hub**: Comprehensive student profile featuring:
  - **Live Codolio Portfolio**: Interactive iframe embedding real-time coding metrics.
  - **Skills Cloud**: Dynamic tag-based visualization of technical proficiency.
  - **Experience & Certifications**: Professional timeline and credential grid.
- **Faculty Dashboard**: Mentorship tools, talent discovery, and recruitment tracking.
- **Premium UI**: Modern light theme with vibrant Indigo, Teal, Orange, and Green accents.

##  Demo Access
| Role | Email | Password |
|------|-------|----------|
| **Super Admin** | `admin@skillmint.com` | `admin123` |
| **Faculty** | `faculty@college.edu` | *any* |
| **Student** | `jane@example.com` | *any* |

> [!NOTE]
> Emails containing "faculty" are automatically assigned the faculty role during signup.

---

##  Project Setup

### 1. Local Setup (Without Docker)

Follow these steps to run the project directly on your machine:

**Prerequisites:**
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

**Steps:**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/GVK-Sindhu/skillmint2.git
   cd skillmint2
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Access the app:**
   Open `http://localhost:5173` (or the port shown in your terminal).

---

### 2. Docker Setup (Recommended)

Run the project in a containerized environment using Docker:

**Prerequisites:**
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

**Steps:**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/GVK-Sindhu/skillmint2.git
   cd skillmint2
   ```
2. **Build and run the container:**
   ```bash
   docker-compose up --build -d
   ```
3. **Access the app:**
   Open `http://localhost:8080`.

**Useful Docker Commands:**
- **Stop the containers:** `docker-compose down`
- **View logs:** `docker-compose logs -f`
- **Rebuild after changes:** `docker-compose up --build`

---

##  Tech Stack
- **Frontend**: React.js, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: Frontend-only `localStorage` simulation
