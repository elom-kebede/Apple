
import './App.css';
import './css/styles.css';
import './css/bootstrap.css'
import Header from './components/Header';
import Alert from './components/Alert';
import Main from './components/main/main';
import Footer from './components/Footer';
import Mac from './components/mac/mac';
import Iphone from './components/iphone/iphone';
import Ipad from './components/ipad/ipad';
import Watch from './components/watch/watch';
import Tv from './components/tv/tv';
import Music from './components/music/music';
import Support from './components/support/support';
import Four04 from './components/four04';
import SharedLayout from './components/sharedLayout/sharedLayout';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      
     
     {/* <Alert/> */}
     
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route path="/" element={<Main/>} />
          <Route path="mac" element={<Mac/>} />
          <Route path="iphone" element={<Iphone/>} />
          <Route path="ipad" element={<Ipad/>} /> 
          <Route path="watch" element={<Watch/> } />
          <Route path="tv" element={<Tv/> } />
          <Route path="music" element={<Music/> } />
          <Route path="support" element={<Support/>} /> 
          <Route path="*" element={<Four04/>} />
                
        </Route>
       
      
      
     </Routes>
     
     
     
    </div>
  );
}

export default App;
