import React from 'react';
import Songs from './Songs';
import store from '../store';


// const DUMMY_GENRE_NAME = 'Jazz';
// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};

export default function Station (props) {
  return (
    <div>
      <h3>{ props.genreName } Station</h3>
      <Songs 
        songs={props.songs} 
        currentSong={props.currentSong} 
        isPlaying={props.isPlaying} 
        // toggleOne={DUMMY_TOGGLE_ONE}
      />
    </div>
  );
}
