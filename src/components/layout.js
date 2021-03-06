import * as React from 'react'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Header } from './header';

const Layout = ({ children }) => {
  return (
    <>
        <GlobalStyles />

        <Helmet>
            <title>Bienes Raices Gatby</title>
            <meta name='description' content='Sitio web de bienes raices en Gatsby'/>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==' crossorigin='anonymous' referrerpolicy='no-referrer' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
            <link href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@400;700&display=swap' rel='stylesheet' />
        </Helmet>

        <Header></Header>

        { children }
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
