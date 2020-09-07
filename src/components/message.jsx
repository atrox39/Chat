import React from 'react';
import '../css/message.css';

function Message(props)
{
    return(
    <div className="message">
        <p>
            {props.children}
        </p>
        <span>Date:{props.datetime}</span>
    </div>
    )
}

export default Message;