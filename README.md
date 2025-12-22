# 🏥 Dr. Karthik Paidi - Ruthvik Hospitals Website

Professional orthopedic surgery website for Dr. Karthik Paidi in Visakhapatnam.

## ✨ Features

- 29 Orthopedic Services
- Doctor Profile & Qualifications
- Photo & Video Galleries (Supabase Storage)
- Online Appointment Booking
- Contact Form with Email
- Admin Panel for Media Management
- Mobile Responsive Design
- Fast & Secure (HTTPS)

## 🚀 Quick Deployment

### **Option 1: Deploy to Netlify (Recommended - Easiest)**

See **DEPLOY_NOW_STEP_BY_STEP.md** for complete instructions.

**Quick Steps:**
1. Deploy backend to Render.com (FREE)
2. Deploy frontend to Netlify (FREE)
3. Add environment variables
4. Done! Website is live!

**Time:** 30 minutes  
**Cost:** ₹0 (100% FREE)

### **Option 2: Setup Google Search**

See **GOOGLE_SEARCH_COMPLETE_GUIDE.md** for making your website appear on Google.

## 📁 Project Structure

```
ruth/
├── apps/
│   ├── frontend/          # Next.js frontend
│   │   ├── components/    # React components
│   │   ├── pages/         # Next.js pages
│   │   ├── public/        # Static files
│   │   ├── data/          # Services data
│   │   └── lib/           # Supabase client
│   └── backend/           # Express backend
│       ├── src/
│       │   ├── routes/    # API routes
│       │   ├── utils/     # Email utilities
│       │   └── db/        # Supabase connection
│       └── package.json
├── DEPLOY_NOW_STEP_BY_STEP.md      # Deployment guide
├── GOOGLE_SEARCH_COMPLETE_GUIDE.md # Google Search setup
└── README.md                        # This file
```

## 🔧 Tech Stack

**Frontend:**
- Next.js 14
- React 18
- Tailwind CSS
- Supabase Client

**Backend:**
- Node.js
- Express
- Nodemailer
- Supabase

**Database & Storage:**
- Supabase (PostgreSQL + Storage)

**Hosting:**
- Frontend: Netlify (FREE)
- Backend: Render (FREE)

## 🌐 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_API_URL=your-backend-url
```

### Backend (.env)
```
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=5000
```

## 📞 Admin Access

**URL:** `your-website.com/admin/media-upload`  
**Password:** `karthik@ruthvik`

**Features:**
- Upload photos to gallery
- Upload videos (YouTube URLs)
- Delete media
- View statistics

## 🏃 Local Development

### Frontend
```bash
cd apps/frontend
npm install
npm run dev
# Opens on http://localhost:3000
```

### Backend
```bash
cd apps/backend
npm install
npm start
# Runs on http://localhost:5000
```

## 📊 Database Setup

Run these SQL files in Supabase SQL Editor:

1. `SUPABASE_TABLES.sql` - Creates all tables
2. `SUPABASE_UPDATE_DOCTORS_TABLE.sql` - Updates doctors table
3. `SUPABASE_UPDATE_APPOINTMENTS_TABLE.sql` - Updates appointments table
4. `SUPABASE_STORAGE_POLICY.sql` - Sets up storage policies

## 🎯 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Supabase project created
- [ ] Database tables created
- [ ] Storage bucket created ("media")
- [ ] Gmail App Password obtained
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Netlify
- [ ] Environment variables added
- [ ] Website tested
- [ ] Admin panel tested
- [ ] Google Search Console setup (optional)
- [ ] Google My Business created (optional)

## 📝 Important Files

- **DEPLOY_NOW_STEP_BY_STEP.md** - Complete deployment guide
- **GOOGLE_SEARCH_COMPLETE_GUIDE.md** - Google Search setup
- **SUPABASE_TABLES.sql** - Database schema
- **.env.example** - Environment variables template

## 🆘 Support

For deployment help, see **DEPLOY_NOW_STEP_BY_STEP.md**

For Google Search help, see **GOOGLE_SEARCH_COMPLETE_GUIDE.md**

## 📄 License

Private project for Dr. Karthik Paidi - Ruthvik Hospitals

---

**Ready to deploy?** Open **DEPLOY_NOW_STEP_BY_STEP.md** and follow the steps!
