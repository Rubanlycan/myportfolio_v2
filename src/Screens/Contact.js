import React from "react";

import InputFieldComponent from "../Components/InputFieldComponent";
import LabelComponent from "../Components/LabelComponent";
import ButtonComponent from "../Components/ButtonComponent";
import FontIcons from "../Common/FontIcons";
import API from '../Services/Api'

const CONTACT_DATA = [{
  "icon": "GoLocation",
  "content": "Mumbai, India"
}, {
  "icon": "AiOutlineMail",
  "content": "g.rubanlycan@gmail.com"
}, {
  "icon": "FiPhone",
  "content": "+91 9004799408"
},]
const Contact = () => {

  const [sendMessage, setSendMessage] = React.useState({
    "name": "",
    "mailId": "",
    "message": ""
  })
  const setContactData = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setSendMessage({ ...sendMessage, [name]: value })

  }
  const onRegisterSender = async () => {
    const data = await API.registerSenderData(sendMessage)
    console.log(data)
  }
  return (
    <div className=" contact-screen">
      <div className="d-flex contact-parent" >
        <div className="contact-child-left ">
          <div>
            <p style={{ backgroundColor: "#fff", paddingRight: 10, paddingLeft: 8, paddingTop: 5, paddingBottom: 5, marginTop: 18, fontWeight: 'bold', borderTopRightRadius: 2, borderBottomRightRadius: 2 }}>Contact Us</p>
            <div className="d-flex  align-items-center" style={{ height: '70%' }}>
              <div className="d-flex flex-column justify-content-center align-self-center">
                {CONTACT_DATA.map((i, unique) => <div key={unique} className="d-flex flex-row align-items-center py-3 px-2">
                  <FontIcons type={i.icon} color={"#fff"} />
                  <p className="ml-2" style={{ color: '#fff', fontSize: 14, paddingLeft: 10 }}>{i.content}</p>
                </div>)}

              </div>
            </div>
          </div>

        </div>
        <div>
          <h3 className={"label"} style={{ color: '#000', fontSize: 24 }}>Get In Touch</h3>
          <div className="d-flex flex-column justify-content-center w-70 ">

            <>
              <LabelComponent title={"Name"} className={"label"} />
              <InputFieldComponent className={"input"} name={"name"} onChange={setContactData} />
              <LabelComponent title={"Email"} className={"label"} />
              <InputFieldComponent className={"input"} name={"mailId"} onChange={setContactData} />
              <LabelComponent title={"Message"} className={"label"} />
              <InputFieldComponent className={"input"} inputType={"textarea"} name={"message"} onChange={setContactData} />
            </>
            <ButtonComponent onPress={onRegisterSender} button_text={"Send"} btnStyle={{ backgroundColor: '#8443df', width: 100, borderColor: ' #8443df', alignSelf: 'flex-end' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
