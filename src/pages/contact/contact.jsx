import React, { useState } from 'react'
import './contact.css'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {
  const[result, setResult] = React.useState("Send Now");
  const[text, setText] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  const notify = ()=>{
    toast('🦄 Message Send!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }


  const sendMessageFunction = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6a2a08ea-14c0-46fa-b0c0-588e8fdc9ab0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      setText("");
      setEmail("");
      setMessage("");
    }
    else{
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="container mt-10" style={{marginTop:"65px"}}>
      <div className="content">
        <div className="left-side">
          <div className="address details">
            {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
            <div className="topic">Address</div>
            <div className="text-one">Kolkata</div>
            {/* <div className="text-two">Birendranagar 06</div> */}
          </div>
          <div className="phone details">
            {/* <FontAwesomeIcon icon={faPhoneAlt} /> */}
            <div className="topic">Phone</div>
            <div className="text-one">+91 9903693426</div>
            {/* <div className="text-two">+0096 3434 5678</div> */}
          </div>
          <div className="email details">
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            <div className="topic">Email</div>
            <div className="text-one">saswata.maitra07@gmail.com</div>
            {/* <div className="text-two">info.codinglab@gmail.com</div> */}
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text" style={{color:"#5DEBD7"}}>Send me a message</div>
          <p style={{color:"#E1F7F5"}}>If you have any work for me or any types of queries, you can send me a message from here. It's my pleasure to help you.</p>
          <form onSubmit={sendMessageFunction}>
            <div className="input-box">
              <input type="text" placeholder="Enter your name" name='name' value={text} onChange={(e)=>{setText(e.target.value)}}/>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Enter your email" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="input-box message-box">
              <input type="textArea" placeholder="Write your message" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
            </div>
            <div className="button">
              <button type="submit" value="Send Now" onClick={notify}>{result}</button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact