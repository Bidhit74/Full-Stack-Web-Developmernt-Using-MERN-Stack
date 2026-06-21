# Product details

## Requirements

- npm init -y
- type - module
- npm install --save-dev nodemon
- script change use nodemon
- install multiple thing:
- npm install express cors cookie-parser dotenv jsonwebtoken nodemailer

## Prisma Setup and configuration

1. init Command

```bash
npx prisma init (optional(--database-provider like postgresql))
```

- `Schema.prisma`: This file contains the database schema definition.

### env file

- in root directory of your project, create a file called .env and add following environment variables.

- `DATABASE_URL = "Add your DB ULR"`

### Prisma Migrations & Deploy Cammand

- `npx prisma migrate dev`
- `npx prisma migrate deploy`

### Formating Cammand

- `npx prisma format`
