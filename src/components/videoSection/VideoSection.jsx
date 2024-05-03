import Icon from '../icons/Icon';
const VideoSection = () => {
  return (
    <div className="video mb-[150px]">
      <div className="container mx-auto">
        <div className=" gap-x-5 lg:grid lg:grid-cols-6">
          <div className="  min-h-[300px] bg-no-repeat bg-cover bg-center flex items-center justify-center  lg:col-start-2 lg:col-span-5 bg-[url('src/assets/images/video/video_bg-mob.jpg')]  md:bg-[url('src/assets/images/video/video_bg-tab.jpg')] md:min-h-[420px] lg:bg-[url('src/assets/images/video/video_bg.jpg')] lg:min-h-[600px]">
            <button>
              <Icon id="play" width="100" height="100" className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
