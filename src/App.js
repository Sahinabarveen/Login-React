import React, { useState } from 'react'; import './App.css';

function App() { const [username, setUsername] = useState(''); const [password, setPassword] = useState(''); const [error, setError] = useState('');

const handleLogin = async () => { const response = await fetch('http://localhost:5000/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) });

const data = await response.json();

if (data.success) {
  alert('Login successful');
  setError('');
} else {
  setError(data.message);
}

};

return ( <div className="container"> <div className="login-box"> <h2>Welcome !!!</h2> <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <button onClick={handleLogin}>Login</button> {error && <p className="error">{error}</p>} <p className="register-text"> Do you haven't account? <span className="register-link">Register</span> </p> </div> </div> ); }

export default App

