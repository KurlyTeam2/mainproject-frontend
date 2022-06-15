import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}

export default App;
