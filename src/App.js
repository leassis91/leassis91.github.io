import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import ReactGA from 'react-ga4';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import Footer from './components/Footer/Footer';
import './App.css';

import React, {useEffect} from 'react';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function Analytics() {
    const location = useLocation();
  
    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);
  
    return null;
  }

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Router>
                <NavBar />
                <Container sx={{ flex: 1, py: 3 }}>
                    <Analytics />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/blogs" exact element={<Blogs />} />
                        <Route path="/skills" exact element={<Skills />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;
