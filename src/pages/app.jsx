import React from 'react';

import Layout from '../templates/layout';
import Header from '../organisms/header';
import Menu from '../organisms/menu';

function App() {

  return (
    <>
      <Layout>
        <Header />
        <Menu />
      </Layout>
    </>
  );
}

export default App;
