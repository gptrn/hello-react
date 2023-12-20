import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import { Layout } from './layouts/layout';
console.log("Hello from index.js");

const rootElm = document.getElementById('root');
const root = ReactDOM.createRoot(rootElm);

root.render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Route>
    </Routes>
</BrowserRouter>
);



// generate ReactDOM root
// Pass to the html #root