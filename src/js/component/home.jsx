import React from "react";
import TitleBar from "./Title.jsx";
// import Input from "./InputField.jsx";
import App from "./Sandbox.jsx";
import taskCard from "./List.jsx";



//create your first component
const Home = () => {
	return (
		<div className="container">
			<TitleBar />
			<App />

		</div>
	);
};

export default Home;
