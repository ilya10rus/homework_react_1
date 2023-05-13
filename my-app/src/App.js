import logo from './logo.svg';
import './App.css';
// Императивный подход
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//		<div> 
//			{new Date().getFullYear()} 
//		</div>
//      </header>
//    </div>
//  );
//}



//Декларативный подход 

function App(){

	const container = document.createElement('div');
	const header = document.createElement('header');
	const image = document.createElement('img');
	const parag = document.createElement('p');
	const text = document.createElement('a');
	const currentYear = document.createElement('div');

	container.className = 'App';
	header.className = 'App-header';
	image.className = 'App-logo'
	image.src = `${logo}`;
	image.alt = 'logo';
	parag.textContent = 'Edit src/App.js and save to reload.';
	text.className = 'App-link';
	text.href = 'https://reactjs.org';
	text.target = '_blank';
	text.rel = 'noopener noreferrer';
	text.textContent = 'Learn React';
	currentYear.textContent = `${new Date().getFullYear()}`;

	header.append(image,parag,text,currentYear);
	container.append(header);
	document.body.append(container);
} 

export default App;