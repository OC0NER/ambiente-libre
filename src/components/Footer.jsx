import React from "react";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold">Ambiente-Libre</h2>
                    <p className="mt-2 text-sm text-gray-300">
                        Energía sostenible para un futuro mejor.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
                    <ul className="space-y-2">
                        <li><a href="#hero" className="hover:text-accent">Inicio</a></li>
                        <li><a href="#servicios" className="hover:text-accent">Servicios</a></li>
                        <li><a href="#beneficios" className="hover:text-accent">Beneficios</a></li>
                        <li><a href="#contacto" className="hover:text-accent">Contacto</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-accent">
                                {/* Placeholder for social media icon */}
                                <span className="sr-only">Facebook</span>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-accent">
                                <span className="sr-only">Twitter</span>
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-accent">
                                <span className="sr-only">Instagram</span>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Ambiente-Libre. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;