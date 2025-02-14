import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Mountains");

  return (
    <div>
      <Header />
      <Search />
      <Navbar onSelectCategory={setSelectedCategory} />
      <ImageGallery category={selectedCategory} />
      <Footer />
    </div>
  );
}

export default App;
