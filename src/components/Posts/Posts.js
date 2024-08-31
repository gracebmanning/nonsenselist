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
    let displayImage = 'block';
    if(post.image === 'none'){
        displayImage = 'none';
    }

    let displayLocation = 'block';
    if(post.location === 'none'){
        displayLocation = 'none';
    }
    
    return(
        <div className='postContainer'>
            <div className='post'>
                <h3>{post.title}</h3>
                <h4 className='postLocation' style={{display: displayLocation}}>{post.location}</h4>
                <h4 className='postByline'>by {post.author} | {post.date}</h4>
                {post.body}
                <img style={{display: displayImage}} src={post.image} alt={post.imageAlt} />
            </div>
        </div>
    )
}

// POST PAGE ROUTES
export const postRoutes = posts.map((post, index) => <Route path={`post/${formatTextForPath(post.title)}`} element={Post(post, index)} key={post.title} />);

// POST PREVIEWS
export function PostPreview(post){
    let displayImage = 'block';
    if(post.image === 'none'){
        displayImage = 'none';
    }

    return(
        <a className='postPreview' key={post.title} href={`/post/${formatTextForPath(post.title)}`}>
            <div className='postPreviewInfo'>
                <h5 className='postPreviewCategory'>{post.category}</h5>
                <h4>{post.title}</h4>
                <h5>{post.date}</h5>
                <h5>by {post.author}</h5>
                {post.body.substring(0, 50)}...
            </div>
            <img className='postPreviewImage' style={{display: displayImage}} src={post.image} alt={post.imageAlt} />
        </a>
    )
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
