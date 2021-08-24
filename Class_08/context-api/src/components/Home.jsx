import React from 'react';
import useDisplayText from '../hooks/useDisplayTitle';

const Home = props => {
    const [title, setTitle] = useDisplayText('');
    return (
        <div>
            <h1>{title}</h1>
            <input type="text" value={title} onChange={ e => setTitle(e.target.value) } />
        </div>
    )
}

export default Home;