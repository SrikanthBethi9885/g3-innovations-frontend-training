import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
import Order from './components/Order';
import Product from './components/Product';
import SalesReport from './components/SalesReport';
import Message from './components/Message';
import Settings from './components/Settings';
import Favourite from './components/Favourite';
import History from './components/History';
import Signout from './components/Signout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="MainContent">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/order" element={<Order />} />
            <Route path="/product" element={<Product />} />
            <Route path="/salesreport" element={<SalesReport />} />
            <Route path="/messages" element={<Message />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/history" element={<History />} />
            <Route path="/signout" element={<Signout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
