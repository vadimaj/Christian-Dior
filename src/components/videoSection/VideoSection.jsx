import Icon from '../icons/Icon';
const VideoSection = () => {
  return (
    <div className="video mb-[150px]">
      <div className="container mx-auto ">
        <div className="video__box  max-w-[997px] ml-auto min-h-[600px] bg-[url('src/assets/images/video/video_bg.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center  ">
          <button>
            <Icon id="play" width="100" height="100" className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
