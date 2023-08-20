import './Home.css';
import { useState } from 'react';
import topics from '../../topics';

function getFilteredTopics(query){
    if(!query){
        return topics;
    }
    return topics.filter(topic => topic.includes(query));
}

export default function Home(){
    const [query, setQuery] = useState('');
    const filteredTopics = getFilteredTopics(query);

    return(
        <div className='container'>
            <h3 className='question'>Test</h3>
            <input className='searchBar' type='text' placeholder='search...' onChange={e => setQuery(e.target.value)} />
            <ul className={(query === '') ? 'searchList' : 'searchList expanded'}>
                {filteredTopics.map(value => <h4 key={value}>{value}</h4>)}
            </ul>
        </div>
    );
};