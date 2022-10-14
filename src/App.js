
import './App.css';

import Menu from './components/Menu';
import User from './components/User';
import Post from './components/view/Post';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataTableUser from './components/admin/DataTableUser';

function App() {


  return (
    <Router>
      <Menu />
      <Header />
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/admin' element={<DataTableUser/>}/>
        <Route path='/post' component={Post}/>
        <Route path='/*' render={()=><h1>404 NOT FOUND</h1>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
