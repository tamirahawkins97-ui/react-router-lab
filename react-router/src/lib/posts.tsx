export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    slug: 'what-is-react-router',
    title: 'What is React Router?',
    content:
      'React Router is a standard library for routing in React. It enables navigation between views in a React application, syncs browser URLs, and manages dynamic route parameters seamlessly.'
  },
  {
    id: 2,
    slug: 'why-use-react-router',
    title: 'Why use React Router?',
    content:
      'React Router enables single-page applications (SPAs) with smooth client-side transitions, avoiding full document reloads and preserving application state across routes.'
  },
  {
    id: 3,
    slug: 'how-to-use-react-router',
    title: 'How to Use React Router?',
    content:
      'Wrap your root component inside <BrowserRouter>, configure route hierarchies with <Routes> and <Route>, and navigate between endpoints using the type-safe <Link> and <NavLink> components.'
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}