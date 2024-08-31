import './Home.css';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { keywords } from '../Search/Search';
import { formatTextForPath } from '../utility';

function getFilteredTopics(query){
    if(!query){
        return keywords;
    }
    return keywords.filter(topic => topic.includes(query));
}

export default function Home(){
    const [query, setQuery] = useState('');
    const filteredTopics = getFilteredTopics(query);

    return(
        <div className='homeContainer'>
            <h3 className='question'>what are you searching for?</h3>
            <div className='search'>
                <div className='searchBar'>
                    <HiSearch className='searchIcon' />
                    <input className='searchInput' type='text' placeholder='search...' onChange={e => setQuery(e.target.value)} />
                </div>
                <ul className={(query === '') ? 'resultList' : 'resultList expanded'}>
                    {filteredTopics.map(value => 
                        <li key={value}>
                            <a className='resultLink' href={`search/${formatTextForPath(value)}`}>{value}</a>
                        </li>)}
                </ul>
            </div>
        </div>
    );
};