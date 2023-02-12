import React, {useMemo, useState} from 'react';


const sumator = (n) => {
    console.log('start');
    let sum = n;
    for (let i = 0; i < 100; i++) {
        sum += i;

    }
    console.log('finish ');
    return sum;
}

const UseMemo = () => {

    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);

//useMemo використовується коли ми не хочемо, щоб відпрацьовувала і перерендювалася на сторінці ф-я const number = sumator(n),
//коли ми змінюємо setCount, а лише у випадку зміни самої setN

    // const number = sumator(n);
    const number = useMemo(() => sumator(n), [n]);

    return (
        <div>
            <div>sum:{number}</div>
            <button onClick={() => setN(prevState => prevState + 1)}>incN</button>

            <div>count:{count}</div>
            <button onClick={() => setCount(prevState => prevState + 1)}>incCount</button>
        </div>
    );
};

export {UseMemo};