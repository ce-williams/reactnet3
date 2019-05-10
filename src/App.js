import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Version 3 Manual test</h2>
          <ul>
            <li>- changes made in files</li>
            <li>- save files</li>
            <li>- rebuild (yarn build)</li>
            <li>- deploy (netlify deploy --prod)</li>
            <li>- ./build</li>
          </ul>
        
        <h2>Continious Deployment Setup</h2>
          <ul>
            <li>save files</li>
            <li>create repo</li>
            <li>git init (cl)</li>
            <li>git remote add origin git@github.com:username/project</li>
            <li>git add .</li>
            <li>git commit -m"initial"</li>
            <li>git push -u origin master</li>
            <li>file changes..</li>
            <li>git add .</li>
            <li>Go to Netlify > project > site settings > build and deploy > link site to git > select repo</li>
            <li>Set "Build Command" to "npm run build"</li>
            <li>Set "publish directory" to ./build</li>
            <li>Click "deploy site"</li>
            <li>navigate to repo > git add . > git commit -m"connected to netlify" > git push</li>
            <li></li>
          </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
    </div>
  );
}

export default App;
