import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("mountains");

  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <ImageGallery category={category} />
      <Footer />
    </div>
  );
}

export default App;
