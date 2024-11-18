import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header title="Welcome to Learning" />
            <p>This is the Home Page of Learning website.</p>
        </div>
    );
};

export default Home;
