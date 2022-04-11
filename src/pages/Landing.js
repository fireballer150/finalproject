import Hero from '../components/Hero';
import LandingPart1 from '../components/LandingComponents/LandingPart1';

const Landing = ({ slides }) => {
  return (
    <div>
      <LandingPart1 />

      <Hero slides={slides} />
    </div>
  );
};

export default Landing;
