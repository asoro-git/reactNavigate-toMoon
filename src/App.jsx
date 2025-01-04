import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useNavigate,
	useLocation,
	Navigate,
} from "react-router-dom";
import "./App.css";

function Explore() {
	const navigate = useNavigate();
	return (
		<>
			<h2>Explore Moon!!!</h2>
			<button onClick={() => navigate("/", { state: { from: "Moon" } })}>
				Back to Earth
			</button>
		</>
	);
}

function Counter() {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<p>You have clicked {counter} times.</p>
			{counter >= 9 ? (
				<p>Get ready! We are heading to the Moooon!!!</p>
			) : null}
			<button onClick={() => setCounter((prev) => prev + 1)}>
				Click me!
			</button>
			{counter > 10 ? <Navigate to="./Explore" /> : null}
		</>
	);
}

function Home() {
	const location = useLocation();
	const from = location.state?.from;
	if (!from) {
		return <h1>Welcome to Earth!</h1>;
	}
	return (
		<>
			<h1>Returned from {from} !</h1>
			<Counter />
		</>
	);
}

function App() {
	const [count, setCount] = useState(0);

	return (
		<Router>
			<Link to="/">Home Page</Link>
			{" | "}
			<Link to="./explore">Explore</Link>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />
			</Routes>
		</Router>
	);
}

export default App;
