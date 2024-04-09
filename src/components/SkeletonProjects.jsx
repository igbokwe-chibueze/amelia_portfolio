const SkeletonProjects = ({ count, type }) => {
  const classes = `animate-pulse ${type}`;
  return (
    Array.from({ length: count }, (_, index) => (
      <div key={index} className={classes}>
        {/* Image */}
        <div className="skeleton project-card-img app-flex"/>

        {/* Body Section */}
        <div className='project-card-content app-flex'>
          {/* Title */}
          <div className="skeleton mt-4 wide-desktop:mt-12 h-5 w-3/4"/>

          {/* Description Section */}
          <div className='h-full w-full mt-4 space-y-3'>
            {
              //Show a certain number of description containers.
              Array.from({ length: 3 }, (_, index) => (
                //Description Containers, last description should be half in lenght not full
                <div key={index} className={`skeleton h-3 ${index === 2 ? 'w-1/2' : 'w-full'}`}/>
              ))
            }
          </div>
          
          {/* Tags Section */}
          <div className='project-card-tags h-full w-full mt-6'>
            {
              //Show a certain number of tags containers.
              Array.from({ length: 3 }, (_, index) => (
                //Tags
                <div key={index} className="skeleton h-5 w-12"/>
              ))
            }
          </div>
        </div>
      </div>
    ))
  );
}
  
export default SkeletonProjects;  