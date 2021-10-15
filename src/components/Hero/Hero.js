import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Chris Burwell's<br />
           Online Portfolio
        </SectionTitle>
        <SectionText>
          <p>
            I am a developer with a passion for creating
            beautiful, functional, and responsive products.
          </p>
          <p>
            I have a background in online content creation and social media marketing.
          </p>
          <p>
            I am currently looking for a full-time position as a software engineer or web developer.
          </p>
        </SectionText>
        <Button onClick={() => window.location = "https://drive.google.com/file/d/1JSvIv5LzWuUYFqEu6igHOEWkvNNTlI__/view?usp=sharing"}>See More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;