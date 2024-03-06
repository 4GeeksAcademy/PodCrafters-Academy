import React from "react";

const SobreNosotros = () => {
    return (
        <div style={{ backgroundColor: "#E2F4F4", paddingTop: "80px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://via.placeholder.com/600x400" className="img-fluid" alt="Imagen Sobre Nosotros" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mb-4">Sobre Nosotros</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus neque. Integer eu ipsum nec dui lacinia posuere. Maecenas pulvinar elit ac massa bibendum tristique. Aliquam ac mauris et tortor viverra posuere. In tincidunt, dui eget viverra consectetur, odio eros faucibus turpis, a viverra nulla ex nec risus.</p>
                        <p>Morbi eget nunc et justo pretium fringilla. Sed ut efficitur lorem, sed volutpat ipsum. Ut id tellus volutpat, consequat nisi nec, tristique nunc. Nullam hendrerit ultricies est, sit amet congue mi vehicula vitae. Donec auctor metus sit amet velit fringilla, id ultrices nulla sodales.</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "50px" }}></div>
        </div>
    );
};

export default SobreNosotros;
