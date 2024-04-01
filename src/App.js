
import './App.css';
import './css/styles.css';
import './css/bootstrap.css'
import Header from './components/Header';
import Alert from './components/Alert';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import YouTube from './components/YouTube';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
     <Header/> 
     <Alert/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>
     <YouTube/>
     <Footer/>
    </div>
  );
}

export default App;
