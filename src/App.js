import './App.css';
import { OurProduct } from './screens/OurProduct/OurProduct';
import { Frame } from './screens/frame/Frame';
import { FrameGetStarter } from './screens/frame/FrameGetStarter';
import { NavBar } from './screens/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Frame/>
      <FrameGetStarter/>
      <OurProduct/>


    </div>
  );
}

export default App;
