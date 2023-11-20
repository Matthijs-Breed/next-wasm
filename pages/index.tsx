import {useState, useEffect} from 'react';
import init, { greet, fibonacci, count } from "wasm-lib"
import CountButton from '../components/button';

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
        <>
            <h1>{ greeting }</h1>
            <CountButton f_count={count} f_fibonacci={fibonacci}/>
        </>
    ) : (
      <p>Loading...</p>
    )
}

export default App