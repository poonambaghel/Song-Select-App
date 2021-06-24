import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song!</div>;
  }

  return (
    <div>
      <h3>Now Playing: </h3>
      <p>
        <img style={{ width: 200, height: 100 }} alt="img" src={song.image} />
        <br />
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
