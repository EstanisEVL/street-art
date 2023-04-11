/*---- Imported components ----*/
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import GalleryFinal from "./components/gallery3/GalleryFinal";
import GalleryItemListAlt from "./components/gallery2/GalleryItemListAlt";
/*---- Imported styles ----*/
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* <GalleryAlt slides={GalleryItemListAlt} /> */}
      {/* <GalleryFinal slides={GalleryItemListAlt} /> */}
    </div>
  );
}

export default App;
