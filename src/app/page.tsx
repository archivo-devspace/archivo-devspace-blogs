import Comparison from "@/app/_components/_commons/_blog/Comparison";
import { Blog, BlogBody, BlogBodyType } from "./_models/Blog.type";
import ComparisonProps from "@/app/_components/_commons/_blog/Comparison/index.type";
import data from "@/app/_data/_blogs/better-software-programmer-note-1.json";
import React from "react";

export default function Home() {
  const blog: Blog = data as Blog;

  const getComparison = (value: BlogBody[]): ComparisonProps => {
    const obj = { positive: "", negative: "" };

    value.forEach((v) => {
      if (v.type === "negative" && typeof v.value === "string") {
        obj.negative = v.value;
      } else if (v.type === "positive" && typeof v.value === "string") {
        obj.positive = v.value;
      }
    });

    return obj;
  };

  const getBlogBody = (
    type: BlogBodyType,
    value: string | BlogBody[]
  ): React.ReactElement => {
    return (
      <>
        {typeof value === "string" && (
          <>
            {type === "h2" && (
              <h2 className="text-xl font-bold my-4">{value}</h2>
            )}

            {type === "h4" && <h4 className="font-bold my-4">{value}</h4>}

            {type === "p" && <p>{value}</p>}

            {type === "span" && <span>{value}</span>}

            {type === "b" && <b>{value}</b>}

            {type === "i" && <i>{value}</i>}
          </>
        )}

        {Array.isArray(value) &&
          (type === "comparison" ? (
            <Comparison {...getComparison(value)} />
          ) : (
            value.map((v) => getBlogBody(v.type, v.value))
          ))}
      </>
    );
  };

  return (
    <main className="p-4 bg-slate-200 min-h-screen">
      {blog.mainTitle && (
        <div className="mb-5">
          <h1 className="text-2xl font-bold">{blog.mainTitle}</h1>
        </div>
      )}

      {blog.subTitle && (
        <div className="mb-5">
          <h1 className="text-xl font-bold">{blog.subTitle}</h1>
        </div>
      )}

      <div className="bg-slate-50 p-4 border-b-2 text-justify leading-6">
        {blog.body.map(({ type, value }, index) => (
          <React.Fragment key={index}>
            {getBlogBody(type, value)}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
}
