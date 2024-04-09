import { useEffect } from "react";
import { ProjectsCard, FetchData, TransitionEffect, SkeletonProjects } from "../components"


const AllProjects = () => {

    const { error, isPending, data: projects } = FetchData('*[_type == "projects"]')

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='w-full min-h-screen px-4 tablet:px-20 pb-8'>
        <h2 className="head-text">
            ALl My Projects: <span className="text-electric-indigo">Explore What I Offer.</span>
        </h2>

        <div className="mt-14 grid tablet:grid-cols-2 gap-8 items-start">
            { error && <div>{ error }</div> }
            { isPending && (
                <SkeletonProjects count={4} type={'skeleton-wrapper-allprojects'}/>
            )}
            {projects && 
                (<ProjectsCard projects={projects} type={"allprojects-card"}/>)
            }
        </div>

        <TransitionEffect/>
    </div>
  )
}

export default AllProjects