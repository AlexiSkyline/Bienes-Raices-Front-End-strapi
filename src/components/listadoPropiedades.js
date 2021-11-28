import React, { useEffect, useState } from 'react';

import { usePropiedades } from '../hooks/usePropiedades';
import { Propiedad, ULPropiedades } from '../styles/CommonComponents';
import { PropiedadPreview } from './propiedadPreview';

import { useFiltro } from '../hooks/useFiltro';

export const ListadoPropiedades = () => {
    const resultado = usePropiedades();
    const [ propiedades ] = useState(resultado);
    const [ filtradas, setFiltradas ] = useState([]);

    const { categoria, FiltroUI } = useFiltro();

    useEffect(() => {
        if( categoria ) {
            const filtro = propiedades.filter( propiedad => propiedad.categoria.nombre === categoria );
            setFiltradas( filtro );
        } else {
            setFiltradas( propiedades );
        }
    }, [categoria]);

    return (
        <Propiedad>
            <h2>Nuestras Propiedades</h2>

            { FiltroUI() }

            <ULPropiedades>
                { filtradas.map( propiedad => (
                    <PropiedadPreview 
                        key={ propiedad.id }
                        propiedad={ propiedad }
                    />
                ))}
            </ULPropiedades>
        </Propiedad>
    );
}
