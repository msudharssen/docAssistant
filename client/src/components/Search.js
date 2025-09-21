import React from 'react'
import { useState } from 'react'

function Search({helper, info, info2}) {
    const [query, setQuery] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        info(prevItems => [...prevItems, query])
        info2(prevItems => [...prevItems, "User"])
        const answer = await helper(query);
        console.log("From search!",answer);
        console.log(info);
        console.log(info2);
        setQuery("");
       
      }
    
  return (
    <div className="fixed left-1/4 top-3/4 w-3/4 h-1/4 bg-slate-800 text-white flex items-center justify-between p-6">
      <input className="w-5/6 p-2 rounded-lg text-black" type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}}placeholder="Type your question here..." />
      <button className="bg-white text-black px-4 py-2 rounded-lg ml-4" onClick={handleSubmit}>Send</button>
    </div>
  )
}

export default Search;
