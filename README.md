# Heli9 Labs Landing Page

A React + Vite landing page for Heli9 Labs, featuring dynamic sections (navbar, hero, services, call-to-action, testimonials) loaded from a JSON data source.

## Project Structure

```
landingpage/
├── public/                # Static assets
│   └── vite.svg
├── src/                   # Source code
│   ├── App.css            # Global styles
│   ├── App.jsx            # Main app component
│   ├── index.css          # Base CSS
│   ├── main.jsx           # Entry point
│   ├── assets/
│   │   ├── data.json      # Section data (used for rendering)
│   │   └── react.svg
│   ├── components/
│   │   ├── CallToAction.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── styles/
│   │       ├── cta.css
│   │       ├── hero.css
│   │       ├── navbar.css
│   │       ├── services.css
│   │       └── testimonials.css
│   └── config/
│       └── strg.jsx       # Supabase client config
├── .gitignore
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # NPM config and scripts
├── README.md              # Project documentation
├── vite.config.js         # Vite config
└── vite.svg
```

## How It Works

- **Data-driven rendering:**  
  The app loads section data from [`src/assets/data.json`](src/assets/data.json) and renders components dynamically based on the `type` field.

- **Main Components:**  
  - [`App.jsx`](src/App.jsx): Loads data and renders sections.
  - [`Navbar.jsx`](src/components/Navbar.jsx): Navigation bar with links and about info.
  - [`Hero.jsx`](src/components/Hero.jsx): Main headline and subtext.
  - [`Services.jsx`](src/components/Services.jsx): Service cards for each team member.
  - [`CallToAction.jsx`](src/components/CallToAction.jsx): Buttons for user actions.
  - [`Testimonials.jsx`](src/components/Testimonials.jsx): Customer reviews.

- **Styling:**  
  Each component has its own CSS file in [`src/components/styles/`](src/components/styles/).

- **Supabase Integration:**  
  [`strg.jsx`](src/config/strg.jsx) sets up a Supabase client for future backend/database use.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Customization

- **Edit section data:**  
  Change [`src/assets/data.json`](src/assets/data.json) to update content and sections.
- **Add new sections:**  
  Add a new object to the JSON with a unique `type` and create a corresponding component.

## Development

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## ESLint

Linting is configured via [`eslint.config.js`](eslint.config.js) for React best practices.

## Vite

Vite is used for fast development and builds. See [`vite.config.js`](vite.config.js).

## License

MIT