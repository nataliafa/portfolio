import React from 'react';
import {useTranslation} from "react-i18next";

function About() {
  const {t} = useTranslation();
  return (
    <div className="about-section">
      <section className="about-container container">
        <h1 className="about-name">{t('NATALIA FOMINA')}</h1>
        <p className="about-profession">{t('Front-end Developer & Designer')}</p>
        <p className="about-text"><i className="fal fa-heart"/>{t('I love web development, design and art.')}</p>
        <p className="about-text"><i className="fal fa-map-pin"/>{t('I live in Munich, Germany.')}</p>
        <p className="about-text"><i className="fal fa-globe-americas"/>{t('I speak fluent English, Italian, Russian. I\'m beginner in German.')}</p>
        <div className="about-btn-wrap">
          <a href="https://natalia-portfolio-api.herokuapp.com/" rel="noreferrer" target="_blank" className="about-btn">{t('Download my CV')} <i
            className="fal fa-arrow-to-bottom"/></a>
        </div>
      </section>
    </div>
  )
};

export default About;
