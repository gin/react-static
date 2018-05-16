import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Heading</h1>
            <p>paragraph</p>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
