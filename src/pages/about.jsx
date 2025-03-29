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
			<span className="text-2xl">G</span>raduated with a background in data from the University of Tasmania, with experience in Python and knowledge of Bash and PowerShell. 
			Familiar with Cloud platform, having completed the AWS Cloud Practitioner course and planning to take the certification exam. 
            </p>

            <p className="mb-4">
                Beyond my professional pursuits, I am an avid endurance athlete, chef, reader, home improvement DIYer, Bitcoiner, and 
                sports fan. These varied interests not only fuel my personal growth but also contribute to my well-rounded 
                perspective and a relentless desire to learn.
            </p>
            <p>
			Also, I am passionate about technology and its potential to drive positive change. I thrive in collaborative environments,
			My ability to adapt to new technologies and environments enables me to quickly learn and tackle complex problems, making me eager to grow within the Cloud and IT sector.
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
