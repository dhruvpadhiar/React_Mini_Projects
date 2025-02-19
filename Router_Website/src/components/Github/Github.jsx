import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData()
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/dhruvpadhiar')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt='pfp'/>
        </div>
  )
}

export default Github

export const GithubLoader = async () => {
     const response = await fetch('https://api.github.com/users/dhruvpadhiar')
     return response.json()
}