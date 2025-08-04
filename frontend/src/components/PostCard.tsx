"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  post: { _id: string; title: string; content: string; createdAt: string; user: { _id: string; name: string } };
}

const PostCard: FC<Props> = ({ post }) => {
  const router = useRouter();
  const [navLoading, setNavLoading] = useState(false);

  return (
    <div className="relative">
      {/* Card Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            {post.user.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p
              className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors flex items-center space-x-2"
              onClick={async () => {
                setNavLoading(true);
                await router.push(`/profile/${post.user._id}`);
                // Don't setNavLoading(false) here, let the navigation finish and the component unmount
              }}
            >
              {post.user.name}
            </p>
            <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex space-x-6">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm">Like</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm">Comment</span>
            </button>
          </div>
        </div>
      </div>
      {/* Fullscreen Loading Overlay */}
      {navLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80 rounded-xl">
          <svg className="animate-spin w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default PostCard;
