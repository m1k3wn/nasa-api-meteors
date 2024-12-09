import { useState } from "react";
// import child components
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/Search-bar";
import MeteorList from "./components/Meteor-list";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm, " < in app");
  return (
    <div className="app">
      <Header searchTerm={searchTerm} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <MeteorList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
