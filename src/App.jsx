import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Beneficios from "./components/Beneficios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Servicios />
            <Beneficios />
            <Contacto />
            <Footer />
        </div>
    );
};

export default App;