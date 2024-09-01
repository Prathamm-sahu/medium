import { FC, useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

interface BlogsProps {}

const Blogs: FC<BlogsProps> = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-12">
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            authorName={blog.author?.name || ""}
            title={blog.title}
            content={blog.content}
            publishedDate="10/12/2024"
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
