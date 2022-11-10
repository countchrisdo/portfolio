import React, { useState, useRef, useEffect } from "react";

import {
	CarouselButton,
	CarouselButtonDot,
	CarouselButtons,
	CarouselContainer,
	CarouselItem,
	CarouselItemImg,
	CarouselItemText,
	CarouselItemTitle,
	CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
	const [activeItem, setActiveItem] = useState(0);
	const carouselRef = useRef();

	const scroll = (node, left) => {
		return node.scrollTo({ left, behavior: "smooth" });
	};

	const handleClick = (e, i) => {
		e.preventDefault();

		if (carouselRef.current) {
			const scrollLeft = Math.floor(
				carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
			);

			scroll(carouselRef.current, scrollLeft);
		}
	};

	const handleScroll = () => {
		if (carouselRef.current) {
			const index = Math.round(
				(carouselRef.current.scrollLeft /
					(carouselRef.current.scrollWidth * 0.7)) *
					TimeLineData.length
			);

			setActiveItem(index);
		}
	};

	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen
	useEffect(() => {
		const handleResize = () => {
			scroll(carouselRef.current, 0);
		};

		window.addEventListener("resize", handleResize);
	}, []);

	return (
		<Section id="about">
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				<p>
					I am a mostly self-taught programmer, with a General Assembly Coding
					Bootcamp Certification in Software Engineering and I have a passion
					for learning new technologies and languages. I am currently learning{" "}
					<a href="https://www.freecodecamp.org/">freeCodeCamp</a> to become an
					even better full-stack developer.
				</p>

				{/* <details>
					<summary>More Details</summary>
					<p>
						I have been building web stuff since I was 11 years-old. Back in the
						day I tinkered endlessly with the site builder tool from Geocities
						and came up with a few sites where I could host the Flash animations
						I was making for my friends. Later, the game changed and the cool
						stuff was made with Dreamweaver, so I used it to make fan-club
						websites for my favourite musicians. When social media came around I
						was making myspace websites look stunning (14 year old me thought
						so) with my sick html / css skills. Since then I haven’t stopped
						learning and creating. I have been involved in music, photography,
						sound engineering, electronic engineering, programming, video
						production, feature film post-production, VR games, and 3D sound. In
						the last few years, I have been increasingly working on software
						development in my professional life. I’ve been lucky to have worked
						alongside senior developers and designers, who have taught me what’s
						expected from a quality product.
					</p>
					
						<span>As a developer</span> <p>I pay close attention to my code’s readability. Sure,
						I’ll put together something as quickly as possible to make it work,
						but after that I’ll spend a good amount of time commenting and
						organizing everything. Mi casa es tu casa, I want you to feel
						welcome around my code. Clean, consistent, readable and maintainable
						code. It’s great when features work, but it’s even greater whenever
						they can stay that way, regardless of who’s working on them. I’m
						excited to work on new projects, because I learn something new every
						time. I’m excited for the next challenge!
					</p>
					
          <span>As a person</span><p> If I had to describe myself in one word, it would be
						resourceful. I’ll take a problem, break it into smaller bits and
						MacGyver myself a solution. Creativity has helped me sail around
						tough obstacles. I’m curious by nature and I love learning. I’ve
						amassed a wide range of skills and interests that when put together,
						end up feeding my career in one way or another. I’m what they call a
						T-shaped individual. As a colleague I’m a team player, with my
						background in engineering and art, I feel comfortable interacting
						with both the technically oriented people of the team as well as the
						artistically oriented ones. I will always go the extra mile to help
						my team. My communications skills are excellent. I’ve worked on the
						side as a teacher for ten years. This experience has made me feel
						comfortable at conveying ideas in creative ways so that everyone can
						understand them. My experience working for a small startup gave me
						exposure to the business side of a tech company, while at the same
						time delivering industry standard results on the production side. I
						have lead projects where we collaborated directly with Facebook and
						Amazon. I’m always happy to pull an espresso shot and make some
						latte art for a colleague. I love to cook, so be on the lookout for
						the next potluck. I want to hear from you!
					</p>
				</details> */}
			</SectionText>
			<CarouselContainer ref={carouselRef} onScroll={handleScroll}>
				<>
					{TimeLineData.map((item, index) => (
						<CarouselMobileScrollNode
							key={index}
							final={index === TOTAL_CAROUSEL_COUNT - 1}
						>
							<CarouselItem
								index={index}
								id={`carousel__item-${index}`}
								active={activeItem}
								onClick={(e) => handleClick(e, index)}
							>
								<CarouselItemTitle>
									{`${item.year}`}
									<CarouselItemImg
										width="208"
										height="6"
										viewBox="0 0 208 6"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
											fill="url(#paint0_linear)"
											fillOpacity="0.33"
										/>
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="-4.30412e-10"
												y1="0.5"
												x2="208"
												y2="0.500295"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="white" />
												<stop
													offset="0.79478"
													stopColor="white"
													stopOpacity="0"
												/>
											</linearGradient>
										</defs>
									</CarouselItemImg>
								</CarouselItemTitle>
								<CarouselItemText>{item.text}</CarouselItemText>
							</CarouselItem>
						</CarouselMobileScrollNode>
					))}
				</>
			</CarouselContainer>
			<CarouselButtons>
				{TimeLineData.map((item, index) => {
					return (
						<CarouselButton
							key={index}
							index={index}
							active={activeItem}
							onClick={(e) => handleClick(e, index)}
							type="button"
						>
							<CarouselButtonDot active={activeItem} />
						</CarouselButton>
					);
				})}
			</CarouselButtons>
			<SectionDivider />
		</Section>
	);
};

export default Timeline;
