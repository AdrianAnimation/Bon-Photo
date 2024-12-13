import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Bon_Photo</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/photographers">Photographers</Link>
        </nav>
      </div>
    </header>
  );
}