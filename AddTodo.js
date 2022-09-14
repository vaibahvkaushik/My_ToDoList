import React, { useState } from 'react';

export default function AddTodo(props){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank")
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
	}
        
    return (
        <div className="container my-3">
            <h3>Add a ToDo in Your List</h3>
            <form onSubmit={submit}>
            <div className="mb-3">
                <label forhtml="Title" className="form-label">ToDo Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className="form-control" id="title" aria-describedby="emailHelp" />
                  
             </div>
                <div className="mb-3">
                    <label forhtml="Desc" className="form-label">ToDO Description:</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}
                        className="form-control" id="Desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
		</div>
		
		
		)

}
