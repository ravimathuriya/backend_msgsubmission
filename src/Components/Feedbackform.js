import React, {useContext, useState } from 'react';
import msgContext from './ContextState/Msgcontext';


function Feedbackform() {
const context = useContext(msgContext);    
const {addMsg} = context;

const [newmsg, setNewmsg] = useState({name:"",email:"", msgs:""});

const onChange =(e) =>{
    setNewmsg({...newmsg, [e.target.name]: e.target.value})
}

const handleClick = (e) => {
    e.preventDefault();
    addMsg(newmsg.name, newmsg.email, newmsg.msgs);
    console.log("submitted successfully")
}

    return (
        <>
            <div className="container">
                <form >
                    <div className="mb-3 my-3">
                        <label htmlFor="exampleInputtext" className="form-label">Name </label>
                        <input type="text" className="form-control" id="exampleInputtext" name='name' value={newmsg.name} onChange={onChange}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={newmsg.email}  onChange={onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <label htmlFor="exampleInputtext" className="form-label">Message</label>
                    <div className="form-floating mb-3" >
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name='msgs' value={newmsg.Message} style={{ height: "140px" }} onChange={onChange} />

                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleClick} >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Feedbackform
