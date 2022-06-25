import './hero.css';

import { useContext } from 'react';

import AppContext from '../../AppContext';
import CustomLink from '../elements/customLink';

const Hero = props => {
  const context = useContext(AppContext);

  return (
    <div className="hero-div">
      <p> {context.language.NAME_APP}</p>
      <h1>{context.language.HERO_TITLE}</h1>
      <p>{context.language.HERO_SUBTITLE}</p>
      <CustomLink
        name={context.language.HERO_BUTTON}
        color="blue"
        url="/login"
      />
    </div>
  );
};

export default Hero;
