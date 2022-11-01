import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {
  // USE STATE
  // const [showModal, setShowModal] = useState(false);

  // function onTodoDelete() {
  //   setShowModal(true);
  // }

  // function cancelModal() {
  //   console.log("cancel");
  //   setShowModal(false);
  // }

  // function confirmModal() {
  //   console.log("confirm");
  //   setShowModal(false);
  // }

  // USE EFFECT
  // useEffect(() => {
  //   console.log('Only on mount')
  // }, [])

  // useEffect(() => {
  //   console.log(`On mount and on ${showModal} change`)
  // }, [showModal])

  // useEffect(() => {
  //   console.log('Every render')
  // })

  // ROUTING
  return (
    <div>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>

    // <div>
    //   <Title />
    //   <div>
    //     <input
    //       type="text"
    //       onChange={(event) => console.log(event.target.value)}
    //     />
    //     <button>Add task</button>
    //   </div>
    //   <div className="todo__wrapper">
    //     <Todo onTodoDelete={onTodoDelete} title="Task 1" />
    //     <Todo onTodoDelete={onTodoDelete} title="Task 2" />
    //     <Todo onTodoDelete={onTodoDelete} title="Task 3" />
    //   </div>
    //   {showModal && (
    //     <Modal
    //       cancelModal={cancelModal}
    //       confirmModal={confirmModal}
    //       title="Are you sure you want to delete?"
    //     />
    //   )}
    // </div>
  );
}

export default App;
