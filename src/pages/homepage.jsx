import React, { useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";
import demo from '../assets/img/demo.jpg';


import "./styles/homepage.css";

const Homepage = () => {

    const codedDescription = (
        <span>
		A curiosity for coding in 2023 quickly grew into a passion. While my current focus is on <strong>ETL T-SQL</strong>, 
        I continuously explore new technologies to expand my skill set and work on diverse projects.
        </span>
    )

    const codedTitle = (
        <span>
		A proactive and motivated tech enthusiast with hands-on experience in Python, SQL, and cloud technologies.
        </span>
    )

    useEffect(() => {
		document.title = `${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title !== "" ? INFO.homepage.title : codedTitle}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description !== "" ? INFO.homepage.description : codedDescription}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={demo}
											alt="demo"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
                            <a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
