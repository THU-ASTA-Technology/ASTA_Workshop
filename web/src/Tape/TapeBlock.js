import React from "react";
import { useState, useEffect } from "react";
import "./TapeBlock.css";
import { get, post } from "../utils";
import { useNavigate } from "react-router-dom";


const EmptyTapeBlock = () => {
    return (
        <h3 className="u-textCenter">No tape so far</h3>
    );
};

const SingleTape = (props) => {
    return (
        <div className="SingleTape-container u-flexColumn">
            <div className="SingleTape-time u-flex">
                {props.time}
                {props.hasReply ? 
                <>
                    
                </>
                : 
                <>
                    <div className="note">
                        &nbsp;&nbsp;!
                    </div>
                </>
                }
            </div>
            <div className="SingleTape-content">
                {props.content}
            </div>
        </div>
    );
};

const TapeReply = (props) => {
    const defaultReply = "Reply here";
    const [reply, setReply] = useState("");

    const handleReplyChange = (event) => {
        setReply(event.target.value);
    };

    const handleSubmit = (event) => {
        props.handleSubmit && props.handleSubmit(reply);
    };

    return (
        <div className="replyReply-container u-flexColumn">
            <div className="replyReply-container u-flexColumn">
                <textarea className="Tape-textarea" placeholder={defaultReply} value={reply} onChange={handleReplyChange}></textarea>
            </div>
            <div className="Tape-button-right">
                <button className="Tape-button-border Tape-button-cursor tape Tape-submitButton" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

const TapeBlock = (props) => {
    const [tape, setTape] = useState(props.tape);
    const navigate = useNavigate();
    const handleSubmit = (reply) => {
        post("tape/edit/", {...tape, reply: reply})
            .then(() => {
                get("tape/detail/", {tapeId: tape.tapeId})
                    .then((response) => {
                        setTape(response);
                        setInput(nullInput);
                        setReplyInput(nullInput);
                    })
            })
            .then(() => navigate(0))
            .catch((error) => console.log(error));
    };

    const [isShow, setIsShow] = useState(false);
    const nullInput = (<></>);
    const [replyInput, setReplyInput] = useState(tape.reply ? nullInput : (<TapeReply handleSubmit={handleSubmit} />));
    const [input, setInput] = useState(nullInput);
    
    const handleClick = (event) => {
       
            if (!isShow) {
                setInput(replyInput);
                setIsShow(true);
            }else {
                setInput(nullInput);
                setIsShow(false);
            };
        
    };

    return (
        <div className="TapeBlock-container u-flexColumn border">
            <div className="TapeBlock-tape u-flex" onClick={handleClick}>
                <SingleTape 
                    content={tape.query} 
                    time={tape.queryTime} 
                    hasReply={tape.reply}
                />
            </div>
            {tape.reply ? 
            <>
                <SingleTape 
                    content={tape.reply} 
                    time={tape.replyTime}
                    hasReply={tape.reply}    
                />
            </>
            : 
            <>
                <div className="TapeBlock-input">
                    {input}
                </div>
            </>
            }
            
        </div>
    );
    
};

export { TapeBlock, EmptyTapeBlock };