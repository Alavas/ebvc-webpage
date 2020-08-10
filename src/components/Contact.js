import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
	return (
		<div
			id="content"
			className="contact"
			style={{ height: 'calc(100vh - 100px - 2.5rem)' }}
		>
			<div>
				<h1>Contact Me!</h1>
				<p>Hi I'm Justin.</p>
				<p> Let me help you with your next project.</p>
				<ul
					style={{ listStyle: 'none', padding: '10px' }}
					className="contact-list"
				>
					<li>
						<SocialIcon
							url="mailto:justin@justinsavala.com"
							network="email"
						/>{' '}
						Send me an Email &#128512;
					</li>
					<li>
						<SocialIcon
							url="https://github.com/alavas/"
							bgColor="black"
						/>{' '}
						Check out my GitHub &#128295;
					</li>
					<li>
						<SocialIcon url="https://www.linkedin.com/in/justin-savala/" />{' '}
						Have a look at my LinkedIn &#128373;
					</li>
					<li>
						<SocialIcon url="https://www.youtube.com/user/JSSavala" /> A
						few random YouTube videos &#127871;
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Contact
