import React from 'react'
import Chatbox from './Chatbox'
import Search from './Search'
import Upload from './Upload'
import { useState } from 'react'


function Dashboard() {
    const[messages, setMessages] = useState([])
    const[user, setUser] = useState([])

    async function uploadFile(fileInput){
        if(!fileInput) {
            alert("No file selected");
            return;
        }
        if(fileInput.type !== "application/pdf"){
            alert("Please upload a PDF file");
            return;
        }

        const  formData = new FormData();
        formData.append("file", fileInput);
        try {
            const response = await fetch("http://server:5001/uploadfile", {
              method: "POST",
              body: formData,
            });
        
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const data = await response.json();
            console.log("Result:", data);
          } catch (e) {
            console.error("Backend error:", e.message);
          }
    }

     async function getAnswer(query){
    
        try {
          const response = await fetch("http://server:5001/answerquerry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "search": query }),
          });
    
            const data = await response.json(); 
            console.log("Result:", data);
            setMessages(prevItems => [...prevItems, data.answer])
            setUser(prevItem => [...prevItem, "AI"])
            return data;
        }catch(e) {
            console.error("Backend error:", e.message);
        }
    }



  return (
    <>
    <Chatbox info={messages} info2={user}/>
    <Search helper={getAnswer} info={setMessages} info2={setUser} />
    <Upload helper3={uploadFile} />
    </>
  )
}

export default Dashboard
