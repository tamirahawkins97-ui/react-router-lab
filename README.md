# React Router Lab: Navigation & Route Flow

A client-side routed React application demonstrating route organization, slug-based blog routing, protected administrative views, and smooth route transitions built with **React Router** and **Framer Motion**.

---

## Project Overview & Route Architecture

The application handles routing through an isolated `AnimatedRoutes` setup wrapped inside a global `AuthProvider` and persistent layout:

* **Redirect Defaults (`/` & `*`):** Any baseline hits to `/` or unmatched wildcard paths (`*`) automatically redirect users directly to the main blog feed (`/blog`) using `<Navigate replace />`.
* **Dynamic Content Flow (`/blog` → `/blog/:slug`):** Users browse all posts on the `BlogIndexPage` and navigate into specific, readable articles on the `BlogPostPage` via dynamic `:slug` route parameters.
* **Guarded Administration (`/admin` ↔ `/login`):** Secures the `AdminPage` behind a reusable `<ProtectedRoute>` wrapper tied to authentication state in `AuthContext`, handling unauthorized access and redirecting when necessary.
* **Persistent Layout:** The global `<Navbar />` stays mounted at the top level while views swap dynamically inside the `<main className="site-main">` container.

---

## Motion Transitions *(Honorary Detail)*

* **Framer Motion Integration:** Installed and configured `framer-motion` to replace sudden screen cuts with fluid visual transitions between views.
* **Exit & Entry Coordination:** Routed the app with `<AnimatePresence mode="wait">` tracking `location.pathname` as the route key. This ensures the exiting page completely finishes unmounting before the new route animates into place.
* **Calm Navigation Experience:** Implemented a reusable `<PageTransition>` component wrapping each page in a subtle motion curve (`opacity: 0 → 1`, vertical shift `y: 8 → 0` over `0.2s easeOut`). This produces a calm, polished transition when switching between navbar links as well as opening individual blog posts.
