import React from 'react';
import './App.css';
import Header from '../component/Header/Header';
import Routes from '../Routes/Routes';
import NavBar from '../component/NavBar/NavBar';
import Books from '../component/Books/Books';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <SearchBar /> */}
      <Books />
      {/* <NavBar /> */}
      <Routes />
      
    </div>
  );
}

export default App;
