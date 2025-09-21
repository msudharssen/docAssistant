import React from 'react'
import { useState } from 'react'


function Upload({helper3}) {

    const [file, setFile] = useState(null);

    function whenFileChange(e) {
        setFile(e.target.files[0]);
    }


    async function handleSubmit(e) {
        e.preventDefault();
        await helper3(file); 
    }

    

  return (
    <div className="fixed left-0 top-0 w-1/4 h-full bg-gray-900 text-white flex flex-col justify-center">
        <div className='gap-1 justify-evenly flex'>
      <form onSubmit={handleSubmit} className="m-4 flex flex-col gap-4">
        <label className="mb-2 self-center">Upload File:</label>
        <input className="self-center" type="file" onChange={whenFileChange} accept="application/pdf" ></input>
        <button className='bg-white text-black w-full'>Upload</button>
      </form>
      </div>
    </div>
  )
}

export default Upload;
