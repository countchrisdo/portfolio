import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, RightSection } from "./HeroStyles";

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Hi, I'm Chris Burwell
				</SectionTitle>
				<SectionTitle>
				Software Engineer /
				<br/>
				Web Developer
				</SectionTitle>
				<SectionText>
					<p>
						I am a developer with a passion for creating beautiful, functional,
						and responsive products.
					</p>
					<p>
						I have a background in online content creation and social media
						marketing.
					</p>
					<p>
						I am currently looking for a full-time position as a software
						engineer or web developer.
					</p>

				</SectionText>

				<a
					href="https://drive.google.com/file/d/1JSvIv5LzWuUYFqEu6igHOEWkvNNTlI__/view"
					target="_blank"
				>
					{" "}
					<Button> Resume </Button>{" "}
				</a>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
