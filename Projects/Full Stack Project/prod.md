# What to build

- I am build Authentication

- \_MS (Management System)
- 🎓 2. LMS (Learning Management System)
- 📝 3. CMS (Content Management System)
- 🏥 4. HMS (Hospital Management System)
- 🏦 5. BMS (Bank Management System)

## Data to host

### User Schema

- name
- email
- password

- role: USER, ADMIN
- isVerified

- passwordResetToken
- passwordResetExpires

- verificationToken
- CreatedAt

## Controller

### User Controller

- Combining different controller

### Register Controller

- Requrement to register - Email, Name, Password
- Use User Model to get data: req.body
- Verification token ke liye use : Cropto
- .env file use karne ke liye : dotenv npm package install
- create utils file sendMail use : install Nodemailler and use mailtrap.io data for mail inbox

### Verify User Controller

- Use User model to get user token
- Check and verify user

### Login Controller

- Use User model to get user data
- Install npm package "bcryptjs" for password increapt/decreapt
- Istall "JWT Token" for Generate JWT token
- Install npm package "cookie-parser" for save token in cookies
- "cookie-parser" ko index.js me add karo aur fir login controller cookies ko save kar sakte kuyki direct cookies ko save nahi kar sakte hai

### Profile Controller

- Import User model to get user data
- validata user
- response send user data

### Logout Controller

- Clear authentication cookie
- Use = clearCookie("token", options)
- res send successfully

### Forgot Controller

### Reset Controller
