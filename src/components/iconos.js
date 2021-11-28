import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ListadoIconos } from '../styles/CommonComponents';

export const Iconos = ({ wc, estacionamiento, habitaciones }) => {
    const { iconos } = useStaticQuery(graphql`
        query {
            iconos: allFile( filter: { relativeDirectory: { eq: "iconos" } } ) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `);

    const imagenesIconos = iconos.edges;

    return (
        <ListadoIconos>
            <li> 
               <img src={ imagenesIconos[2].node.publicURL } alt='icono wc'/>
                <p>{ wc }</p>
            </li>
            <li> 
               <img src={ imagenesIconos[1].node.publicURL } alt='icono estacionamiento'/>
                <p>{ estacionamiento }</p>
            </li>
            <li> 
               <img src={ imagenesIconos[0].node.publicURL } alt='icono habitaciones'/>
                <p>{ habitaciones }</p>
            </li>
        </ListadoIconos>
    );
}
