import React from 'react';

import { 
  MoneyOutlined, 
  GroupOutlined, 
  InsertChartOutlinedRounded,
  AttachMoneyOutlined
} from '@mui/icons-material';

import { ThemeProvider, createTheme } from '@mui/material';

import Layout from '../templates/layout';
import Header from '../organisms/header';
import Menu from '../organisms/menu';
import KPI from '../molecules/kpi';
import TrafficPieChart from '../molecules/pieChart';
import ChartComponent from '../molecules/chartComponent';

import "../styles/app.css";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins"
  }
});

function App() {
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState("");
  const [kpiData, setKpiData] = React.useState([]);
  const [salesData, setSalesData] = React.useState([]);
  const [trafficData, setTrafficData] = React.useState([]);

  React.useEffect(() => {
    async function fetchKpiData() {
      const response = await fetch("http://localhost:3004/kpi");
      const data = await response.json();
      
      setKpiData(data);
    }
    
    fetchKpiData();
  }, []);

  React.useEffect(() => {
    async function fetchSalesData() {
      const response = await fetch("http://localhost:3004/sales");
      const data = await response.json();
      
      setSalesData(data);
    }
    
    fetchSalesData();
  }, []);

  React.useEffect(() => {
    async function fetchTrafficData() {
      const response = await fetch("http://localhost:3004/traffic");
      const data = await response.json();
      
      setTrafficData(data);
    }
    
    fetchTrafficData();
  }, []);
  
  const [kpi1, kpi2, kpi3, kpi4] = kpiData;

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const getSearchResults = () => {
    console.log(`searching data with: ${search}`);
    setSearch("");
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Header search={search} onSearch={getSearchResults} onSearchType={handleSearch}/>
          <Menu />
          <KPI data={kpi1} icon={<MoneyOutlined/>} iconColor="#CD4344" />
          <KPI data={kpi2} icon={<GroupOutlined/>} iconColor="#14B8A7" />
          <KPI data={kpi3} icon={<InsertChartOutlinedRounded/>} iconColor="#FFAD27" />
          <KPI data={kpi4} icon={<AttachMoneyOutlined/>} iconColor="#5146EC"/>
          <ChartComponent data={salesData}/>
          <TrafficPieChart data={trafficData}/>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
