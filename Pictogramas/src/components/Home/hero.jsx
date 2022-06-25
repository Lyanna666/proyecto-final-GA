import './hero.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../AppContext';
import CustomButton from '../elements/customButton';

const Hero = props => {
  const context = useContext(AppContext);

  return (
    <div className="hero-div">
      <p> {context.language.NAME_APP}</p>
      <h1>{context.language.HERO_TITLE}</h1>
      <p>{context.language.HERO_SUBTITLE}</p>
      <CustomButton
        color="blue"
        name={context.language.HERO_BUTTON}
        size="medium"
      />
    </div>
  );
};

export default Hero;
