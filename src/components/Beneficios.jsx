import React from "react";

const Beneficios = () => {
    return (
        <section id="beneficios" className="py-20 bg-background">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6 text-primary">Beneficios de la Energía Solar</h3>
                <ul className="space-y-4 text-textDark">
                    <li>Ahorro en costos de energía.</li>
                    <li>Reducción de la huella de carbono.</li>
                    <li>Independencia energética.</li>
                </ul>
            </div>
        </section>
    );
};

export default Beneficios;