import {
  PauseOutlined,
  FastBackwardOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";


export default function Controls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: any) {
  const { isLooping, setIsLooping, trackIndex, playlist }: any = {};

  return (
    <div className={`flex justify-between items-center gap-x-7  mb-3 `} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div className={` flex justify-center items-center h-8 w-8`}>
        <FastBackwardOutlined
          className={`h-6 w-6 ${
            // eslint-disable-next-line eqeqeq
            trackIndex == 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        />
      </div>
      {isPlaying ? (
        <PauseOutlined className={` h-10 w-10 cursor-pointer`} />
      ) : (
        <>
          <PlayCircleOutlined className={` h-10 w-10 cursor-pointer`} />
        </>
      )}
      <div className={` flex justify-center items-center h-8 w-8`}>
        <PlayCircleOutlined
          className={`h-6 w-6 cursor-pointer ${
            // eslint-disable-next-line eqeqeq
            trackIndex == playlist?.length - 1
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
        />
      </div>{" "}
      <div className={` flex justify-center items-center h-8 w-8`}>
        <PlayCircleOutlined
          className={`cursor-pointer h-5 w-5  ${
            isLooping ? "text-[#c273ed]" : ""
          }`}
        />
      </div>
    </div>
  );
}
