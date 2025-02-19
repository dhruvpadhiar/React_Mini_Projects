import React from 'react'

const Card = ({username="Name", college="XYZ"}) => {
  return (
    <div className="max-w-xs p-6 rounded-3xl shadow-md bg-black">
        <img
          src="https://source.unsplash.com/300x300/?random"
          alt=""
          className="object-cover object-center w-full rounded-xl h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Username
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          {college}
        </p>
      </div>
  )
}

export default Card