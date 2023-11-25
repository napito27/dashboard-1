import React from 'react';

import { MoneyOutlined, GroupOutlined, InsertChartOutlinedRounded, AttachMoneyOutlined, ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';
import { ThemeProvider, createTheme, LinearProgress } from '@mui/material';

import Layout from '../templates/layout';
import Header from '../organisms/header';
import Menu from '../organisms/menu';
import KPI from '../molecules/kpi';

import "../styles/app.css";
import Chart from '../molecules/lineChart';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins"
  }
});

function App() {
  const [search, setSearch] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState("");
  const [kpiData, setKpiData] = React.useState([]);

  // React.useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://localhost:3004/data");
  //     const data = await response.json();
  //     console.log(data);
  //     setKpiData(data);
  //   }
    
  //   fetchData();
  // }, []);
  
  const [kpi1, kpi2, kpi3, kpi4] = kpiData;

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const getSearchResults = () => {
    console.log(`searching data with: ${search}`);
    setSearch("");
  }

  //<span style={{color: ${iconColor}}}>12%</span> from last month
  const growth = `${<ArrowUpwardOutlined className='card-footer'/>}<span>12%</span> "Since last month"`;
  const loss = <ArrowDownwardOutlined className='card-footer'/>;
  const progressBar = <LinearProgress variant="determinate" value={0.75} />

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Header search={search} onSearch={getSearchResults} onSearchType={handleSearch}/>
          <Menu />
          <KPI data={kpi1} icon={<MoneyOutlined/>} iconColor="#CD4344" indicator={loss}/>
          <KPI data={kpi2} icon={<GroupOutlined/>} iconColor="#14B8A7" indicator={growth}/>
          <KPI data={kpi3} icon={<InsertChartOutlinedRounded/>} iconColor="#FFAD27" indicator={progressBar}/>
          <KPI data={kpi4} icon={<AttachMoneyOutlined/>} iconColor="#5146EC"/>
          <Chart />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
