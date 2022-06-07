import React from "react";
import { songsdata } from "../../demoData/audios";
import { useRef, useState, useEffect } from "react";
import Player from "../player/Player";

function BottomMusicCard() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <>
      <Player
        songs={songs}
        setSongs={setSongs}
        isplaying={isplaying}
        setisplaying={setisplaying}
        audioElem={audioElem}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
    </>
  );
}

export default BottomMusicCard;
