import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
// import Order from './components/Order';
// import Product from './components/Product';
// import Salesreport from './components/Salesreport';
// import Message from './components/Message';
// import Settings from './components/Settings';
// import Favourite from './components/Favourite';
// import History from './components/History';
// import Signout from './components/Signout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Content />}>
          <Route path='profile' element={<Profile />}/>
          <Route path='leaderboard' element={<Leaderboard />}/>
          {/* <Route path='order' element={<Order />}/>
          <Route path='product' element={<Product />}/>
          <Route path='salesreport' element={<Salesreport />}/>
          <Route path='messages' element={<Message />}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='favourite' element={<Favourite />}/>
          <Route path='history' element={<History />}/>
          <Route path='signout' element={<Signout />}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
