import {useState, useEffect} from 'react';
import init, { greet } from "wasm-lib"

function App() {

    const [ready, setReady] = useState(false);
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
      init().then(() => {
          setGreeting(greet("Daabaadee"));
          setReady(true);
        }
      );
    });


    return ready ? (
      <p>{ greeting }</p>
    ) : (
      <p>Loading...</p>
    )
}

export default App