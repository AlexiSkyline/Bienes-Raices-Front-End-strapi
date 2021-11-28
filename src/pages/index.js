import * as React from 'react';
import Layout from '../components/layout';
import { useInicio } from '../hooks/useInicio';

const IndexPage = () => {

  const inicio = useInicio();
  const { nombre, contenido, imagen } = inicio[0];

  return (
    <Layout>
      <h1>{ nombre }</h1>
      <p>{ contenido }</p>
    </Layout>
  );
}

export default IndexPage
