import { ChangeEvent, useState } from "react";


/* todo facultatif : faire "entrée" dans le input devrait MAJ inputText*/

/* inspiré de : codefrontend.com/reactjs-get-input-value/   */
/* je spécifie les types ici car la type inference ne marchait pas correctement  */

export const WeatherInput = (
    { inputText, setInputText}
    : { inputText : string;
        setInputText: React.Dispatch<React.SetStateAction<string>>; 
    }       
) => {
  const [currentInputText, setCurrentInputText] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentInputText(e.target.value);
  };

  const handleClick = () => {
    setInputText(currentInputText)
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={currentInputText} />
      <button onClick={handleClick}>Afficher informations</button>
      
    </div>
  );
};