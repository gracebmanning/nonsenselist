import './Posts.css';
import posts from '../../posts/index.js';
import { Route } from 'react-router-dom';
import { formatTextForPath } from '../utility';

/** NEXT STEPS: 
 * 2) create authors (would require an authors component)
 * 3) polish up the keyword / search functionality
 */

// POST PAGE ELEMENT
function Post(post){
    if(post.image === "none"){
        return(
            <div className='postContainer'>
                <div className='post'>
                    <h3>{post.title}</h3>
                    <h4>by {post.author} | {post.date}</h4>
                    {post.body}
                </div>
            </div>
    )
    } else{
        return(
            <div className='postContainer'>
                <div className='post'>
                    <h3>{post.title}</h3>
                    <h4>by {post.author} | {post.date}</h4>
                    {post.body}
                    <img src={post.image} alt={post.imageAlt} />
                </div>
            </div>
    )}
}

// POST PAGE ROUTES
export const postRoutes = posts.map((post, index) => <Route path={`post/${formatTextForPath(post.title)}`} element={Post(post, index)} key={post.title} />);

// POST PREVIEWS
export function PostPreview(post){
    if(post.image === "none"){
        return(
            <a className='postPreview' key={post.title} href={`/post/${formatTextForPath(post.title)}`}>
                <div className='postPreviewInfo'>
                    <h4>{post.title}</h4>
                    <h5>{post.date}</h5>
                    <h5>by {post.author}</h5>
                    {post.body.substring(0, 50)}...
                </div>
            </a>
        )
    } else{
        return(
            <a className='postPreview' key={post.title} href={`post/${formatTextForPath(post.title)}`}>
                <div className='postPreviewInfo'>
                    <h4>{post.title}</h4>
                    <h5>{post.date}</h5>
                    <h5>by {post.author}</h5>
                    {post.body.substring(0, 50)}...
                </div>
                <img className='postPreviewImage' src={post.image} alt={post.imageAlt} />
            </a>
        )
    }
}

// ALL POSTS GRID
export function PostGrid(title, postsList){
    return(
    <div className='allPosts'>
        <h3 className='postsTitle'>{title}</h3>
        <div className='postPreviewContainer'>
            {postsList.map(post => PostPreview(post))}
        </div>
    </div>
    )
}

export default function AllPosts(){
    return(
        PostGrid("all posts", posts)
    );
};
