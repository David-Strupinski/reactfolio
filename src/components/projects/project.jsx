import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;
	const [showMore, setShowMore] = useState(false);

	return (
		<>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">
						{showMore ? description + " " : description.substring(0, 250) + "... "}
						<button className="btn" onClick={() => setShowMore(!showMore)}>
							{showMore ? "less" : "more"}
						</button>
					</div>
					<Link to={link}>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Project;
