import styled from '@emotion/styled';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export const ContainerHeader = styled.header`
    background-color: #0D283B;
    padding: 1rem;

    div {
        max-width: 120rem;
        margin: 0 auto;
        text-align: center;

        @media ( min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    
    @media ( min-width: 768px ) {
        padding: 0;
        flex-direction: row;
    }
`;

export const NavLink = styled( Link )`
    color: #FFF;
    font-weight: 700;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    &.pagina-actual {
        border-bottom: 2px solid #FFF;
    }
`;

export const ImagenBackground = styled( BackgroundImage )`
    height: 600px;

    div {
        color: #FFF;
        height: 100%;
        max-width: 1200px;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 2rem;
        margin: 0;
        max-width: 800px;

        @media ( min-width: 992px ) {
            font-size: 4rem;
        }
    }
`;

export const MainIndex = styled.main`
    div {
        max-width: 800px;
        margin: 0 auto;
    }

    p {
        text-align: center;
    }
`;

export const BottomBanner = styled( BackgroundImage )`
    height: 300px;

    div {
        color: #FFF;
        height: 100%;
        max-width: 1200px;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h3 {
        font-size: 2rem;
        margin: 0;
        max-width: 800px;

        @media ( min-width: 992px ) {
            font-size: 4rem;
        }
    }
`;

export const Propiedad = styled.div`
    h2 {
        margin-top: 5rem;
    }
`;

export const ULPropiedades = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media (min-width: 480px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
        column-gap: 2rem;
    }

    @media (min-width: 768px) {
        
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const Boton = styled( Link )`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`;

export const Card = styled.div`
    border: 1px solid #E1E1E1;
    img {
        max-width: 100%;
    }
`
export const Contenido = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .precio {
        font-size: 2rem;
        color: #75AB00;
    }
`;

export const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }
`;