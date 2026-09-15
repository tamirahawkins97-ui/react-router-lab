import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { getPostBySlug } from '../lib/posts';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <PageTransition>
        <section className="article-shell not-found">
          <Link className="text-link" to="/blog">
            &larr; Back to articles
          </Link>
          <h1>Post not found</h1>
          <p className="article-shell__body">
            We could not find any post matching the slug "<strong>{slug}</strong>".
          </p>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <article className="article-shell">
        <Link className="text-link" to="/blog">
          &larr; Back to articles
        </Link>
        <p className="eyebrow">Article 0{post.id}</p>
        <h1>{post.title}</h1>
        <p className="article-shell__body">{post.content}</p>
      </article>
    </PageTransition>
  );
};