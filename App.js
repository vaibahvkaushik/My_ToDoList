// import logo from './logo.svg';
import './App.css';
import Header from "./My Component/Header";
import AddTodo from "./My Component/AddTodo";
import Footer from "./My Component/Footer";
import { Todos } from "./My Component/Todos";
import { About } from "./My Component/About"
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
    let initTodo;
    if (localStorage.getItem("todos")===null) {

        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }
    const onDelete = (todo) => {
        console.log("I am on Delete of todo ", todo);

        settodos(todos.filter((e) => {
            return e !== todo;
        }));
        localStorage.setItem("todos", JSON.stringify(todos));
    }


    const addTodo = (title, desc) => {
        console.log("I am adding this todo", title, desc)
        let sno;
        if (todos.length === 0) {
            sno =1;
        }
        else{
             sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno:sno,
            title:title,
            desc: desc,
        }
        settodos([...todos,myTodo])
        console.log(myTodo)
        
    }

    const [todos, settodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    return (
        <>
            <Router>
                <Header title="My ToDos List" searchBar={true} />
                <Switch>
                    <Route exact path="/" render={() => {
                        return(
                        <>
                            <AddTodo addTodo={addTodo} />
                            <Todos todos={todos} onDelete={onDelete} />
                            </>
                            ) 
                    }}>
                       
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>

                </Switch>
            
            <Footer />
            </Router>

      </>
  );
}

export default App;
