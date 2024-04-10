import './App.css';
import logo from './assets/logo.svg';
import dollarIcon from './assets/icon-dollar.svg';
import personIcon from './assets/icon-person.svg';
import Label from './components/Label';
import InputField from './components/InputField';

const App = () => {

  return (
    <main className='main'>
      <img className='logo' src={logo} alt="Splitter logo" />
      <div className='container'>
        <div className="inputs">
          <div className='input'>
            <Label
              text="Bill"
              for="bill"
            />
            <InputField
              url={dollarIcon}
              id="bill"
            />
          </div>
          <div className="input">
            <Label
              text="Select Tip %"
              for="select-tip"
            />
            <div className='buttons-wrapper'>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <button>Custom%</button>
            </div>
          </div>
          <div className="input">
            <Label
              text="Number of People"
              for="number-of-people"
            />
            <InputField
              url={personIcon}
              id="number-of-people"
            />
          </div>
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
        </div>
        <button className='reset-btn'>RESET</button>
      </div>
    </main>
  )
};

export default App;
