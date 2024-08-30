import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contributors from './components/Contributors/Contributors';
import AllPosts, { postRoutes } from './components/Posts/Posts';
import Categories from './components/Categories/Categories';
import { categoryRoutes } from './components/Categories/Categories';

function App() {
  return (
    <div className="App" style={{margin: "0px"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<AllPosts/>} />
        {postRoutes}
        <Route path='/category' element={<Categories/>} />
        {categoryRoutes}
        <Route path='/contributors' element={<Contributors/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
