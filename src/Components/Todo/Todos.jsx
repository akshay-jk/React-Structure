import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoActions from '../../Store/Actions/TodoActions';

function Todos() {
    const dispatch = useDispatch();
    const { Todos } = useSelector((state) => state.TodoData);
    // console.log(Todos)
    useEffect(() => {
        dispatch(TodoActions['fetchTodosDetails']());
    }, [])
    return (
        <div>
            {!Todos.err && <div>
                {(Todos.loading) ? <h3>Loading...</h3> : <h3>List Todos</h3>}
            </div>}
            {!!Todos.err && <div style={{ 'color': 'red' }}><h2>{Todos.err}</h2></div>}
            {
                Todos.data.length != 0
                &&
                <div>
                    {Todos.data.map((todo, index) => {
                        if (index < 30) {
                            return (
                                <div key={index}>
                                    <span>{todo.id}</span>
                                    <span>{todo.title}</span>
                                    <span>{todo.completed ? <span>TRUE</span>:<span>FALSE</span> }</span>
                                </div>
                            )
                        }
                    })}
                </div>
            }
        </div>
    )
}

export default Todos