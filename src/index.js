import style from './main.css';
import App from './App';

console.log("This is webpack 4's default entry point");

const xs = [1, 2, 3];

const arr = () => console.log(...xs);
window.arr = arr;   // For client to call from DevTools console

const derp = () => {
    xs.map(x => console.log(`derp ${x}`));
}
window.derp = derp; // For client to call from DevTools console
