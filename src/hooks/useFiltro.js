import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Formulario, Select } from '../styles/CommonComponents';

export const useFiltro = () => {
    const [ categoria, setCategoria ] = useState('');

    const resultado = useStaticQuery(graphql`
        query {
            allStrapiCategorias {
                    nodes {
                        nombre
                        id
                    }
            }
        }
    `);

    const categorias = resultado.allStrapiCategorias.nodes;

    const FiltroUI = () => (
        <Formulario>
            <Select
                onChange={ e => setCategoria( e.target.value ) }
                value={ categoria }
            >
                <option value=''> -- Filtrar -- </option>
                { categorias.map( opcion => (
                    <option key={ opcion.id } value={ opcion.nombre }>{ opcion.nombre }</option>
                ))}
            </Select>
        </Formulario>
    );

    return (
        categoria, 
        FiltroUI
    );
}
