

const SkeletonGraphicsDesign = ({count}) => {
  return (
    Array.from({ length: count }, (_, index) => (
        <div key={index} 
            className="animate-pulse flex flex-col space-y-4 tablet:w-3/4 h-96 my-6 p-4 rounded-lg bg-white shadow-2xl"
        >
            {/* Title */}
            <div className="skeleton mt-4 wide-desktop:mt-6 h-5 w-3/12"/>

            {/* Image */}
            <div className="skeleton w-full h-full rounded-2xl object-cover wide-desktop:h-80"/>
        </div>
    ))    
  )
}

export default SkeletonGraphicsDesign