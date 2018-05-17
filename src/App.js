import React from 'react';
import ReactDOM from 'react-dom';
import Milligram from 'milligram';
//import Bootstrap from 'bootstrap';
//import Reactstrap from 'reactstrap';
import Navbar from './Navbar';
import Globe from './Globe';

const App = () => {
    return (
        <div>
            <Navbar />
        <div className='container'>

            <div className='row'>
                <h1>Heading</h1>
            </div>

            <div className='row'>
                <blockquote>
                    some quote
                </blockquote>
            </div>

            <div className='row'>
                <Globe />
            </div>

            <div className='row'>
                <p>paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu risus id purus porta euismod. Sed eu aliquet purus. Ut iaculis</p>
            </div>
        </div>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
