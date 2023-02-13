import React, { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../utils";
import Captcha from "react-captcha-code";

import "./TapeEdit.css";

const defaultTape = {
    query: ""
};

const TapeEdit = (props) => {
    const defaultQuery = "Tape here";
    const [tape, setTape] = useState(defaultTape);
    
    const defaultCaptcha = "Captcha here";
    const [myCaptcha,  setMyCaptcha]  = useState("");
    const [captcha, setCaptcha] = useState("");

    const handleQueryChange = (event) => {
        setTape({...tape, query: event.target.value});
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if (myCaptcha.toString() !== captcha) {
            alert('Wrong Captcha!');
            setMyCaptcha("");
        }else {
            post("tape/edit/", tape)
                .then((response) => alert(response))
                .then(() => navigate(0))
                .catch((error) => alert(error));
        }
    };

    const handleCaptchaChange = (event) => {
        setMyCaptcha(event.target.value);
    };

    // click the verification code and change it
    const handleCaptcha = useCallback((captcha) => {
        setCaptcha(captcha);
    }, []);

    return (
        <div className="TapeEdit-container u-flexColumn">
            <textarea className="TapeEdit-textarea" 
                placeholder={defaultQuery} 
                value={tape.query} 
                onChange={handleQueryChange}>
            </textarea>
            <div className="TapeEdit-Captcha u-flex">
                <input placeholder={defaultCaptcha}  
                    value={myCaptcha} 
                    onChange={handleCaptchaChange}>
                </input>
                <Captcha charNum={6} onChange={handleCaptcha} />
            </div>
            <div className="button-right">
                <button className="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default TapeEdit;