import { images } from "../constants"


const Header = () => {
  return (
    <section
      id='header'
      className="w-full h-screen px-2 pt-16"
    >
      <div className="bg-midnight-green rounded-lg">
        <div className="bg-caribbean-current text-tea-green rounded-t-lg p-4">
          <div className="parallax">
            <div className=" scroller">
              {/* Remeber to add leading-3 */}
              <span className="flex overflow-hidden tracking-tight leading-none whitespace-nowrap flex-nowrap">
                UI/UX DESIGNER + GRAPHICS DESIGNER + PROJECT MANAGER
              </span>
            </div>
          </div>
        </div>
        {/* Body */}
        <div className="grid grid-flow-col justify-stretch mt-4 mx-4">
          <div className=" laptop:flex flex-col justify-start items-start">
            <div className="p-4 bg-tea-green rounded-2xl flex-row w-auto shadow-md text-5xl flex justify-center items-center"> {/* Flexbox container for the badge */}
              <span>👋🏿</span> {/* Wave emoji */}
              <div className="ml-5"> {/* Styling for the text */}
                <p className="text-sm text-left text-gray-500 leading-6">Greetings! I am</p> {/* Paragraph text */}
                <h1 className="text-2xl font-extrabold text-center text-black capitalize">Micael</h1> {/* Heading text */}
              </div>
            </div>

            <div className="p-4 bg-tea-green rounded-2xl flex-row w-auto shadow-md flex justify-center items-center"> {/* Flexbox container for the tags */}
              <p className="text-sm text-left text-gray-500 leading-6 w-full uppercase">
                Graphics designer and a ui/ux designer
              </p> {/* Paragraph text for the first tag */}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img 
              src={images.profile}
              alt="fallback_image"
              width={380}
              height={380}
              className="object-contain z-10 -mt-14 p-0" 
            />
          </div>

          <div className=" laptop:flex flex-col justify-start items-center">
            <div className="p-4 bg-white rounded-2xl flex-row w-auto shadow-md text-5xl flex justify-center items-center"> {/* Flexbox container for the badge */}
              <span>👋🏿</span> {/* Wave emoji */}
              <div className="ml-5"> {/* Styling for the text */}
                <p className="text-sm text-left text-gray-500 leading-6">Greetings! I am</p> {/* Paragraph text */}
                <h1 className="text-2xl font-extrabold text-center text-black capitalize">Micael</h1> {/* Heading text */}
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl flex-row w-auto shadow-md mt-3  flex justify-center items-center"> {/* Flexbox container for the tags */}
              <p className="text-sm text-left text-gray-500 leading-6 w-full uppercase">Graphics designer and a ui/ux designer</p> {/* Paragraph text for the first tag */}
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center">
        <button type="button" className="bg-chartreuse-color p-2 rounded-full w-80 h-16 z-20 -mt-12 -rotate-12">
          Download CV
        </button>
      </div>

    </section>
  )
}

export default Header