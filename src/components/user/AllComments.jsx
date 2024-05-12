import React from 'react';

const AllComments = ({ comments }) => {
    console.log(comments)
    
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Comment Description</th>
            <th className="border border-gray-300 px-4 py-2">Post Title</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{comment.description}</td>
              <td className="border border-gray-300 px-4 py-2">{comment.postTitle}</td>
              <td className="border border-gray-300 px-4 py-2 flex items-center gap-2">
                <button className="text-blue-600 hover:text-blue-800" onClick={() => handleEdit(comment.id)}>Edit</button>
                <button className="text-red-600 hover:text-red-800" onClick={() => handleDelete(comment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllComments;
