import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { posts } from '../lib/posts';

export const BlogIndexPage: React.FC = () => {
  return (
    <PageTransition>
      <section className="content-shell">
        <div className="intro-block">
          <p className="eyebrow">Feed</p>
          <h1>Articles & Logs</h1>
          <p className="intro-block__copy">
            Explore architectural guides, routing conventions, and state transitions.
          </p>
        </div>

        <div className="post-grid">
          {posts.map((post) => (
            <article className="post-card" key={post.id}>
              <span className="post-card__number">0{post.id}</span>
              <h2>{post.title}</h2>
              <p>{post.content.slice(0, 110)}...</p>
              <Link className="text-link" to={`/blog/${post.slug}`}>
                Read article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};