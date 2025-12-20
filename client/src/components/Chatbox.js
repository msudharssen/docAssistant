function Chatbox({info, info2}) {
  return (
    <div data-testid="chatbox-component"className="fixed left-1/4 bottom-1/4 w-3/4 h-3/4 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 flex items-center justify-center">
      <div className="w-full h-full overflow-y-auto p-4">
      {info.map((message, index) => (
        <div key={index} className={`mb-4 ${info2[index] === "User" ? 'text-right' : 'text-left'}`}>
          <div className={`inline-block p-3 rounded-lg ${info2[index] === "User" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
            {message}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Chatbox;
