import './App.css';
import {React, useState} from "react";
import NavBar from "./components/navbar/navbar.jsx";
import GameList from "./components/GameListShowcase/gameList.jsx";
import GameContent from "./components/GameContent/gameContent.jsx";
import {games} from "./components/GameData.jsx";
function App() {
	const [game, setGame] = useState(games.lostTrooper);
	const [imgIndex, setImgIndex] = useState(0)
	var imgUseState = {
		imgIndex : imgIndex,
		setImgIndex : setImgIndex
	}
	return (
		<div className="App">
			<GameList setImgIndex={setImgIndex} setGame={setGame}/>
			<div className='RightContentContainer'>
				<NavBar/>
				<GameContent imgUseState={imgUseState} game={game}></GameContent>
			</div>
		</div>
	);
}

export default App;
