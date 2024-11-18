import Button from '@mui/material/Button';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import './App.css'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Presentation from './component/Presentation';
import Slider  from './component/Slider'
import Carousel from './component/Carousel';
import Video from './component/Video';
import MakeMore from './component/MakeMore';
import BombArea from './component/BombArea';
import GetMore from './component/GetMore';
import Footer from './component/Footer';



function App() {
  

  return (
    <>
    < Navbar  />
    < Hero/>
    <Presentation />
    <Slider />
    <Video />
    < MakeMore />
    <BombArea />
    <Carousel/>
    < GetMore />
    <Footer />
    </>
  )
}

export default App;
