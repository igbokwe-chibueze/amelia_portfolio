
const SkeletonBlogs = ({ count, type }) => {
    const classes = `animate-pulse relative ${type}`;
  return (
    Array.from({ length: count }, (_, index) => (
        <div key={index} className={classes}>
            {/* Image */}
            <div className="skeleton w-full h-44 rounded-2xl object-cover wide-desktop:h-80"/>

            {/* Date */}
            <div className="skeleton h-3 w-3/12 mt-4"/>

            {/* Title */}
            <div className="skeleton mt-4 wide-desktop:mt-6 h-5 w-3/4"/>

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

            {/* Badge */}    
            <div className="blog-card-badge bg-gray-300 h-5 w-16"/>

            {/* Border Line */}
            <div className="skeleton border-t-2 w-full my-4"/>

            <div className="flex justify-end items-center w-full">
                {/* Read More */}
                <div className="skeleton h-5 w-16"/>
            </div>
        </div>
    ))
  )
}

export default SkeletonBlogs