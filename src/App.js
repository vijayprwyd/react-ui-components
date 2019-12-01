import React, {useState} from 'react';
import { Textfield } from './Textfield/Textfield';
import { Radiobutton } from './Radiobutton/Radiobutton';
import { ToastMessage } from './ToastMessage/ToastMessage';

function App() {

  const [isValid, setIsValid] = useState(true);

  function handleChange(evt) {
    if(evt.target.value[0] === "a") {
      if(isValid === true) {
        setIsValid(false);
      }
    } else if(isValid === false) {
      setIsValid(true);
    }
  }

  return (
    <div className="App">
      <Textfield 
        onChange = {handleChange} 
        isValid = {isValid}
        errorText = "jjj"
        placeholder = "xyz"
      />

      <div style = {{marginTop: "10px"}}>
      <Radiobutton/>

      <ToastMessage
      
        message = "Toast Message"
        //duration = {4}
        dismissable = {true}

      />

      </div>
    </div>
  );
}

export default App;
