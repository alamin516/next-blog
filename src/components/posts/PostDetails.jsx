import React from 'react'
import parse from 'html-react-parser'
import "@/assets/style/style.css";

const PostDetails = ({post}) => {
  console.log(post)
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow md:p-3'>
        <h1 className='md:text-xl text-gray-500 mb-3'>{post['title']}</h1>
        <div className='text-gray-600'>
            {parse(post['longDes'])}
        </div>
    </div>
  )
}

export default PostDetails