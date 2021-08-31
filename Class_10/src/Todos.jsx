import React from 'react';
import { removeTodo, getTodos } from'./actions/todosActions';
import { connect } from 'react-redux'

class Todos extends React.Component {
    componentDidMount() {
        this.props.getTodos();
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            alert(this.props.error.message)
        }
    }
    deleteTodo = todo => {
      this.props.removeTodo(todo)
    }
    render() {
        console.log('RE RENDERED TODOS LIST')
        return (
            <>
              {
                  this.props.isFetching
                    ? <h1>LOADINNNNGGGGG</h1>
                    : this.props.todos.map((todo, index) => <div key={index}>{ todo } <span onClick={() => this.deleteTodo(todo)}>X</span></div>)
              }
            </>
          )
    }
}

const mapStateToProps = state => {
    return {
        'todos': state.todos.todos,
        'isFetching': state.todos.isFetching,
        'error': state.todos.error
    }
}

const mapDispatchToProps = {
    removeTodo,
    getTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);