import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { DiCodeBadge } from "react-icons/di";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a style={{ display: "flex", alignItems: "center", color: "white" }}>
					<DiCodeBadge size="3rem" /> <span>Portfolio</span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons
				href="https://github.com/countchrisdo"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillGithub size="3rem" />
			</SocialIcons>

			<SocialIcons
				href="https://www.youtube.com/channel/UCtBVDWZ4glIADEpchaMVftA/featured"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillYoutube size="3rem" />
			</SocialIcons>
			<SocialIcons
				href="https://www.linkedin.com/in/crburwell/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
