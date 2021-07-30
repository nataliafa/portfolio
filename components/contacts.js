import React from 'react';
import {useTranslation} from "react-i18next";

function Contacts() {
  const {t} = useTranslation();
  return (
    <div className="contact-section">
      <section className="contact-container container">
        <h2 className="contact-title">{t('Write me a note')}</h2>
        <form action="https://formspree.io/f/xpzonjaz" method="POST" className="contact-form">
          <input id="email" name="email" type="email" placeholder="Email" required/>
          <textarea id="message" name="message" placeholder="Message" required/>
          <button className="btn">{t('Submit')}</button>
        </form>
      </section>
    </div>
  )
}

export default Contacts;
