import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';

import {Banner} from './components/Banner';
import { Markting } from './components/Markting';
import { Companys } from './components/Companys';
import { Influencer } from './components/Influencer';
import { Smartools } from './components/Smartools';
import { Mainsilider } from './components/Mainsilider';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
  <Navbar/>
  <Banner/>
  <Markting/>
  <Companys/>
  <Influencer/>
  <Smartools/>
  <Mainsilider/>
  <Footer/>
  </>
  );
}

export default App;
