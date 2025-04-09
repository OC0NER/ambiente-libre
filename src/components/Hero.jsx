import React from "react";

const Hero = () => {
    return (
        <section id="hero" className="bg-primary text-white text-center py-20">
            <h2 className="text-4xl font-bold mb-4">Energía Solar para un Futuro Sostenible</h2>
            <p className="text-lg mb-6">Instalamos paneles solares para hogares y empresas.</p>
            <a href="#contacto" className="bg-accent px-6 py-3 rounded text-white hover:bg-secondary">
                Contáctanos
            </a>
        </section>
    );
};

export default Hero;