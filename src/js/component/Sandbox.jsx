import React from "react";
import { useState } from "react";
import TaskCard from "./List.jsx";


export default function App() {
    const [message, setMessage] = useState('');
  
    const [updated, setUpdated] = useState('');
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        //  Get input value
        setUpdated(message);
      }
    };
  
    return (
      <div>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Start typing"
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        
            <TaskCard>
                {updated}
            </TaskCard>

            <TaskCard>
                {updated}
            </TaskCard>
  
        {/* <h2 className="mt-3">{updated}</h2> */}
      </div>
    );
  }

