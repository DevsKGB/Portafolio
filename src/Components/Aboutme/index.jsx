import React from 'react'
import "./aboutme.css"
import { DataSectionaboutme } from "../data/dataSectionaboutme"
const index = () => {
    //funcion de mapeo para las imagenes 
    const listimagenes = DataSectionaboutme.map((data) => (
        <img src={data.imagen} alt="No tengo imagen" />
    ));

    return (
        <section>
            <h1>About me </h1>
            < div className="container">

                {/* seccion izquierda de la section about me*/}
                <div className="LeftSection">
                    <div className="wrapleftsection">
                        {listimagenes}
                    </div>
                </div>

                {/* seccion derecha de la section about me*/}

                <div className="RightSection">
                    <div className="wraplerightftsection">
                        <p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem placeat ab tempora omnis saepe provident nam necessitatibus dolor deleniti voluptas illum harum eius consequuntur odit quasi facere, quaerat nemo.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default index