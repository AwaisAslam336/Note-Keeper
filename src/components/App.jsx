import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <body>
      <Header />
      <Note key={1} title="note title" content="note content" />
      <Footer />
    </body>
  );
}

export default App;
