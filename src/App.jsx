import { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import dollarIcon from './assets/icon-dollar.svg';
import personIcon from './assets/icon-person.svg';
import Input from './components/Input';
import Label from './components/Label';
import InputField from './components/InputField';
import Buttons from './components/Buttons';
import Button from './components/Button';
import { buttonData } from './buttonData';

const App = () => {
  const [tipSelect, setTipSelect] = useState(false);

  const handleTipToggle = (id) => {
    setTipSelect(id)
  };

  const handleCustomTip = () => {
    setTipSelect(prevState => false)
  };

  return (
    <main className='main'>
      <img className='logo' src={logo} alt="Splitter logo" />
      <div className='container'>
        <div className="control">
          <Input>
            <Label htmlFor="bill">Bill</Label>
            <InputField
              url={dollarIcon}
              id="bill"
            />
          </Input>
          <Input>
            <Label htmlFor="select-tip">Select Tip %</Label>
            <Buttons>
              {buttonData.map((item) => {
                const { id, value } = item
                return (
                  <Button
                    key={id}
                    onClick={() => handleTipToggle(id)}
                    style={{
                      backgroundColor: tipSelect === id ? "#26C2AE" : "",
                      color: tipSelect === id ? "#00474B" : ""
                    }}
                  >
                    {value}
                  </Button>
                )
              })}
              <InputField
                placeholder="Custom"
                onClick={handleCustomTip}
              />
            </Buttons>
          </Input>
          <Input>
            <Label htmlFor="number-of-people">Number of People</Label>
            <InputField
              url={personIcon}
              id="number-of-people"
            />
          </Input>
        </div>
        <div className="display">
          <div className="display__wrapper">
            <div className="display-label">Tip Amount
              <span className='sm-label'>/ person</span>
            </div>
            <div className='numbers'></div>
          </div>
          <div className="display__wrapper">
            <div className="display-label">Total
              <span className='sm-label'>/ person</span>
            </div>
            <div className='numbers'></div>
          </div>
          <button className='reset-btn'>RESET</button>
        </div>
      </div>
    </main>
  )
};

export default App;
