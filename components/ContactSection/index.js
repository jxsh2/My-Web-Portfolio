import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  TextArea,
  Divider,
  Modal,
} from "semantic-ui-react";
import style from "../../public/components/contact-section.module.scss";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // Modal state

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true); // Open the modal when the form is submitted
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="wrapper">
      <section className={style.contactSection} id="contact">
        <Container text>
          <h2>Get in Touch</h2>
          <p>
            If you have any questions or inquiries, feel free to contact me
            using the form below.
          </p>

          <Divider />
          <Form onSubmit={handleSubmit}>
            <Form.Input
              label="Email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Field
              control={TextArea}
              label="Message"
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" className={style.submitButton}>
              SEND
            </Button>
          </Form>

          {/* Modal */}
          <Modal
            open={modalOpen}
            onClose={closeModal}
            size="small"
            dimmer="blurring"
            className={style.modal}
          >
            <Modal.Header as="h1">Under Construction ⚠️</Modal.Header>
            <Modal.Content>
              <p>
                This feature is currently under construction. Please check back
                later!
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={closeModal} className={style.closeButton}>
                CLOSE
              </Button>
            </Modal.Actions>
          </Modal>
        </Container>
      </section>
    </div>
  );
};

export default ContactSection;
