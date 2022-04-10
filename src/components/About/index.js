import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
	return (
		<MDBContainer className="mt-5">
			<MDBRow>
				<MDBCol md="12">
					<h2>About Me</h2>
					<hr class="solid bg-dark" />
					<img
						style={{ height: "285px" }}
						src="https://avatars0.githubusercontent.com/u/64516562?s=460&u=2778809b5be3b0ba187454d6c12564c0e67c369b&v=4"
						class="float-left pr-4 pb-3 img-fluid"
						alt="Collin Hodgson"
					/>
					<p style={{ fontSize: "27px" }}>
						Hello, my name is Mbongeni Allan Ngwenya. I am a training Full-Stack Javascript developer with cloud experience.
						Learning about new technology and training to improve my skilset is something that I enjoy and
						take pride in doing. My tenacious drive and curiosity has recently lead me to embark on the
						journey of becoming a Full-Stack Javascript developer.
					</p>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
export default AboutMe;