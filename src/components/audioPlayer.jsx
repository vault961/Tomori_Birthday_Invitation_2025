import React, { useEffect, useRef, useState } from "react";
import Song from "../assets/song.mp3";
import PlayIcon from "../assets/play.png";
import PauseIcon from "../assets/pause.png";
import "./AudioPlayer.css"; // 애니메이션용 CSS 분리

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [status, setStatus] = useState("stopped"); // 'playing', 'paused', 'stopped'

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = 0.7;
        audioRef.current.play().then(() => {
          setStatus("playing");
        }).catch(() => {
          audioRef.current.muted = true;
          audioRef.current.play().then(() => setStatus("playing"));
        });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setStatus("playing");
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setStatus("paused");
    }
  };

  return (
    <div style={{ position: "fixed", top: 20, right: 20, zIndex: 3000, textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        {status !== "playing" ? (
          <img src={PlayIcon} alt="play" width={36} onClick={handlePlay} style={{ cursor: "pointer" }} />
        ) : (
          <img src={PauseIcon} alt="pause" width={36} onClick={handlePause} style={{ cursor: "pointer" }} />
        )}
      </div>
      <audio ref={audioRef} loop>
        <source src={Song} />
      </audio>
    </div>
  );
};

export default AudioPlayer;