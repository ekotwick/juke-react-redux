import { connect } from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function(songsArray) {
	//taking an array
	// for each item: pulling off the genre 
	// making an object from that 
	const stationsObj = {};
	songsArray.forEach(song => {
		stationsObj[song.genre] ? stationsObj[song.genre].push(song) : stationsObj[song.genre] = [song];
	});
	return stationsObj;
};

const mapStateToProps = function(state){
	return {
		stations: convertSongsToStations(state.songs)
	};
};

const mapDispatchToProps = function(dispath){
	return {};
};

export const StationsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Stations);


