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