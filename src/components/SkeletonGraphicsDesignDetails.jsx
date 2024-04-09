const SkeletonGraphicsDesignDetails = ({ count }) => {
    return (
        Array.from({ length: count }, (_, index) => (
            <div key={index} className="animate-pulse flex flex-col space-y-4 w-full h-auto my-6 p-4 rounded-lg bg-white shadow-2xl">
                {/* Title */}
                <div className="skeleton h-5 w-3/12"/>

                {/* Description */}
                <div className='h-full w-full mt-4 space-y-3'>
                    {
                        //Show a certain number of description containers.
                        Array.from({ length: 3 }, (_, index) => (
                            //Description Containers, last description should be half in lenght not full
                            <div key={index} className={`skeleton h-3 ${index === 2 ? 'w-1/2' : 'w-full'}`}/>
                        ))
                    }
                </div>

                {/* Main Image */}
                <div className="skeleton w-full h-80 rounded-2xl object-cover"/>

                {/* Additional Images */}
                <div className="hidden tablet:grid tablet:grid-cols-2 tablet:gap-4">
                    {
                        Array.from({ length: 2 }, (_, index) => (
                            <div key={index} className="skeleton w-full h-64 rounded-2xl object-cover"/>
                        ))
                    }
                </div>
            </div>
        ))
    );
};

export default SkeletonGraphicsDesignDetails;