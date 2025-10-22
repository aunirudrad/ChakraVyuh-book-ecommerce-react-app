# ChakraVyuh — Book ECommerce Website (React + Vite)

Live demo: https://chakra-vyuh-book-ecommerce-react-ap-flame.vercel.app/

A small React application built with Vite that displays a catalogue of books and a detailed book view. The project is intended for learning and milestone work in a web development course.

Key points

- Built with React and Vite.
- Uses React Router (loaders) to supply book data to pages.
- Sample data lives in `public/data/booksData.json`.
- Optional Tailwind CSS utilities are used in some components for styling.

Project structure (important files)

- `index.html` — Vite entry HTML.
- `src/main.jsx` — React app bootstrap.
- `src/Routes/Routes.jsx` — application routes and route loaders (provides book data to pages).
- `src/pages/` — page components:
  - `Home/` — homepage listing
  - `Books/` — listing and single book components
  - `BookDetails/BookDetails.jsx` — detailed book view (uses route param `ID` and `useLoaderData()` to get the books array)
  - `ListedBooks/`, `Root/` — supporting pages
- `public/data/booksData.json` — static JSON used as the datasource for the app
- `src/components/` — shared UI components: `Header`, `Footer`, `Banner`, etc.

Run locally (Windows PowerShell)

1. Install dependencies
   - npm install
2. Start the dev server
   - npm run dev
3. Open the URL shown by Vite (usually http://localhost:5173)

Build for production

- npm run build
- npm run preview (to preview the production build locally)

Notes for routing and data

- The BookDetails route expects a route param named `ID` (capitalized in current code). Example route path: `/books/:ID`.
- The BookDetails component uses `useLoaderData()` to receive the entire books array and then finds the single book by `bookId`.
- If you change the route param name or loader shape, update `BookDetails.jsx` accordingly.

Tailwind CSS (optional)

- Some components use Tailwind utility classes. If Tailwind is not yet installed in this project, install and configure it:
  1. npm install -D tailwindcss postcss autoprefixer
  2. npx tailwindcss init -p
  3. In `tailwind.config.cjs` (or .js) set content to include `./index.html` and `./src/**/*.{js,jsx}`
  4. Add the Tailwind directives to your main CSS (e.g., `src/index.css`):
     - @tailwind base;
     - @tailwind components;
     - @tailwind utilities;
  5. Restart the dev server.

Styling and customization

- The BookDetails design can be implemented using plain CSS or Tailwind utilities. There is a `src/pages/BookDetails/BookDetails.jsx` component styled with Tailwind classes in this workspace — adapt as needed.

Contributing / next steps

- Add route loaders to fetch or read `booksData.json` (if not already present in `Routes.jsx`).
- Hook up Read/Wishlist buttons to real actions (localStorage, navigation, or API).
- Improve accessibility and add tests if required by the course.

Contact / Course notes

- This repository is part of a web development milestone. Keep commits focused and small so you can track changes for review.

License

- MIT (or change to your preferred license)
