import React from "react";
import reactLogo from "../assets/react.svg";

const Header = () => {
    return (
        <header className="bg-primary text-white p-4">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={reactLogo} alt="Logo Ambiente-Libre" className="h-10 w-10" />
                    <h1 className="text-2xl font-bold">Ambiente-Libre</h1>
                </div>

                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#hero" className="hover:text-accent">Inicio</a></li>
                        <li><a href="#servicios" className="hover:text-accent">Servicios</a></li>
                        <li><a href="#beneficios" className="hover:text-accent">Beneficios</a></li>
                        <li><a href="#contacto" className="hover:text-accent">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;