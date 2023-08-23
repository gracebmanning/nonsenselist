import './Posts.css';
import posts from '../../posts';

function formatTitle(title){
    var result = title.replaceAll(' ', '-');
    result = result.replaceAll('...', '-');
    return result;
}

export default function Posts(){
    return(
        <div className='container'>
            <h3 className='postsTitle'>about nonsense list</h3>
            <div className='postsText'>
                <ol className='postsList'>
                    {posts.map(value => 
                    <li className='postsListItem' key={value.title}>
                        <img className='postPreviewImage' src={value.image} alt={value.imageAlt} />
                        <div className='postPreviewInfo'>
                            <a href={`posts/${formatTitle(value.title)}`}>
                                <h4>{value.title}</h4>
                            </a>
                            <h5>by {value.author}</h5>
                            <h5>{value.date}</h5>
                            {value.body.substring(0, 100)}... READ MORE!
                        </div>
                    </li>)}
                </ol>
            </div>
        </div>
    );
};