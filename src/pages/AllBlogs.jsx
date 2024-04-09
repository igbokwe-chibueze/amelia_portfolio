import { useEffect } from "react";
import { BlogsCard, FetchData, SkeletonBlogs, TransitionEffect } from "../components"


const AllBlogs = () => {

  const { error, isPending, data: blogs } = FetchData('*[_type == "blogs"]')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full min-h-screen px-4 tablet:px-20 pb-8'>
      <h2 className="head-text">
        ALl My Blogs: <span className="text-electric-indigo">Explore What I Offer.</span>
      </h2>

      <div className="mt-14 grid tablet:grid-cols-3 gap-x-12 gap-y-10 items-start">
        { error && <div>{ error }</div> }
        { isPending && (
          <SkeletonBlogs count={6} type={"skeleton-wrapper-allblogs"}/>
        )}
        {blogs && 
          (<BlogsCard blogs={blogs} type={"allblogs-card"} />)
        }
      </div>
      
      <TransitionEffect/>
    </div>
  )
}

export default AllBlogs