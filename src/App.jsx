import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App= () => {

  window.watsonAssistantChatOptions = { 

    integrationID: "51b8aac2-adbd-49b7-8cb2-00e4694d39a7", // The ID of this integration. 

    region: "eu-gb", // The region your integration is hosted in. 

    serviceInstanceID: "394a3cbe-dd2c-4123-bd5e-12729a883c24", // The ID of your service instance. 

    onLoad: async (instance) => { await instance.render(); } 

  }; 

  setTimeout(function(){ 

    const t=document.createElement('script'); 

    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"; 

    document.head.appendChild(t); 

  }); 

  const [inputValue, setInputValue] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);
  
  const handleInputChange = (e) => { 
    setInputValue(e.target.value); 
  };
  
  const handleInputFocus = () => { 
    setIsInputActive(true); 
  };
  
  const handleInputBlur = () => { 
    setIsInputActive(false); 
  };
  
  const handleSendMessage = () => { 
    if (inputValue.trim()) { 
      // Handle the message sending logic 
      setInputValue(''); 
    }
  };

  const handleKeyDown = (e) => { 
    if (e.key === 'Enter') { 
      handleSendMessage();
    }
  };
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <main className="main-content">
        <div className="z-[10] flex items-center gap-2">
          <a href="/"><img className="h-10 w-auto sm:h-16" alt="The University of Hull" src="//www.hull.ac.uk/assets/developer/static-templates/header/images/new/uoh-white.svg" width={150} height={95} />
          </a>
        </div>
        <div className="title-container">
          <h1>
            <div className="title">
              <span>How</span>
              <span>can</span>
              <span>I</span>
              <span>help</span>
              <span>you?</span>
            </div>
          </h1>
        </div>
        <div className={`input-container ${isInputActive ? 'active' : ''}`}>
          <input type="text"
            placeholder="Ask me something..."
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
          />
          <span className="input-icon" onClick={handleSendMessage}>
            {isInputActive ? '⏎' : '🕒'}
          </span>
        </div>
      </main>
      <footer className="footer">
        <p>Welcome to the University of Hull</p>
      </footer>
    </div>
  )
}

export default App
