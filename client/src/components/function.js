export async function getAnswer(query){
    
    try {
      const response = await fetch("http://server:5001/answerquerry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "search": query }),
      });

        const data = await response.json(); 
        console.log("Result:", data);
        setMessages(prevItems => [...prevItems, data.answer])
        setUser(prevItems => [...prevItems, "AI"])
        return data;
    }catch(e) {
        console.error("Backend error:", e.message);
        return -1;
    }
}

export function add(a, b) {
    return a + b;
}