// src/pages/Blog.jsx
import React from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/Blog.css';

const Blog = () => {
  const blogs = [
    { id: 1, title: 'Top 10 Destinations in 2023', image: '/assets/images/blog1.jpg' },
    { id: 2, title: 'Travel Tips for Beginners', image: '/assets/images/blog2.jpg' },
  ];

  return (
    <div className="blog">
      <h1>Travel Blog</h1>
      <div className="blog-cards">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} title={blog.title} image={blog.image} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
