# BetterAuthFlow - Next.js & Better Auth Template

BetterAuthFlow is a modern, minimal starter project demonstrating a complete authentication flow in a Next.js application using the powerful **Better Auth** library. The primary goal is to provide a clean, production-ready template for developers looking to implement robust, self-hosted authentication without relying on third-party services.

This project features a sleek landing page, a secure social sign-in flow with Google, a protected dashboard, and a theme system with Dark and Silver modes.

<br/>

![BetterAuthFlow Screenshot](docs/image.png)

---

## ✨ Features

- **🔐 Self-Hosted Authentication:** Full sign-in, sign-out, and session management powered by **Better Auth**.
- **🛡️ Protected Routes:** A secure `/dashboard` route accessible only to authenticated users, enforced with server-side session validation.
- **🚀 Modern Tech Stack:** Built with Next.js 15+ (App Router), TypeScript, and Tailwind CSS v4.
- **🧩 Component-Based UI:** Styled with the brilliant [ShadCN/UI](https://ui.shadcn.com/) component library for a polished, accessible interface.
- **🎨 Custom Color Palette:** A beautiful Dark & Silver theme system with custom color variables for consistent styling.
- **📂 Clean Architecture:** An organized and intuitive folder structure that clearly separates concerns and is easy to scale.
- **💾 SQLite Database:** Uses a simple, file-based SQLite database for user and session persistence, perfect for getting started quickly.
- **🔑 Google OAuth Integration:** Seamless social authentication with Google using OAuth 2.0.

---

## 🛠️ Tech Stack

| Technology      | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| **Next.js 15**  | The React Framework for the Web with App Router.           |
| **Better Auth** | A comprehensive, self-hosted auth library for TypeScript.   |
| **TypeScript**  | Static typing for robust and maintainable code.             |
| **Tailwind CSS v4** | A utility-first CSS framework with CSS variables.      |
| **ShadCN/UI**   | Re-usable components built with Radix UI & Tailwind.        |
| **Lucide React**| Beautiful and consistent open-source icons.                 |
| **PNPM**        | A fast, disk space-efficient package manager.               |
| **SQLite**      | A file-based SQL database engine for local persistence.     |

---

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

First, clone the project repository to your local machine.

```bash
git clone https://github.com/AmirUpSkill/Better-Auth.git
cd Better-Auth
```

### 2. Install Dependencies

Install the necessary project dependencies using `pnpm`.

```bash
pnpm install
```

### 3. Set Up Environment Variables

This project requires API keys from Google and a secret key for Better Auth.

1.  **Create a `.env.local` file** in the root of your project:
    ```bash
    touch .env.local  # On Windows: New-Item .env.local
    ```

2.  **Generate a Better Auth Secret**. You can use the following command:
    ```bash
    openssl rand -base64 32
    ```

3.  **Get Google Credentials**:
    - Go to the [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
    - Create a new **OAuth 2.0 Client ID**
    - Add `http://localhost:3000/api/auth/callback/google` to **Authorized redirect URIs**
    - For production, add your domain: `https://yourdomain.com/api/auth/callback/google`
    - Copy your **Client ID** and **Client Secret**

4.  **Update your `.env.local` file** with your credentials:

    ```env
    # Better Auth Configuration
    BETTER_AUTH_SECRET="your_generated_secret_key_here"
    BETTER_AUTH_URL=http://localhost:3000

    # Google OAuth Credentials
    GOOGLE_CLIENT_ID="your_google_client_id_here"
    GOOGLE_CLIENT_SECRET="your_google_client_secret_here"
    ```

### 4. Set Up the Database

Better Auth needs to create tables in your database. Run the following command to migrate the schema:

```bash
npx @better-auth/cli migrate
```

This will create an `auth.db` SQLite file in your project root with all necessary tables (users, sessions, accounts, verification).

### 5. Run the Development Server

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the running application.

---

## 📁 Project Structure

The project uses Next.js App Router and follows a clean, feature-grouped folder structure:

```
📁 better-auth/
├── 📁 app/                                   # Next.js App Router
│   ├── 📁 (main)/                           # Protected routes group
│   │   ├── 📁 dashboard/                    # Protected dashboard page
│   │   │   └── 📄 page.tsx                  # "Hello, World" + User Details
│   │   └── 📄 layout.tsx                    # Layout for protected pages
│   │
│   ├── 📁 api/                              # API routes
│   │   └── 📁 auth/                        # Authentication endpoints
│   │       └── 📁 [...all]/                # 🔑 Better Auth's core handler
│   │           └── 📄 route.ts              # Handles all auth API calls
│   │
│   ├── 📄 globals.css                       # Global styles & custom theme
│   ├── 📄 layout.tsx                        # Root layout with providers
│   └── 📄 page.tsx                          # Public landing page
│
├── 📁 components/                           # Reusable UI components
│   ├── 📁 providers/                        # Context providers
│   │   └── 📄 theme-provider.tsx            # Theme context provider
│   │
│   ├── 📁 shared/                          # Shared components
│   │   ├── 📄 header.tsx                    # Main navigation header
│   │   └── 📄 theme-toggle.tsx              # Dark/Silver mode toggle
│   │
│   └── 📁 ui/                               # ShadCN/UI components
│       ├── 📄 button.tsx                    # Button component
│       └── 📄 card.tsx                      # Card component
│
├── 📁 lib/                                  # Utility functions
│   ├── 📄 auth-client.ts                    # Better Auth client configuration
│   └── 📄 utils.ts                          # Utility functions (cn, etc.)
│
├── 📁 docs/                                 # Documentation & assets
│   └── 📁 screenshots/                      # App screenshots
│
├── 🔑 auth.ts                              # ⭐ Better Auth server configuration
├── 🗄️ auth.db                              # SQLite database (auto-generated)
├── ⚙️ .env.local                           # Environment variables
└── ...                                     # Config files (Next.js, Tailwind, etc.)
```

---

## 🎯 Key Implementation Details

### Authentication Flow

1. **Landing Page**: Users see a clean hero section with "Start for Free" CTA
2. **Google OAuth**: Clicking sign-in triggers Google OAuth flow via Better Auth
3. **Session Management**: Better Auth handles session creation and management
4. **Protected Routes**: Dashboard is server-side protected with session validation
5. **User Data**: Profile information is stored in SQLite and displayed on dashboard

### Theme System

The app implements a custom Dark & Silver theme using Tailwind CSS v4 variables:

- **Dark Mode**: Deep blacks (#1a1a1a) with orange accents (#ff8c42)
- **Silver Mode**: Light grays with metallic silver tones for a professional look
- **CSS Variables**: All colors are defined as CSS custom properties for consistency

### Better Auth Configuration

```typescript
// auth.ts
export const auth = betterAuth({
    database: new Database("./auth.db"),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }
    },
    emailAndPassword: {
        enabled: false, // Only using social auth for this MVP
    }
});
```

---

## 🔒 Security Features

- **Server-Side Session Validation**: All protected routes validate sessions server-side
- **Secure Cookie Management**: Better Auth handles secure session cookies
- **CSRF Protection**: Built-in CSRF protection for all auth endpoints
- **Environment Variables**: Sensitive credentials stored securely in environment variables

---

## 🚀 Deployment

### Vercel (Recommended)

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Add environment variables in Vercel dashboard:
   - `BETTER_AUTH_SECRET`
   - `BETTER_AUTH_URL` (your production domain)
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
4. Update Google OAuth redirect URI to your production domain
5. Deploy!

### Other Platforms

Better Auth works with any platform that supports Node.js. Update the `BETTER_AUTH_URL` environment variable to your production domain.

---

## 🛠️ Development

### Adding More Providers

Better Auth supports many OAuth providers. To add GitHub, for example:

```typescript
// auth.ts
socialProviders: {
    google: { /* ... */ },
    github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }
}
```

### Customizing the UI

All UI components are built with ShadCN/UI and can be easily customized:

```bash
# Add more components
pnpm dlx shadcn@latest add dropdown-menu
pnpm dlx shadcn@latest add avatar
```

### Database Inspection

To view your SQLite database, use VS Code with the SQLite extension:

1. Install "SQLite" extension in VS Code
2. Right-click on `auth.db` → "Open Database"
3. Explore tables: `user`, `session`, `account`, `verification`

---

## 📖 Learning Resources

This project was built as a hands-on exploration of modern authentication patterns. Key learnings:

- **Better Auth vs. Clerk**: Self-hosted vs. managed auth services
- **Server-Side Sessions**: Implementing secure session management
- **OAuth 2.0 Flow**: Understanding social authentication
- **Next.js App Router**: Modern React patterns with server components

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Better Auth](https://better-auth.com) - For the excellent authentication library
- [ShadCN/UI](https://ui.shadcn.com) - For the beautiful component system
- [Lucide](https://lucide.dev) - For the clean and consistent icons
- [Tailwind CSS](https://tailwindcss.com) - For the utility-first CSS framework

---

**Built with ❤️ by [Amir Abdallah](https://github.com/AmirUpSkill)**

*This project is part of my journey to master modern authentication patterns in the TypeScript ecosystem. Follow along for more open-source templates and learning resources!*
