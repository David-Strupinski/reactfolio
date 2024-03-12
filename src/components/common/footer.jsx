import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="https://www.flaticon.com/free-icons/django" title="django icons">Django icons created by Freepik - Flaticon</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="https://www.flaticon.com/free-icons/postgresql" title="postgresql icons">Postgresql icons created by LAFS - Flaticon</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="https://www.flaticon.com/free-icons/vue" title="vue icons">Vue icons created by JunGSa - Flaticon</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="https://www.flaticon.com/free-icons/gnu-bash" title="gnu bash icons">Gnu bash icons created by Freepik - Flaticon</a>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Tharindu.dev. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
