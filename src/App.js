import logo from "./logo.svg";
import "./App.css";
import Welcome, { Welcome2, Welcome3, Button } from "./welcome";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Ini sangat merepresentasikan saya sebagai seorang programmer
				</p>
				<Welcome children="Selamat Datang 1" />
				<Welcome2 children="Selamat Datang 2" />
				<Welcome3> Selamat Datang 3 </Welcome3>
        <Button>Klik Gueh</Button>
			</header>
		</div>
	);
}

export default App;
