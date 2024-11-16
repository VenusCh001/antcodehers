


import React, { useState } from 'react';

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(true);

  

  return (
    <div>
      
     
      {showChatbot && (
        <div style={styles.chatbotContainer}>
          <iframe
            src="http://localhost:4000" // Replace with your chatbot URL
            title="Chatbot"
            style={styles.iframe}
            scrolling='no'
          ></iframe>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // Centers the iframe horizontally and vertically
    zIndex: '1000', // Ensures the chatbot is above other content
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iframe: {
    width: '500px', // Adjust width as needed
    height: '500px', // Adjust height as needed
    border: 'none',
  },
};

export default Chatbot;
