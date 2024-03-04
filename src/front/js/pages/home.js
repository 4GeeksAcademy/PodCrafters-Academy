import React, { useContext } from "react";
import { Context } from "../store/appContext";
import VideoPlayer from "../component/videoHomePage"; // import VideoPlayer
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<header>
			<div
				className="container-fluid"
				style={{
					backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
					height: "400px",
				}}
			>
				<div className="heroText">
					<div className="d-flex justify-content-center align-items-center">
						<div className="text-white mt-3">
							<h1 className="mb-3">Placeholder text</h1>
							<h5 className="mb-4">
								Placeholder text
							</h5>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};