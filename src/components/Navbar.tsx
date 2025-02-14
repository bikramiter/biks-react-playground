const categories = [
  "Nature",
  "Cityscapes",
  "Animals",
  "Food & Drinks",
  "Art & Culture",
];

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
