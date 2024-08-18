import React, { useState } from 'react';
import msgContext from './Msgcontext';

const Msgstate = (props) => {

    const [Msg, setMsg] = useState([]);

    const addMsg = async(name, email, msgs) => {

        const response = await fetch("http://localhost:5000/message", {
            method: "POST",             
		    headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({name, email, msgs}), // body data type must match "Content-Type" header
          });

           const data = await response.json(); // parses JSON response into native JavaScript objects)
          console.log(data);

        const add = { name: name, email: email, msgs: msgs }
        setMsg(Msg.concat(add))
    }




    return (<msgContext.Provider value={{Msg, addMsg}}>
        {props.children}
    </msgContext.Provider>)
}

export default Msgstate;