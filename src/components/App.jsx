import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App(){
return (
    <body>
        <Header />
        {notes.map((note)=>{
            return (<Note key={note.key} title={note.title} content={note.content}/>);
        })}
        <Footer />
    </body>
);
}

export default App;