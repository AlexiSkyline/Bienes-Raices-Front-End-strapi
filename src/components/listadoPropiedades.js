import React, { useEffect, useState } from 'react';

import { usePropiedades } from '../hooks/usePropiedades';
import { Propiedad, ULPropiedades } from '../styles/CommonComponents';
import { PropiedadPreview } from './propiedadPreview';

export const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [ propiedades, setPropiedades ] = useState([]);

    useEffect(() => {
        setPropiedades( resultado );
    }, [input])

    return (
        <Propiedad>
            <h2>Nuestras Propiedades</h2>

            <ULPropiedades>
                { filtradas.map( propiedad => (
                    <PropiedadPreview 
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ULPropiedades>
        </Propiedad>
    );
}
