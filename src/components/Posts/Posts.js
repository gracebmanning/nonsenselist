import './Posts.css';
import posts from '../../posts/index.js';

function formatTitle(title){
    var result = title.replaceAll(' ', '-');
    result = result.replaceAll('...', '-');
    return result;
}

function PostWithPreviewImage(post){
    return(
    <a className='postPreview' key={post.title} href={`post/${formatTitle(post.title)}`}>
        <div className='postPreviewInfo'>
            <h4>{post.title}</h4>
            <h5>{post.date}</h5>
            <h5>by {post.author}</h5>
            {post.body.substring(0, 100)}... READ MORE!
        </div>
        <img className='postPreviewImage' src={post.image} alt={post.imageAlt} />
    </a>
)}

function PostNoPreviewImage(post){
    return(
    <a className='postPreview' key={post.title} href={`post/${formatTitle(post.title)}`}>
        <div className='postPreviewInfo'>
            <h4>{post.title}</h4>
            <h5>{post.date}</h5>
            <h5>by {post.author}</h5>
            {post.body.substring(0, 100)}... READ MORE!
        </div>
    </a>
)}

export default function AllPosts(){
    return(
        <div className='allPosts'>
            <h3 className='postsTitle'>all posts</h3>
            <div className='container'>
                {posts.map(post => 
                    {if(post.image === "none"){
                        return PostNoPreviewImage(post)
                    } else{
                        return PostWithPreviewImage(post)
                    }}
                )}
            </div>
        </div>
    );
};