import React, { useState } from 'react';

const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    if (name && email && message) {
      alert('Vaša poruka je uspešno poslata!');
      setModalVisible(false);
    } else {
      alert('Molimo vas da popunite sva polja.');
    }
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <button id="contact-button" onClick={() => setModalVisible(true)}>Contact</button>
      {modalVisible && (
        <div id="contact-modal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
