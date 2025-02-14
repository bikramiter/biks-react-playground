import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Mountains");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app-container">
      <Header />
      <Search onSearch={setSearchQuery} />
      <Navbar onSelectCategory={setSelectedCategory} />
      <main className="main-content">
        <ImageGallery category={selectedCategory} searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
