import React, {useEffect, useState} from 'react';

const FunctionComponent = ({name}) => {
    //1)constructor немає(код йде зверзу вниз)
    console.log('constructor');

    const [state, setState] = useState({a: 0, b: 25});

    //3)componentDidMount = useEffect
    //componentWillUnmount = call back function в useEffect
    useEffect(() => {
        console.log('componentDidMount');

        return () => {
            console.log('componentWillUnmount');
        }
    }, [])

    //4) componentDidUpdate= useEffect
    useEffect(() => {
        console.log('componentDidUpdate');
    }, [state])

    const inc = () => {
        setState(prevState => ({a: prevState.a + 1, b: prevState.b - 1}))
    };

    //2) render = return
    return (
        <div>
            {console.log('render')}

            <div>A: {state.a}</div>
            <div>B: {state.b}</div>
            <div>NameFromProps: {name}</div>
            <button onClick={() => inc()}>inc</button>
        </div>
    );
};

export {FunctionComponent};