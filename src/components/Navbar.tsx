const categories = ["Mountains", "Beaches", "Birds", "Foods"];

const Navbar = ({
  onSelectCategory,
}: {
  onSelectCategory: (category: string) => void;
}) => {
  return (
    <nav className="navbar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className="nav-pill"
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
