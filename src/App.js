import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { keywordRoutes } from './components/Search/Search';
import About from './components/About/About';
import AllPosts, { postRoutes } from './components/Posts/Posts';
import Categories from './components/Categories/Categories';
import { categoryRoutes } from './components/Categories/Categories';
import Contributors from './components/Contributors/Contributors';
import { contributorRoutes } from './components/Contributors/Contributors';
import PageDoesNotExist from './components/404/404';

const synonyms = [ "nonsense", "balderdash", "gibberish", "claptrap", "rubbish", "hogwash", "baloney", "gobbledygook", "folly", "babble", "madness", "mumbo jumbo", "silliness"];
export const taglineWord = synonyms[Math.floor(Math.random() * synonyms.length)];

function App() {
  return (
    <div className="App" style={{margin: "0px"}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        {keywordRoutes}
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
