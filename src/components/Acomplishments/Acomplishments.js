import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 30, text: 'Github Projects'},
  { number: 10, text: 'Github Followers', },
  { number: 25, text: 'Github Stars', },
  { number: 30, text: 'Open Source Contributions', },
  { number: 2, text: 'Hackathons attended', },
  { number: 2, text: 'Gamejams Attended', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    {/* <SectionDivider/> */}
  </Section>
);

export default Acomplishments;
