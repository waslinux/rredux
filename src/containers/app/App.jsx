/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import {connect} from  'react-redux'

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import List from '../../components/list/List'

import {addTodo} from '../../store/actions/todo'

class App extends Component {
    state = {
        input: ''
    }

    handlerOnclick = () => {
        console.log('Button was clicked')
        const {addTodo} = this.props;
        const {input} = this.state;

        addTodo(input)
    }

    handlerOnChange = () => {   
        this.setState({ input: event.target.value });
    }
    render() {
        const { input } = this.state;
        const {listTodo} = this.props;
        console.log(listTodo)
        return (
            <div>
                <List />
                <Input onChange={event => this.handlerOnChange(event)} value={input}></Input>
                <Button onClick={() => this.handlerOnclick()}>Adicionar</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listTodo: state.todo
})

export default connect(
    mapStateToProps, {addTodo}
    )(App);  