# JobsPro Platform Clone — React (Vite)

Minimal JobsPro clone 
> Deploy this repo to Vercel or Netlify (see Deploy notes below).

## Tech
- React + Vite
- react-router-dom (v6)
- LocalStorage simulated authentication

## Features
- Two roles: **Job-Seeker** and **Job-Poster**
- Separate login/register for each role (simulated)
- Role-based routing & protection
- Dashboards with 3 modules:
  - Dashboard overview
  - KYC Verification (simulated)
  - Jobs page (apply / post)
- Logout clears session
- Mock data included

## Run locally
1. `git clone <repo>`
2. `cd jobspro-clone`
3. `npm install`
4. `npm run dev`
5. Open `http://localhost:5173`

## How to test user flows
- Home page has buttons:
  - Login as Job-Seeker -> `/login/seeker`
  - Login as Job-Poster -> `/login/poster`
- Register works the same and logs you in.
- Once logged in:
  - Job-Seeker routes are under `/seeker/*`.
  - Job-Poster routes are under `/poster/*`.
  - Attempting to access the other role's path redirects you appropriately.
- KYC forms update simulated KYC status stored in localStorage.
- Logout clears localStorage.

## Deployment
- Build: `npm run build`
- Deploy the `dist` folder to Vercel or Netlify.
- On Vercel: connect the repo, set root to project, build command `npm run build`, output `dist`.

## Notes & optional enhancements
- Replace file inputs with real upload endpoints for production.
- Add form validation libraries (Yup, react-hook-form).
- Replace mock data with API endpoints for persistence.

## Demo project
 Live Demo: https://jobspro-clone-zeta.vercel.app/
 GitHub Repository: https://github.com/LASGLOWTECH/Jobspro_clone