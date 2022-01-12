import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const ContactComponent = () => {
  return (
    <div className="contact-parent">

      <div className="d-flex flex-column justify-content-center">
        <h2>Get in Touch</h2>
        <label className="contact-label">Name</label>
        <InputGroup className="mb-3">
          <FormControl
            style={{ width: 350 }}
            className="input"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

        </InputGroup>
        <label className="contact-label">Email</label>
        <InputGroup className="mb-3" >
          <FormControl
            className="input"
            style={{ width: 350 }}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

        </InputGroup>
        <label className="contact-label">Message</label>
        <InputGroup className="mb-3">
          <FormControl
            className="input"
            as="textarea"
            style={{ width: 350 }}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />

        </InputGroup>
        <Button className="float-right align-self-end" style={{ backgroundColor: '#8443df', borderColor: '#8443df', width: 100, }}>Send</Button>
      </div>

      <div className="child-contact">

      </div>
    </div>
  );
};

export default ContactComponent;
