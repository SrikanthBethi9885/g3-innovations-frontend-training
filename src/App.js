import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
// import Profile from './components/Profile';
// import Leaderboard from './components/Leaderboard';
// import Order from './components/Order';
// import Product from './components/Product';
// import SalesReport from './components/Salesreport';
// import Message from './components/Message';
// import Settings from './components/Settings';
// import Favourite from './components/Favourite';
// import History from './components/History';
// import Signout from './components/Signout';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header />
      <Content />
    </div>
  );
}

export default App;
