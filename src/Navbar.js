import React from 'react';

const Navbar = () => {
    return (
        <div className='container'>
            <header className='row'>
                <a className='column'>Ski Resort Weather Forcast</a>
                <button className='column button-clear'>Ikon Pass</button>
                <button className='column button-clear'>Epic Pass</button>
                <button className='column button-clear'>Mountain Collective</button>
            </header>
        </div>
    )
};

export default Navbar;
