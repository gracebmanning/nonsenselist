import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import AllPosts, { postRoutes } from './components/Posts/Posts';
import Categories from './components/Categories/Categories';
import { categoryRoutes } from './components/Categories/Categories';
import Contributors from './components/Contributors/Contributors';
import { contributorRoutes } from './components/Contributors/Contributors';
import PageDoesNotExist from './components/404/404';

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
        {contributorRoutes}
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<PageDoesNotExist/>} />
      </Routes>
    </div>
  );
}

export default App;
