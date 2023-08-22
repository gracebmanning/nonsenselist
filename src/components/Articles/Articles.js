import './Articles.css';
import articles from '../../articles';

function formatTitle(title){
    return title.replace(' ', '-');
}

export default function Articles(){
    return(
        <div className='container'>
            <h3 className='articlesTitle'>about nonsense list</h3>
            <div className='articlesText'>
                <ol>
                    {articles.map(value => 
                    <li key={value.title}>
                        <a href={`articles/${formatTitle(value.title)}`}>
                            <h4 className='articleLink'>{value.title}</h4>
                        </a>
                        <h5>By {value.author}. {value.date}</h5>
                        {value.body}
                    </li>)}
                </ol>
            </div>
        </div>
    );
};