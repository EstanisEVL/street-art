/*---- Imported components ----*/
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
/*---- Imported styles ----*/
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Hero />
      {/* <GalleryAlt slides={GalleryItemListAlt} /> */}
      {/* <GalleryFinal slides={GalleryItemListAlt} /> */}
    </div>
  );
}

export default App;
