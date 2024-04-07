import { FC } from "react";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

interface FullBlogProps {
  blog: Blog;
  loading: boolean;
}

const FullBlog: FC<FullBlogProps> = ({ loading, blog }) => {
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="h-screen lg:grid grid-cols-12 gap-5 px-10 pt-20">
      {/* First column */}
      <div className="px-3 lg:col-span-8 lg:px-10">
        <h1 className="text-xl lg:text-5xl font-extrabold py-5">
          {blog.title}
        </h1>
        <div className="text-base font-medium text-slate-400 pb-2">
          Posted on 2nd January 2024
        </div>
        <div className="text-lg font-normal">{blog.content}</div>
      </div>

      {/* 2nd Column */}
      <div className="hidden lg:block lg:col-span-4">
        <div className="p-4 text-lg font-medium text-gray-600">Author</div>
        {/* Logo, Author, Description */}
        <div className="flex gap-3">
          <div className="flex flex-col justify-center">
            <Avatar name={blog.author?.name || "Anonymous"} size="big" />
          </div>
          <div>
            <span className="text-xl font-bold">{blog.author?.name}</span>
            <div className="text-gray-500 pt-1">
              Random Catch phrase about the author's ability to grab the user's
              attention
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
