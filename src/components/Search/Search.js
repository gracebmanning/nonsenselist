import './Search.css';
import { Route } from 'react-router-dom';
import posts from '../../posts/index.js';
import { PostGrid } from '../Posts/Posts';
import { formatTextForPath } from '../utility';

function getKeywords(){
    let k = [];
    for(let post of posts){
        for(let word of post.keywords){
            word = word.toLowerCase();
            if(!k.includes(word)){
                k.push(word);
            }
        }
    } 
    return k;  
}

let keywords = getKeywords();
export {keywords};

function keywordPage(keyword){
    const filteredPosts = posts.filter((post) => {
        let lowerKeywords = [];
        post.keywords.forEach(element => {
            lowerKeywords.push(element.toLowerCase());
        });
        return lowerKeywords.includes(keyword)});
    return(
        PostGrid(`search results for: ${keyword}`, filteredPosts)
    );
}

export const keywordRoutes = keywords.map((keyword) => <Route path={`/search/${formatTextForPath(keyword)}`} element={keywordPage(keyword)} key={keyword} />);
