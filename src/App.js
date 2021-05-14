import React, { useState, useEffect } from "react";
import { Button, InputLabel, Input } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import logo from "./images/logo.png";

function App() {

  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([{username: "Kenny", text:"Hi guys."},{username: "Luis", text: "How is it going?"}]);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, [])


  useEffect(()=> {
    db.collection("messages").onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => {
        doc.data()
      }))
    })
  }, [])


  const inputEvent = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (event) => {
    setMessages([...messages, {username: username, text: input}]);
    event.preventDefault();
    setInput("");
  };

  console.log(messages);

  console.log(input);

  return (
    <>
      <div>
        <img className="image" src={logo}></img>
      </div>
      <h2>Welcome, {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a Message...</InputLabel>
          <Input type="text" onChange={inputEvent} value={input} />
          <Button
            disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => {
        return <Message username={username} message={message} />
      })}
    </>
  );
}

export default App;
