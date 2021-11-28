import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Layout from './layout';
import { Iconos } from './iconos';
import { ContenidoPropiedad, Sidebar } from '../styles/CommonComponents';

export const query = graphql(`
    query( $id: String! ) {
        allStrapiPropiedades( filter: { id: { eq: $id } } ) {
            nodes {
                nombre
                descripcion
                wc
                estacionamiento
                habitaciones
                precio
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen {
                    sharp: childImageSharp {
                        fluid ( maxWidth: 700 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`);

export const propiedades = ({ data: { allStrapiPropiedades: { nodes } } }) => {

    const { nombre, descripcion, wc, estacionamiento, habitaciones, agentes, imagen, precio } = nodes[0]

    return (
        <Layout>
            <h1>{ nombre }</h1>

            <ContenidoPropiedad>
                <main>
                    <Image fluid={ imagen.sharp.fluid }/>
                    <p>{ descripcion }</p>
                </main>

                <Sidebar>
                    <p className='precio'>$ { precio }</p>
                    <Iconos 
                        wc={ wc }
                        estacionamiento={ estacionamiento }
                        habitaciones={ habitaciones }
                    />

                    <div className="agente">
                        <h2>Información del Vendedor:</h2>
                        <p>Nombre del Vendedor: { agentes.nombre }</p>
                        <p>Tel: { agentes.telefono }</p>
                        <p>Email: { agentes.email }</p>
                    </div>
                </Sidebar>
            </ContenidoPropiedad>
        </Layout>
    );
}
