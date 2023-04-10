/*---- Imported components ----*/
import GalleryAlt from "./components/gallery2/GalleryAlt";

/*---- Imported array ----*/
import GalleryItemListAlt from "./components/gallery2/GalleryItemListAlt";
import GalleryFinal from "./components/gallery3/GalleryFinal";

/*---- Imported styles ----*/
import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      {/* <GalleryAlt slides={GalleryItemListAlt} /> */}
      <GalleryFinal slides={GalleryItemListAlt} />
    </div>
  );
}

export default App;
