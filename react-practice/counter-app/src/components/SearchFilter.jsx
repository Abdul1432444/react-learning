import { useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "iPhone 14", category: "Mobile" },
    { id: 2, name: "Samsung Galaxy", category: "Mobile" },
    { id: 3, name: "HP Laptop", category: "Laptop" },
    { id: 4, name: "Dell Laptop", category: "Laptop" },
    { id: 5, name: "Apple Watch", category: "Watch" },
  ];

  // const filteredProducts = products.filter((product) => {
  //   const matchSearch =
  //     product.name.toLowerCase().includes(search.toLowerCase()) ||
  //     product.category.toLowerCase().includes(search.toLowerCase());

  //   const matchCategory = category === "All" || product.category === category;

  //   return matchSearch && matchCategory;
  // });
  const filteredProducts = products.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || product.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Search Filter</h2>

        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full mt-2 p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Watch">Watch</option>
        </select>

        {/* <ul className="mt-4 space-y-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id} className="p-3 bg-gray-200 rounded">
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-600">{product.category}</p>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No products found</li>
          )}
        </ul> */}
        <ul className="mt-4 space-y-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id} className="p-3 bg-gray-200 rounded">
                <p className="font-semibold">{product.name}</p>
                <p className="font-semibold">{product.category}</p>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500">No product found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
