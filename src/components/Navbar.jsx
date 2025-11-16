export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['about', 'resume', 'portfolio', 'contact'].map((page) => (
          <li className="navbar-item" key={page}>
            <button
              className={`navbar-link ${activePage === page ? 'active' : ''}`}
              onClick={() => setActivePage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
