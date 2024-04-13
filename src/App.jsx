import './App.css';
import logo from './assets/logo.svg';
import Section from './components/Section';
import Attribution from './components/Attribution';

const App = () => {

  return (
    <main className='main'>
      <header className='header'>
        <img className='logo' src={logo} alt="Splitter logo" />
      </header>
      <Section />
      <Attribution />
    </main>
  )
};

export default App;
