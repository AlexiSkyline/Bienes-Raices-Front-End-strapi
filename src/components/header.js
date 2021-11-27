import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { Navegacion } from './navegacion';

import { ContainerHeader } from '../styles/CommonComponents';

export const Header = () => {

    const { logo } = useStaticQuery( graphql`
        query {
            logo: file( relativePath: { eq: "logo.svg"} ) {
                publicURL
            }
        }
    `);

    return (
        <ContainerHeader>
            <div>
                <Link to={ '/' }>
                    <img src={ logo.publicURL } alt='Logotipo Bienes Raices'/>
                </Link>

                <Navegacion />
            </div>
        </ContainerHeader>
    );
}
