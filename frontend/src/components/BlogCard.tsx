import { FC } from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard: FC<BlogCardProps> = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}) => {
  return (
    <div className="p-4 border-b-2 border-slate-200 pb-3 w-screen max-w-screen-md">
      <div>
        <Avatar name={authorName} />
        <span className="pl-2 font-normal">{authorName}</span>
        <span className="pl-2 font-light text-slate-400">{publishedDate}</span>
      </div>
      <Link to={`/blog/${id}`}>
      <h1 className="text-xl mt-1 font-bold cursor-pointer">{title}</h1>
      <div className="text-md font-normal text-slate-600 max-w-xl cursor-pointer">{content.slice(0, 100) + "..."}</div>
      </Link>
      <div className="text-slate-400 text-sm pt-4">{`${Math.ceil(content.length / 100)} minutes read`}</div>
    </div>
  );
};

export function Avatar({ name, size = "small" }: { name: string, size?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-7 h-7" : "w-9 h-9"} overflow-hidden bg-orange-400 rounded-full`}>
      <span className={`font-medium text-black ${size === "small" ? "text-xs" : "text-md"}`}>
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
