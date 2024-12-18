export default function Header({ searchTerm }) {
  return (
    <header className="header-component">
      <h1 id="header-title">Birthday Meteors</h1>
      <p>(dataset ends after 2013...)</p>
      <p id="header-sub-title">Viewing meteors from: {searchTerm}</p>
    </header>
  );
}
