import { combineReducers } from "redux";
import aeemere from "../assets/aee mere.png";
import mererangme from "../assets/mererangme.png";
import tumkodekha from "../assets/tumkodekha.png";
import tumitnajo from "../assets/tumitnajo.png";

const songListReducer = () => {
  return [
    {
      title: "Tum Ko Dekha To Yeh Khayal Aaya",
      duration: "5:04",
      image: tumkodekha,
    },
    { title: "Ae Mere Humsafar", duration: "3:04", image: aeemere },
    {
      title: "Mere Rang Mein Rangne Wali",
      duration: "1:04",
      image: mererangme,
    },
    {
      title: "Tum Itna Jo Muskura Rahe Ho",
      duration: "2:04",
      image: tumitnajo,
    },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") return action.payload;

  return selectedSong;
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectSongReducer,
});
