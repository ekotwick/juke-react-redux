import { connect } from 'react-redux';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import AddSongContainer from './AddSongContainer';

const mapStateToProps = (state, ownProps) => {
	return { 
		songs: state.songs,
		selectedPlaylist: state.playlists.selected
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		formSubmit (playlistId, songId) {
			dispatch(addSongToPlaylist(playlistId, songId));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddSongContainer);