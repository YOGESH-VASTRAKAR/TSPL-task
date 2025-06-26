import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NewsSection } from "./component/NewsSection";
import { Footer } from "./component/Footer";
import { Partners } from "./component/Partners";
import { AfricanArt } from "./component/AfricanArt";
import { FeaturedProjects } from "./component/FeaturedProjects";
import { ProductQuality } from "./component/ProductQuality";
import { Welcome } from "./component/Welcome";
import { Header } from './component/Header';




function App() {
  return (
    <>
      <Header/>     
        <Welcome/>      
        <ProductQuality/>
        <FeaturedProjects/>
        <AfricanArt/>
        <Partners/>
        <NewsSection/>
      <Footer/>
  </>
  );
}

export default App;
