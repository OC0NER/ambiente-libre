import React from "react";

const Contacto = () => {
    return (
        <section id="contacto" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6">Contáctanos</h3>
                <p className="mb-4">Envíanos un mensaje para más información.</p>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full p-3 border rounded"
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className="w-full p-3 border rounded"
                    />
                    <textarea
                        placeholder="Mensaje"
                        className="w-full p-3 border rounded"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-primary px-6 py-3 rounded text-white hover:bg-accent"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contacto;