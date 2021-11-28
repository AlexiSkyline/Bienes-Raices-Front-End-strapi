import * as React from 'react';

import Layout from '../components/layout';
import { Encuentra } from '../components/encuentra';

import { useInicio } from '../hooks/useInicio';

import { ImagenBackground, MainIndex } from '../styles/CommonComponents';
import { ListadoPropiedades } from '../components/listadoPropiedades';

const IndexPage = () => {

  const inicio = useInicio();
  const { nombre, contenido, imagen } = inicio[0];

  return (
    <Layout>
        <ImagenBackground tag='section' fluid={ imagen.sharp.fluid } fadeIn='soft'>
            <div>
                <h1>Venta de casas y departamentos exclusivos</h1>
            </div>
        </ImagenBackground>

        <MainIndex>
            <div>
                <h1>{ nombre }</h1>
                <p>{ contenido }</p>
            </div>
        </MainIndex>

        <Encuentra />

        <ListadoPropiedades />
    </Layout>
  );
}

export default IndexPage
