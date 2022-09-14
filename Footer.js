import React from 'react'
export default function footer() {
    let footerstyle = {
        position: "relative",
        top: "25vh",
        width:"100%"
        
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerstyle}>
            <p className="text-center">
                Copright &copy; My TodoList.com
            </p>

        </footer>
    )
}
