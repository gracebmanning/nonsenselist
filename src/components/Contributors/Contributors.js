import './Contributors.css';
import { Route } from 'react-router-dom';
import posts from '../../posts';
import { PostGrid } from '../Posts/Posts';

const contributors = [
    {
        name: "grace",
        bio: "lelelellele"
    },
    {
        name: "emmy",
        bio: "klfjdlfj dfldfj dkjfldf"
    }
]

function contributorPage(contributor){
    const filteredPosts = posts.filter((post) => post.author === contributor.name);
    return(
        PostGrid(`posts by ${contributor.name}`, filteredPosts)
    );
}

export const contributorRoutes = contributors.map((contributor) => <Route path={`/contributors/${contributor.name}`} element={contributorPage(contributor)} key={contributor.name} />);

function contributorTile(contributor){
    return(
        <div className='contributorTile' key={contributor.name}>
            <h4 className='contributorName'>{contributor.name}</h4>
            <p className='contributorBio'>
                {contributor.bio}
            </p>
            <a href={`/contributors/${contributor.name}`}>see all posts by {contributor.name}</a>
        </div>
    )
}

export default function Contributors(){
    return(
        <div className='contributorsContainer'>
            <h3 className='contributorsTitle'>contributors</h3>
            <div className='contributorTiles'>
                {contributors.map(contributor => contributorTile(contributor))}
            </div>
        </div>
    );
};