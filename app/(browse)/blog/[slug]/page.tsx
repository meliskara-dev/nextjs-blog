import React from 'react'

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>
}

const BlogDetails = async ({ params }: BlogDetailProps) => {  // ← async eklendi
  const { slug } = await params;

  return (
    <div>BlogDetails {slug}</div>  
  )
}

export default BlogDetails