import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from './layout';
import { ListadoPropiedades } from './listadoPropiedades';
import { ContenidoPropiedad } from '../styles/CommonComponents';

export const query = graphql(`
    query( $id:String! ) {
        allStrapiPaginas( filter: { id: { eq: $id } } ) {
            nodes {
                nombre
                contenido 
                imagen {
                    sharp: childImageSharp {
                        fluid( maxWidth: 1200 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`);

export const paginas = ({ data: { allStrapiPaginas: { nodes } } }) => {
    const { nombre, contenido, imagen} = nodes[0];

    return (
        <Layout>
            <main className='contenedor'>
                <h1>{ nombre }</h1>
                <ContenidoPropiedad>
                    <Image fluid={ imagen.sharp.fluid } />
                    <p>{ contenido } </p>
                </ContenidoPropiedad>
            </main>

            { nombre === 'Propiedades' && ( <ListadoPropiedades /> ) }
        </Layout>
    );
}
