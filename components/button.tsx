import {useState, useEffect, use} from 'react';

// f_count: wasmCount
export default function CountButton(props: countButtonProps ) {
    const [count, setCount] = useState(0);
    const [n_fibonacci, setFibonacci] = useState(0);

    function clickEvent() {
        setCount(props.f_count(1));
        setFibonacci(props.f_fibonacci(count));
    }

    return (
        <>
            <button title='Plus one' onClick={clickEvent}>
                Plus one
            </button>
            <div title='count' id='count'>
                Count: {count}
            </div>
            {
                (count > 0) ? (
                    <div title='fibonacci'>
                        Fibonacci: {n_fibonacci}
                    </div>
                ) : null
            }             
        </>
    );
}

export type wasmCount = (i: number) => number;
export type wasmFibonacci = (i: number) => number;

interface countButtonProps {
    f_count: wasmCount,
    f_fibonacci: wasmFibonacci
};