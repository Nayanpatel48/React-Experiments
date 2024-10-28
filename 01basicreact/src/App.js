import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Chai aur react || Patel Nayan || Lecture learnings</h1>

        <h2>How to understand the react files (method 1)</h2>
        
        <h4>step 1: Always first open the package.json</h4>
        <p>-It is the first/main entry point</p>
        <p>-web vitals is used for performance checking of the app.</p>

        <h4>step 2: How to start your react project</h4>
        <p>-by running the start script “npm run start” (refer to package.json file for the scripts to be run such as start, build etc.)</p>
        
        <h4>step 3: What happen when i run the `build` command</h4>
        <p>-by running ”npm run build” inside the react folder it will create a build folder. (refer to package.json file for the scripts to be run such as start, build etc.)</p>
        
        <h2>create a basic react project (method 2)</h2>
        <p>using <a href='https://vite.dev/'>vite js</a> Getting Started</p>
        <p>-using “npm create vite@latest”</p>

        <h4>step 1: Always first open the package.json</h4>
        <p>-It is the first/main entry point</p>
        <p>-web vitals is used for performance checking of the app.</p>

        <h4>step 2: When there is missing node module then run below command it will install all the required files</h4>
        <p>-npm i or npm install</p>
        <p>-this process will be much faster then what we used to do in the method 1 above</p>

        <h4>step 3: To run your app run the following command</h4>
        <p>-npm run dev (refer to package.json file for the scripts to be run such as start, build etc.)</p>

        <h4>step 4: To build your app run the following command</h4>
        <p>-npm run build (refer to package.json file for the scripts to be run such as start, build etc.)</p>

        <h2>Basic discussion about react project (do not blindly follow it but use foollow it for learning and revising purposes)</h2>
        <p>-most of the time we will use the src(source) file.</p>

        <h4>step 1: Delete the files which are unnecessary</h4>
        <p>-setuptest.js</p>
        <p>-reportwebvitals.js</p>
        <p>-logo.svg</p>
        <p>-app.test.js</p>
        <p>-index.css</p>

        <h4>step 2: ready to go</h4>
        <p>-now after removing unnecessary code we can run “npm run start” (refer to package.json file for the scripts to be run such as start, build etc.) so that we can run our app yeeeaayyy!!!</p>
        <p>-“”Best way to learn is to manipulate/edit it.””</p>
      </div>
    );
  }
}

export default App;