import React from 'react';
import { Link } from 'react-router';
import store from '../store';

export default function Stations (props) {

  const array = [];
  const songNames = props.stations;

  (songNames => {
    for (var key in songNames) {
      array.push(key);
    }
  })(songNames);

	return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        array.map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={'fill/me/in/later'}>{station}</Link>
            </div>
          );
        })
      }
      </div>
    </div>		
	);

}