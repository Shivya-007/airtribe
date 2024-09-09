import { useState, useEffect } from 'react'
import Load from './assets/images/spin.gif'
import './App.css';
import appFirebase from './Firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AppRouter from './router/router';

const auth = getAuth(appFirebase);

const App = () => {
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <div className="loading">
          <img src={Load} className='loading-img' />
        </div>
      </>
    );
  }

  return (
    <AppRouter user={true} />
  )
}

export default App
