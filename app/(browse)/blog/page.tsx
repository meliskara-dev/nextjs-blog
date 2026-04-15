'use client'

import BlogTypeOne from '@/components/blog/BlogTypeOne';
import BlogTypeTwo from '@/components/blog/BlogTypeTwo';
import { Blogs, BlogType } from '@/constans'
import React, { useEffect, useState } from 'react'

const BlogPage = () => {

  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    setBlogs(Blogs)
  }, [])
  return (
    <>
      <div className='container mx-auto mt-8'>
        <h2 className='text-2xl font-semibold text-center'>Blogs Of Today</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {blogs.map((blog, index) => (
            <BlogTypeOne key={index}
              title={blog.title}
              id={blog.id}
              description={blog.description}
              image={blog.image}
              active={blog.active}
            />
          ))}

        </div>
      </div>

      <div className='container mx-auto mt-8'>
        <h2 className='text-2xl font-semibold text-center'>Blogs Of Yesterday</h2>

      </div>

      <div className='container mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {blogs.map((blog, index) => (
          <BlogTypeTwo blog={blog} key={index} />

        ))}

      </div>
    </>
  )
}

export default BlogPage