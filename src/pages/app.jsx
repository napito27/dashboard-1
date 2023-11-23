import React from 'react';

import Layout from '../templates/layout';
import Header from '../organisms/header';
import Menu from '../organisms/menu';
import KPI from '../organisms/kpi';

function App() {

  return (
    <>
      <Layout>
        <Header />
        <Menu />
        <KPI />
        <KPI />
        <KPI />
        <KPI />
      </Layout>
    </>
  );
}

export default App;
