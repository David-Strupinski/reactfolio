import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="/reactfolio/uw.png"
								alt="uw"
								className="work-image"
							/>
							<div className="work-title">University of Washington IT</div>
							<div className="work-subtitle">
								Student Software Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
