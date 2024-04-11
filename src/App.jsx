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
import Display from './components/Display';
import TotalAmount from './components/TotalAmount';
import { buttonData } from './buttonData';

const App = () => {
  const [tipSelect, setTipSelect] = useState(false);

  const handleTipToggle = (id) => {
    setTipSelect(id === tipSelect ? false : id)
  };

  const handleCustomTip = () => {
    setTipSelect(false)
  };

  return (
    <main className='main'>
      <header>
        <img className='logo' src={logo} alt="Splitter logo" />
      </header>
      <section className='container'>
        <div className="control">
          <Input>
            <Label htmlFor="bill">Bill</Label>
            <InputField
              url={dollarIcon}
              id="bill"
              placeholder="0"
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
                    activeClass={tipSelect === id ? "active" : ""}
                  >
                    {value}
                  </Button>
                )
              })}
              <InputField
                placeholder="Custom"
                onClick={handleCustomTip}
                customClass="input-field-custom"
              />
            </Buttons>
          </Input>
          <Input>
            <Label htmlFor="number-of-people">Number of People</Label>
            <InputField
              url={personIcon}
              id="number-of-people"
              placeholder="0"
            />
          </Input>
        </div>
        <Display>
          <TotalAmount
            label="Tip Amount"
          />
          <TotalAmount
            label="Total"
          />
          <Button
            resetBtnClass="button-reset"
          >
            RESET
          </Button>
        </Display>
      </section>
    </main>
  )
};

export default App;
