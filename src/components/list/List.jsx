import React from 'react';
import { connect } from 'react-redux'

const List = ({todoList}) => (
    <ul>
        {todoList.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
)
const mapStateToProps = state => ({
    todos: state.todo.list
})

export default connect(mapStateToProps) (List);