// MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Import the CSS file for styling

function MainPage() {
  return (
    <div className="main-container">
      <header>
        <h1>Sveiki atvyke!</h1>
        <nav>
          <ul>
                    <li><Link to="/">Pagrindinis psl</Link></li>
                    <li><Link to="/topics">Temos</Link></li>
                    <li><Link to="/calculator">Skaiciuotuvas</Link></li>
                    <li><Link to="/matrix">Matricos</Link></li> 
          </ul>
        </nav>
      </header>
      <main>
        <p>Simonas Pranckevičius Marius Kubilius Martas Vobolis</p>
      </main>
      <footer>
        <p>&copy; 2024 Math Forum. Nekopijuok</p>
      </footer>
    </div>
  );
}

export default MainPage;