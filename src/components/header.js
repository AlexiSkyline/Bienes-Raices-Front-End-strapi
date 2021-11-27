import React from 'react';
import { Link } from 'gatsby';

import { Navegacion } from './navegacion';

import { ContainerHeader } from '../styles/CommonComponents';

export const Header = () => {
    return (
        <ContainerHeader>
            <div>
                <Link to={ '/' }>
                    Bienes Raices
                </Link>

                <Navegacion />
            </div>
        </ContainerHeader>
    );
}
