import './About.css';

export default function About(){
    return(
        <div className='aboutContainer'>
            <h3 className='aboutTitle'>about nonsense list</h3>
            <div className='aboutText'>
                <p>
                    Created by <a href='https://grace-manning.com/' target='_blank' rel='noreferrer'>Grace Manning</a>.
                </p>
            </div>
        </div>
    );
};