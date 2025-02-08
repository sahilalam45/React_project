import React, { useState } from "react";
import { useEffect } from "react";

function Github() {
    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(response => response.json())
        .then(response => {
            setData(response)
        })
    } , [])

    return (
        <div className="text-3xl bg-gray-700 text-white text-center p-4">Github followers: {data.followers}
        <img src={data.avatar_url} alt="user_image" width={300}/>
        </div>
    )
}

export default Github