import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

export default class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//STAYS
  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

//STAYS BUT METHOD SHOWS UP IN CONNECT FUNCTION
  handleSubmit(evt) {

    evt.preventDefault();
    // const playlistId = this.props.id;
    const playlistId = this.props.selectedPlaylist.id;
    const songId = this.state.songId;

    this.props.formSubmit(playlistId, songId);


    // store.dispatch(addSongToPlaylist(playlistId, songId))
    //   .catch(() => this.setState({ error: true }));

  }


  render() {

    const songs = this.props.songs;
    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}
