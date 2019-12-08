import React, {useState} from 'react';
import { Textfield } from './Textfield/Textfield';
import { Radiobutton } from './Radiobutton/Radiobutton';
import { ToastMessage } from './ToastMessage/ToastMessage';
import { Tabs } from './Tabs/Tabs';
import { Tab } from './Tabs/Tab/Tab';
import { Button } from './Button/Button';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Card } from './Card/Card';
import { Checkbox } from './Checkbox/Checkbox';

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

  const colors = [{
    color: "green"
  }, {
    color: 'brown'
  }, {
    color: 'black'
  }]

  return (
    <div className="App">
      <Textfield 
        onChange = {handleChange} 
        isValid = {isValid}
        errorText = "jjj"
        placeholder = "xyz"
      />

      <div style = {{marginTop: "10px", display: "flex"}}>
        <div style = {{marginRight: "40px"}}>
          <Radiobutton />
        </div>
        <div>
          <Checkbox />
        </div>



      <ToastMessage
      
        message = "Toast Message"
        //duration = {4}
        dismissable = {true}

      />

      </div>

      <Tabs>
        <Tab title ="First">Child 1</Tab>
        <Tab title ="Second">Child 2</Tab>
        <Tab title ="Third">Child 3</Tab>
        <Tab title ="Fourth">Child 4</Tab>
        <Tab title ="Fifth">Child 5</Tab>
        <Tab title ="Sixth">Child 6</Tab>

      </Tabs>


    <Button> Primary </Button>
    <Button style = {{display: "block", marginTop: "20px"}} type = "secondary"> Secondary </Button>
    
    <div>

    </div>

    <div style = {{marginTop: "10px", marginBottom: "20px"}}>
      <p>Colour Picker</p>
      <ColorPicker colorElements= {colors} />

    </div>

    <Card>
      <div> Card</div>
    </Card>

    <div style = {{marginTop: "10px"}}>

    </div>

    </div>

    
  );
}

export default App;
