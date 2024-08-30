import { bananasPost } from './posts/bananas';
import { bananasPostTwo } from './posts/bananas2';
import { testPost } from './posts/test';

const posts = [ bananasPost, bananasPostTwo, testPost, testPost, testPost, testPost, testPost, testPost, testPost ];
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