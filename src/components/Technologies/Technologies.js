import React from 'react';
import { DiHtml5, DiJavascript1, DiFirebase, DiReact, DiNodejsSmall, DiGithubBadge, DiLinux, DiMysql, DiVisualstudio } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ImageContainer } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>
      I've worked with a range a technologies in the development world.
      From Back-end tools to responsive front-end framworks.

    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiHtml5 size="3rem" />
          <DiJavascript1 size="3rem" />
        
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            HTML5 <br />
            CSS3 <br />
            JavaScript <br />
            JQuery <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
          <DiNodejsSmall size="3rem" />
          <DiMysql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node <br />
            Databases <br />
            Mysql <br />

          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiGithubBadge size="3rem" />
          <DiLinux size="3rem" />
          <DiVisualstudio size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Developer Tools</ListTitle>
          <ListParagraph>
            Linux <br />
            VS Code <br />
            Photoshop <br />
            Git <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* <ListItem>
        <picture>
          <DiPhotoshop size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Photoshop <br />
          </ListParagraph>
        </ListContainer>
      </ListItem> */}

      {/* <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem> */}

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
