# Next.js Authentication Project

A Next.js application with Tailwind CSS v4, shadcn UI, and RTK Query for authentication with token and refresh token handling.

## Features

- **Next.js 14** with App Router
- **Tailwind CSS v4**
- **shadcn UI** Components
- **Redux Toolkit** with **RTK Query**
- **JWT Authentication** with Access and Refresh Tokens
- **Protected Routes** for authenticated users
- **Form Validation** with Zod
- **TypeScript Support**
- **API Routes** for authentication endpoints

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication Flow

This project implements a complete authentication system using JWT tokens:

1. **Login/Register**: Authenticates the user and returns access and refresh tokens
2. **Access Token**: Short-lived token used for API requests
3. **Refresh Token**: Long-lived token used to get a new access token when it expires
4. **Protected Routes**: Only accessible to authenticated users

## Test User

For testing purposes, you can use the following credentials:
- **Email**: test@example.com
- **Password**: password123

## Project Structure

- `/src/app` - Next.js application routes
- `/src/app/api` - API route handlers
- `/src/components` - React components
- `/src/store` - Redux store and RTK Query setup
- `/src/lib` - Utility functions and authentication helpers

## Authentication Components

- `LoginForm` - Form for user login
- `RegisterForm` - Form for user registration
- `ProtectedRoute` - HOC to protect routes that require authentication

## API Routes

- `POST /api/auth/login` - Authenticates user and returns tokens
- `POST /api/auth/register` - Creates new user and returns tokens
- `POST /api/auth/refresh` - Generates new access token using refresh token
- `POST /api/auth/logout` - Invalidates user session

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn UI](https://ui.shadcn.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [jose](https://github.com/panva/jose) - JWT implementation
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) - Password hashing
