import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./pages/Chat/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./pages/Login/Login";
import Spinner from 'react-spinkit';
function App() {
	const [user, loading] = useAuthState(auth);
	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContent>
					<img src="https://image.flaticon.com/icons/png/512/2111/2111615.png" alt="logo"/>
					<Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
				</AppLoadingContent>
			</AppLoading>
		)
	}
	return (
		<div className="App">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<AppBody>
							<Sidebar />
							<Switch>
								<Route exact path="/">
									<Chat />
								</Route>
							</Switch>
						</AppBody>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;

const AppLoading = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100%;
`;

const AppLoadingContent = styled.div`
	text-align: center;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> img {
		height: 100px;
		padding: 20px;
		margin-bottom: 40px;
	}
`;