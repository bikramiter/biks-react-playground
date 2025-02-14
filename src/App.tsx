import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import PhotosContainer from "./components/Gallery";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <PhotosContainer />
      {/* More content (Navbar, Search, Images) will go here */}
      <Footer />
    </div>
  );
}

export default App;
