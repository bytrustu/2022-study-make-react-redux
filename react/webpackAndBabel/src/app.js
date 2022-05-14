/* @jsx createElement */
import { createElement, render, Component } from "./react";

class Title extends Component {
    render() {
        return <h1>{this.props.children}</h1>
    }
}

function Item(props) {
    return <li style={`color: ${props.color}`}>{props.children}</li>
}

const App = () => <p>
    <Title>리액트 잘 만들기</Title>
    <ul>
        <Item color="red">첫번째 아이템</Item>
        <Item color="blue">두번째 아이템</Item>
        <Item color="green">세번째 아이템</Item>
    </ul>
</p>

render(<App />, document.querySelector('#root'));
