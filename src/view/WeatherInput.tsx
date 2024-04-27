import { ChangeEvent, useState } from "react";


{/* inspiré de : codefrontend.com/reactjs-get-input-value/   */}
{/* je spécifie les types ici car la type inference ne marchait pas correctement  */}

export const WeatherInput = (
    { inputText, setInputText}
    : { inputText : string;
        setInputText: React.Dispatch<React.SetStateAction<string>>; 
    }       
) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputText} />

      <p>input: {inputText}</p>
    </div>
  );
};