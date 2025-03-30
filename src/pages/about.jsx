import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import imgGraduate from "../assets/img/graduate.JPG";
import "./styles/about.css";

const About = () => {

    const codedDescription = (
        <span>
            <p className="mb-4">
			<span className="text-2xl">G</span>raduated with a background in data from the University of Tasmania, with experience in Python, SQL and PowerShell. AWS Certified Cloud Practitioner with a strong interest in cloud computing, actively expanding my technical expertise.
            </p>

            <p className="mb-4">
			Beyond my professional pursuits, I have a passion for exploring culinary creations, a love for animals, a deep appreciation for music, a keen interest in sports, and enjoy immersing myself in novels. These diverse interests fuel my personal growth and shape my well-rounded perspective, reinforcing my passion for learning and innovation.
            </p>
            <p>
			I am deeply interested in technology and its ability to drive positive change. Thriving in collaborative environments, I embrace new challenges and adapt quickly to emerging technologies, equipping me to solve complex problems and grow within the Cloud and IT sector.
            </p>
        </span>
    )

    const codedTitle = (
        <span>
            Get to know me!
        </span>
    )

    useEffect(() => {
		document.title = `About | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title !== "" ? INFO.about.title : codedTitle}
                                </div>

								<div className="subtitle about-subtitle">
									{INFO.about.description !== "" ? INFO.about.description : codedDescription}
                                </div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imgGraduate}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
