import React from 'react';
import Image from 'gatsby-image';
import urlSlug from 'url-slug';

import { Boton, Card, Contenido } from '../styles/CommonComponents';

export const PropiedadPreview = ({ propiedad }) => {

    const { nombre,   imagen, wc, estacionamiento, habitaciones, precio } = propiedad;

    return (
        <Card>
            <Image
                fluid={imagen.sharp.fluid}
            />
            <Contenido>
                <h3>{nombre}</h3>

                <p className="precio">$ {precio} </p>

                <Iconos 
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                />

                <Boton to={ urlSlug( nombre ) }>
                    Visitar Propiedad
                </Boton>
            </Contenido>
        </Card>
    );
}
