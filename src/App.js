import './App.css';
import { Footer } from './components/footer';
import { OurProduct } from './screens/OurProduct/OurProduct';
import { OurTokens } from './screens/OurTokens/OurTokens';
import { Frame } from './screens/frame/Frame';
import { FrameGetStarter } from './screens/frame/FrameGetStarter';
import { NavBar } from './screens/navbar/NavBar';
import { Roadmap } from './screens/roadmap/Roadmap';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Frame/>
      <FrameGetStarter/>
      <OurProduct/>
      <Roadmap/>
      <OurTokens/>
      <Footer/>

    </div>
  );
}

export default App;
