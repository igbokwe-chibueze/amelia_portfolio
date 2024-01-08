import { images } from '../constants';

const Header = () => {
  return (
    <section id='header' className="w-full min-h-screen px-2 pt-16">
      <div className="bg-midnight-green rounded-lg">
        <div className="bg-caribbean-current text-tea-green rounded-t-lg p-4">
          <div className="parallax">
            <div className="scroller">
              <span className="flex overflow-hidden tracking-tight leading-none whitespace-nowrap flex-nowrap">
                UI/UX DESIGNER + GRAPHICS DESIGNER + PROJECT MANAGER
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mx-4">
          {/* First Column */}
          <div className="md:col-span-1 mb-4 md:mb-0">
            <div className="p-4 bg-tea-green rounded-2xl flex flex-row w-full shadow-md text-5xl items-center">
              <span>👋🏿</span>
              <div className="ml-5">
                <p className="text-sm text-left text-gray-500 leading-6">Greetings! I am</p>
                <h1 className="text-2xl font-extrabold text-center text-black capitalize">Amelia</h1>
              </div>
            </div>

            <div className="p-4 bg-tea-green rounded-2xl flex flex-row w-full shadow-md items-center">
              <p className="text-sm text-left text-gray-500 leading-6 w-full uppercase">
                Graphics designer and a UI/UX designer
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="md:col-span-1">
            <div className="flex justify-center items-center">
              <img
                src={images.profile}
                alt="fallback_image"
                width={360}
                height={360}
                className="object-contain z-10 -mt-14 p-0"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="tablet:col-span-1">
            <div className='flex tablet:flex-col tablet:space-y-12'>
              {/* First Circle */}
              <div className="w-24 h-24 -ml-14 hearder-icon-circles">
                <img src={images.flutter} alt="Flutter" className="object-cover w-full h-full" />
              </div>

              {/* Second Circle */}
              <div className="w-28 h-28 ml-10 hearder-icon-circles">
                <img src={images.redux} alt="Redux" className="object-cover w-full h-full" />
              </div>

              {/* Third Circle */}
              <div className="w-14 h-14 -ml-8 hearder-icon-circles">
                <img src={images.sass} alt="Sass" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button
            type="button"
            className="bg-chartreuse-color p-2 rounded-full w-80  h-16 z-20 -mt-12 -rotate-12"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
