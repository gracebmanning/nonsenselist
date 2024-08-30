import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AllPosts, { postRoutes } from './components/Posts/Posts';
import Categories from './components/Categories/Categories';
import { categoryRoutes } from './components/Categories/Categories';

function App() {
  return (
    <div className="App" style={{margin: "0px"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/post' element={<AllPosts/>} />
        {postRoutes}
        <Route path='/category' element={<Categories/>} />
        {categoryRoutes}
      </Routes>
    </div>
  );
}

export default App;
