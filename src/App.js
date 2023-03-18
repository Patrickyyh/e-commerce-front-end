
import './App.css';
import AddUsers from './components/AddUsers';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserQuery from './components/UserQuery';
import Indexpage from './components/Indexpage';

import ProductList from './components/ProductList';
import ProductQuery from './components/ProductQuery';
import ProductStatList from './components/ProductStatList';
import ProductStatQuery from './components/ProductStatQuery';

import OrderList from './components/OrderList';
import RankOrderByUsers from './components/RankOrderByUsers';

import { BrowserRouter , Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
       <Navbar />
        <Routes>
            <Route index path ="/"              element = {< Indexpage />} />
            <Route path = "/addUsers"           element = {< AddUsers/>}/>
            <Route path = "/allUsers"           element = {< UserList />} />
            <Route path = "/queryUsers"         element = {< UserQuery />} />
            <Route path = "/allProducts"        element = {< ProductList />} />
            <Route path = "/queryProducts"      element = {< ProductQuery />} />
            <Route path = "/productStats"       element = {< ProductStatList />}/>
            <Route path = "/productStatsQuery"  element = {< ProductStatQuery />}/>
            <Route path = "/allOrders"          element = {< OrderList/>} />
            <Route path = "/rankOrdersByUser"   element = {< RankOrderByUsers/>} />

        </Routes>
      </BrowserRouter>
  </div>


    );
}

export default App;
