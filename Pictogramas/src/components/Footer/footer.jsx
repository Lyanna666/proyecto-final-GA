import './footer.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components'; Si quereís usar esto lo descomentamos

import AppContext from '../../AppContext';

const Footer = (props) => {
  const context = useContext(AppContext);
  console.log(context);

  const socialIcons = [
    {
      name: 'Facebook',
      src: 'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png',
    },
    {
      name: 'Twitter',
      src: 'https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png',
    },
    {
      name: 'Instagram',
      src: 'https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-512.png',
    },
    {
      name: 'Google',
      src: 'https://cdn4.iconfinder.com/data/icons/picons-social/57/09-google-3-256.png',
    },
  ];

  return (
    <footer>
      <div className="container-footer">
        <div className="row">
          <div className="col-md-12">
            <div className="about-us">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu aliquam consectetur, nisl nisi
                consectetur nisl, eget aliquam nisi nisl eget aliquam.
              </p>
            </div>
            <div className="follow-us">
              <h3>Follow Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis numquam nostrum, aperiam commodi, quis maxime quia
                corporis veniam sunt natus sit a maiores voluptates praesentium
                voluptate earum corrupti minus eligendi?
              </p>
            </div>
            <div className="footer-logo">
              <a href="/">
                <img src="./Resources/logo-black.png" alt="logo" />
              </a>
              <div className="footer-social">
                {socialIcons.map((icon) => (
                  <a href="/" key={icon.name}>
                    <img src={icon.src} alt={icon.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>
            {context.language.FOOTER_COPYRIGHT}{' '}
            <a
              href="https://github.com/Lyanna666"
              target="_blank"
              rel="noreferrer"
            >
              Andrea Gonzalez
            </a>{' '}
            &#38;{' '}
            <a
              href="https://github.com/jacobo87"
              target="_blank"
              rel="noreferrer"
            >
              Jacobo Azmani
            </a>
            .
          </p>
        </div>
        <div className="made">
          <p>
            {context.language.FOOTER_MADE} <span>&#10084;</span>{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
