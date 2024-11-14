import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const navigateToSearch = (query: string) => {
    navigate(`/${query}`);
  };

  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateToSearch(query);
  };
  return (
    <div className="mx-auto mt-8 p-4 w-full md:w-4/6">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a mutual fund"
          className="flex h-10 rounded-md border border-gray-400 w-full px-3"
        />
        <button
          className="border border-gray-400 py-2 rounded-md px-4"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
