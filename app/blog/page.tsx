import { NextPage } from "next";
import { use } from "react";
import { getBlogs } from "@/lib/blogs";
import Image from "next/image";
import Link from "next/link";

async function getInitialBlogs() {
  const blogs = getBlogs();
  return blogs;
}

const shortify = (text: string, maxLength = 60) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + " ...";
}

const Page: NextPage = () => {
  const blogs = use(getInitialBlogs());
  
  return (
    <div>
      <h1 className="font-bold text-3xl font-serif text-white">Blog</h1>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-4">
        {blogs.map(blog => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`} className="bg-zinc-800 rounded-xl">
            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
            <Image
                width={200}
                height={200}
                src={blog.coverImage}
                alt={""}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="p-2">
               <h3 className="mt-4 text-sm text-white">{blog.title}</h3>
            </div>
           
         
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page;