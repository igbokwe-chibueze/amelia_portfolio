import { useEffect } from "react";
import { AllGraphicsDesignCard, FetchData, SkeletonGraphicsDesign, TransitionEffect } from "../components"


const AllGraphicsDesigns = () => {
  const { error, isPending, data: graphicsDesigns } = FetchData('*[_type == "graphicsDesigns"]')  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full min-h-screen px-4 tablet:px-20 pb-8'>
      <h2 className="head-text">
        ALl My Graphics Design: <span className="text-electric-indigo">Explore What I Offer.</span>
      </h2>

      <div className="flex flex-col justify-center items-center tablet:px-16">
        { error && <div>{ error }</div> }
        { isPending && (
          <SkeletonGraphicsDesign count={2}/>
        )}
        {graphicsDesigns && 
          (<AllGraphicsDesignCard graphicsDesigns={graphicsDesigns}/>)
        }
      </div>
      
      <TransitionEffect/>
    </div>
  )
}

export default AllGraphicsDesigns