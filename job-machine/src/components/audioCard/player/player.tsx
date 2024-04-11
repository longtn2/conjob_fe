import { useRef } from "react";
import AudiControls from "../../common/BaseAudio";
import "./styles.css";

const PlayerContainer = () => {
  // State
  const {
    playlist,
    audioRef,
    isPlaying,
    setIsPlaying,
    trackIndex,
    setTrackIndex,
    timeEnd,
    setTimeEnd,
    artist,
    name,
    image,
    setIsLooping,
    handlePlayNavigateSong,
    trackProgress,
    setTimeRunning,
    setTrackProgress,
    timeRunning,
  }: any = {};
  // Refs

  const intervalRef = useRef();
  const isReady = useRef(false);
  const timeFormat = (second: any) => {
    // Check if 'second' is a number and is not NaN (Not-a-Number)
    if (typeof second === "number" && !isNaN(second)) {
      return new Date(second * 1000).toISOString().slice(14, 19);
    } else {
      // Return a default value or handle the error as appropriate
      return "00:00";
    }
  };
  const { duration } = audioRef?.current || 0;
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current); // @ts-ignore: Object is possibly 'null'.
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false);
        audioRef.current.pause();
        handlePlayNavigateSong(1);
      } else {
        setTimeRunning(Math.round(audioRef.current.currentTime));
        setTrackProgress(audioRef.current.currentTime);
      }
      // @ts-ignore: Object is possibly 'null'.
    }, [1000]);
  };
  const onScrub = (value: any) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTimeRunning(Math.round(audioRef.current.currentTime));
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };
  const handleMouseEnter = (e: any) => {
    const style = document.getElementById("thumbPlayerStyle");
  };
  const playlisttyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(70%, #eb4034), color-stop(30%, #fff))
  `;
  return (
    <div
      className={`player w-3/4 min-w-[300px] mr-auto audio`}
      style={{ backgroundColor: "#ccc", color: "white" }}
    >
      <>
        <div className="flex w-full justify-center items-center">
          <span className={`text-xs `}>{timeFormat(timeRunning)}</span>
          <input
            type="range"
            value={300}
            step="1"
            min="0"
            max={500}
            className="progress mx-2.5"
            // onChange={(e) => onScrub(e.target.value)}
            // onMouseEnter={handleMouseEnter}
            // onMouseUp={onScrubEnd}
            // onKeyUp={onScrubEnd}
            style={{ background: playlisttyling }}
          />
          <span className={`text-xs `}>{timeFormat(timeEnd)}</span>
        </div>
        <AudiControls
          isPlaying={isPlaying}
          onPrevClick={() => {
            handlePlayNavigateSong(-1);
          }}
          onNextClick={() => {
            handlePlayNavigateSong(1);
          }}
          onPlayPauseClick={() => {
            setIsPlaying((preState: any) => !preState);
          }}
        />
      </>
    </div>
  );
};

export default PlayerContainer;
