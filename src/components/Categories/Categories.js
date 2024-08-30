import './Categories.css';
import { Route } from 'react-router-dom';
import posts from '../../posts/index.js';
import { PostGrid } from '../Posts/Posts';
import { formatTextForPath } from '../utility';

const categories = [];
posts.forEach((post) => {
    if(!categories.includes(post.category)){
        categories.push(post.category)}
});

function categoryPage(category){
    const filteredPosts = posts.filter((post) => post.category === category);
    return(
        PostGrid(filteredPosts)
    );
}

export const categoryRoutes = categories.map((category) => <Route path={`/category/${formatTextForPath(category)}`} element={categoryPage(category)} key={category} />);

export default function Categories(){
    return(
        <div className="categoriesContainer">
            <h1 className="categoriesTitle">browse by category</h1>
            <ul>
                {categories.sort().map((category) => 
                    <li key={category}>
                        <a href={`/category/${formatTextForPath(category)}`}>{category}</a>
                    </li>
                )}
            </ul>
        </div>
    );
}