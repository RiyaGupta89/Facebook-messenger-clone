import { Typography, Card, CardContent } from "@material-ui/core";
import React from "react";
import './Message.css';

const Message = ({ message, username }) => {
    const isUser = username === message.username;
  return (
    <div>
      <Card className={`message_card ${isUser &&  'message_user'}`}>
        <CardContent>

          <Typography color="white" variant="h5" component="h2">
            {message.username}: {message.text}
          </Typography>

        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
