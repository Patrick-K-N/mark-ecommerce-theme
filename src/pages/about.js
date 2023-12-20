import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Sydney \n A British brand since 1860`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            History
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Values
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sustainability
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Founded in 2001, Mark’s Beauty Shop is an innovative British brand with a
              contemporary edge. We sell timeless everyday beauty products.
            </p>
            <br />
            <br />
            <p>
              We sell good quality Equipments for your personal use and business.
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Our Values</h3>
            <div ref={valuesRef}>
              <p>
               Mark’s Beauty Shop is a one-stop destination for all your beauty needs, offering a wide range of services including nail care, spa treatments, and barber equipment. We strive to cater for both individual customers and professional salons. Our commitment to quality and customer satisfaction makes us the trusted choice in the beauty industry. We give you the experience of blending luxury and professionalism at Mark’s Beauty Shop.
              <ol>
                <li>Be an ecowear</li>
                <li>Sophisticated and not mass-produced</li>
                <li>Only the best materials</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Sustainability</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Our founder, Thomas Hill, had both an eye for quality and a
                desire to innovate. As well as using the finest fibres such as
                Sea Island cotton, cashmere and silk, he invented his own
                fabrics. Sunspel continues this commitment to innovation today
                and our unique fabrics include: Q100 Sea Island cotton, Q82
                Supima cotton, Q75 warp knit mesh cotton and Q14 warp knit
                cellular cotton. The technology behind these fabrics remains
                unchanged today and all Sunspel products use the finest cottons,
                wools and fibres.
              </p>
              <p>
                Made in Long Eaton, England and crafted from our luxurious long
                staple Supima cotton for unparalleled softness, comfort and
                durability, the Sunspel T-shirt has a classic fit and only the
                most essential details.{' '}
              </p>
              <p>
                With over 100 years spent perfecting fabric, fit and style, the
                Sunspel Classic T-shirt is recognised as the finest in the
                world.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
