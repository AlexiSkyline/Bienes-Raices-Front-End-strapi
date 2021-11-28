import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { BottomBanner } from '../styles/CommonComponents';

export const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
        query {
            imagen: file ( relativePath: { eq: "encuentra.jpg" } ) {
                sharp: childImageSharp {
                    fluid( maxWidth: 1500 ) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <BottomBanner tag='section' fluid={ imagen.sharp.fluid } fadeIn='soft'>
            <div>
                <h3>Encuentra la casa de tus sueños</h3>
                <p>15 de años de experiencia</p>
            </div>
        </BottomBanner>
    );
}
