import React from 'react';


export class TodoForm extends React.Component{
    constructor(){
        super();
        this.addTask = this.addTask.bind(this);
    }

    /**
     * task oluşturmak için controller method
     * controller method for creating task
     * @param e
     */
    addTask(e){
        e.preventDefault();
        /*
        * dom objesine erişime farklı bir örnek
        * alternative usage for accessing dom object
        * const inp = e.target.querySelector('input');
        */
        var inp = document.getElementById('todoInput');
        var val = inp.value;
        inp.value = '';
        this.props.addTask(val);
    }

    render(){
        return(
            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
                        <input id="todoInput" type="text" className="add-todo" name="add-todo" placeholder="What needs to be done?" />
                    </form>
                </div>
                <button type="button" onClick={this.addTask} className="add-btn" />
            </div>
        )
    }
}
