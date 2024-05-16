// MainPage.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Import the CSS file for styling
import { auth } from './firebase';
import { UserContext } from './App';

function MainPage() {
  const user = useContext(UserContext);
  return (
    <div className='main-container'>
      <header>
        {user ? <h1>Sveiki {user.email}</h1> : <h1>Sveiki atvyke!</h1>}
        <nav>
          <ul>
            <li>
              <Link to='/'>Pagrindinis psl</Link>
            </li>
            <li>
              <Link to='/calculator'>Skaiciuotuvas</Link>
            </li>
            {!user && (
              <li>
                <Link to='/login'>Prisijungti</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to='/register'>Registruotis</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to='/topics'>Temos</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to='/matrix'>Matricos</Link>
              </li>
            )}
            {user && (
              <li>
                <Link
                  onClick={ () => {
                    auth.signOut();
                    window.location.reload();
                  } }
                >
                  Atsijungti
                </Link>
              </li>
            )}
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
