import * as React from 'react';
import Layout from '../components/layout';
import { useInicio } from '../hooks/useInicio';
import { ImagenBackground } from '../styles/CommonComponents';

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
    </Layout>
  );
}

export default IndexPage
