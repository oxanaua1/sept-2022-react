import {Component} from "react";

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class ClassComponent extends Component {
    //1) перший запускається завжди конструктор
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {a: 0, b: 25}  //те саме що прописували в useState. ({a: 0, b: 25}) перочерговий параметр

    }

    //3) запускається componentDidMount
    componentDidMount() {
        console.log('componentDidMount');
    }

    //метод виконається перед тим як компонента перестане показуватися в рендері (див кнопну hide)
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    //4.1) для запуску snapshot з componentDidUpdate використовуємо такий метод
    //якщо я хочу при оновленні за чимось слідкувати
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if (prevState.a >= 7) {
            return 'a>=7'
        }
        return null;
    }

    //4.2) запускається componentDidUpdate (слідування за оновленями)
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
    }


    inc() {
        this.setState(prev => ({a: prev.a + 1, b: prev.b - 1}))
    }


    //2) запускається рендер(відпрац на: зміна пропсів, зміна стейту і примусове перезавантаження сторінки)
    render() {
        console.log('render');
        return (
            <div>
                <div>A: {this.state.a}</div>
                <div>B: {this.state.b}</div>
                <div>NameFromProps: {this.props.name}</div>
                <button onClick={() => this.inc()}>inc</button>
            </div>
        )
    }
}

export {
    ClassComponent
}