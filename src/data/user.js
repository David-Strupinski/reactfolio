const INFO = {
	main: {
		title: "Portfolio by David",
		name: "David Strupinski",
		email: "david.strupinski@gmail.com",
		logo: "/reactfolio/logo.png",
	},

	socials: {
		github: "https://github.com/David-Strupinski",
		linkedin: "https://linkedin.com/in/david-strupinski",
	},

	homepage: {
		title: "Full-stack developer, amateur photographer.",
		description:
			"I am a backend-focused full stack developer with expertise in Django. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies, including but not limited to Django, React, Docker, and Kubernetes. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards.",
	},

	about: {
		title: "I'm David Strupinski. I live in Seattle, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are public and available for others to explore. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	projects: [
		{
			title: "Data Rollup Dashboard",
			description:
				"For this personal project, I mainly tried to learn how to use the features of the Django REST Framework I hadn't \
				used as much before - such as the serializers and viewsets - and I tried to use the SQLAlchemy ORM as opposed to Django's \
				to understand its lure. The project was built around a simple technical interview question about taking in JSON data with \
				many objects with amounts and \"rolling them up\" into objects based on certain criteria and summing their amounts. \
				This was mainly an exercise in learning how to use new technologies from scratch, encouraging myself to do it by reading the \
				docs and not relying on tutorials. Overall, I was very happy with the result, and made a simple React front-end to \
				show it off, as well as topping it off with some management commands such as making importing data easier.",
			logo: "/reactfolio/react.png",
			linkText: "View Project",
			link: "https://github.com/David-Strupinski/data-rollup/tree/main",
		},

		{
			title: "Snoozer",
			description:
				"In my first attempt at making a fully-fledged iOS app, I created Snoozer, a simple alarm clock app - with a twist.\
				 Snoozer is designed to help you wake up by making you play a trivia game to turn off the alarm. The app is built using\
				  Swift and the UIKit framework. I spent some time with this project learning how to implement social concepts in an \
				  application, with a PostgreSQL database handling users, adding friends, and keeping track of \"streaks\" of not snoozing \
				  to be displayed in a leaderboard with friends. Snoozer is soon to be available on the App Store, mostly for a \
				  proof-of-concept.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/swift/swift.png",
			linkText: "View Project",
			link: "https://github.com/David-Strupinski/Snoozer",
		},

		{
			title: "Scout django-upgrade",
			description:
				"I've never had a project as delayed as this one, but for very good reason. At UW-IT, I was tasked with upgrading \
				the Scout Django application from Django version 1.11 to 3.2. This initially seemed like a simple task, but as I \
				began checking dependencies and the Django changelogs, I realized that our OAuth library was no longer supported, and \
				not even properly implemented in the first place. Thus, the scope creeped to include a complete reimplementation of \
				our OAuth system, which was a huge task in itself. I learned a lot about the importance of keeping up with the latest \
				versions of dependencies, and how to properly implement a secure OAuth system, where I used django-oauth-toolkit and took \
				the opportunity to learn the new OAuth 2.0 flow. I believe that this makes this project one of my most important, as it \
				was a high pressure learning experience and taught me a lot about the functions of web security.",
			logo: "/reactfolio/django.png",
			linkText: "View Project",
			link: "https://github.com/uw-it-aca/spotseeker_server/tree/django-upgrade",
		},

		{
			title: "Handshake Provisioner",
			description:
				"For the largest Django project I've worked on from scratch, this was a UW-IT project to create an automated ETL \
				pipeline to provision UW's student data to Handshake, a career services platform. Myself and a supervisor exclusively \
				worked on this project. \
				We used Django's built-in ORM to extract the data from the UW database, and then transformed the data to fit the \
				requirements of Handshake's API. We then loaded the data to be ready for Handshake's API and sent it to our frontend as a csv, \
				ready to be uploaded by the stakeholder on a user-friendly Vue.js site. A big part \
				of this project was reguarly meeting with the UW's Handshake App Access Team (HAAT) to ensure that our data was transformed \
				correctly and to their standards. This project was a huge success, saving the 8 hours every week a HAAT employee was doing \
				to update the data. I learned a lot about the importance of creating modularizable and testable code, which saved this project \
				from being a nightmare to maintain. Since then, the project has been up-and-running, requiring almost no maintenance.",
			logo: "/reactfolio/vue.png",
			linkText: "View Project",
			link: "https://github.com/uw-it-aca/handshake-provisioner",
		},

		{
			title: "Scout Techloan",
			description:
				"As a project for my work at UW-IT, I was tasked with finishing the implementation of a feature of our Scout \
				Django application. The feature was to allow users to request a loan of a piece of technology, such as a laptop or \
				a tablet, and reserve it for pickup at a designated office on campus. I was responsible for extracting, transforming, \
				and loading the data from our database to the front-end. To improve the performance of the application, I implemented \
				timestamps to the database and used Django's built-in caching system to reduce the number of queries. I also \
				added lazy loading for the images of the technology items to improve the initial load time of the page, while also \
				improving overall user experience.",
			logo: "/reactfolio/django.png",
			linkText: "View Project",
			link: "https://github.com/uw-it-aca/scout-manager/tree/django-upgrade",
		},

		{
			title: "Barrelfish OS Fork",
			description:
				"This was the most challenging project I've worked on. For a capstone class, myself and three other students were \
				tasked with reimplementing many of the core features of the Barrelfish Operating System. What sets this OS apart from \
				others is its unique approach to user vs kernel space. The OS is designed like a distributed system where most \"services\" \
				are run in user space, and the kernel is responsible for managing the communication between these services and their \
				capabilities. Not to mention, in our fork we were expected to base our system off of the ARM architecture, which I was not \
				familiar with. In this class, I learned the differences in low-level programming between ARM and x86, and how to \
				effectively manage many microservices in a distributed system. I was held to a high standard due to the professor being \
				one of the original developers of Barrelfish, and I'm proud to say that we passed with flying colors.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
			linkText: "View Project",
			link: "https://github.com/David-Strupinski/OS-Capstone",
		},

		{
			title: "UW Mailman 3",
			description:
				"For this project, I worked with UX developers at UW-IT to create a new interface for the Mailman 3 mailing list \
				that was customized for UW's needs, as well as fleshing out accessibility features. I was responsible for researching \
				and implementing all the accessibility (a11y) features for the application. I learned a lot about the importance of \
				accessibility in web applications, and how to implement these features in a way that is both effective and efficient. \
				Django templates with HTML was mainly what I worked with, and while the project was successful, the decision to roll \
				back and try to push our features directly to the official GNU Mailman was made for maintenance reasons.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com/uw-it-aca/uw-mailman3-web/tree/8c378101b07df5ddeef1061112068946dd3c224d",
		},

		{
			title: "Spotify Helper",
			description:
				"This was my first project where I actually had sort of a sense of what I was doing. I created a simple Python \
				script that would run in the background of a Windows machine and would automatically close and restart Spotify \
				whenever an ad would play. This would skip all the ads and move to the next song. I didn't have the premium version, clearly, and it worked incredibly well, but has since \
				broken in new updates.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/David-Strupinski/Spotify-Helper",
		},
	],
};

export default INFO;
