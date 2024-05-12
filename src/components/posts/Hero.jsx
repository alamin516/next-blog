
import PostSlider from "./PostSlider";

const Hero = ({data}) => {


  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-start">
        <div className="w-full md:w-8/12 sm:w-full px-2 mb-4">
          <PostSlider data={data['slider']}/>
        </div>
        <div className="w-full md:w-4/12 sm:w-1/2 px-2">
        <PostSlider data={data['featured']}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
