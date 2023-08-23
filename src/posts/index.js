import { bananasPost } from './bananas';
import { bananasPostTwo } from './bananas2';

const posts = [ bananasPost, bananasPostTwo ];
export default posts;

function getKeywords(){
    let k = [];
    for(let post of posts){
        for(let word of post.keywords){
            if(!k.includes(word)){
                k.push(word);
            }
        }
    } 
    return k;  
}
let keywords = getKeywords();
export {keywords};