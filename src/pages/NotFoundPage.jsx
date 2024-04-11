import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../constants/icons';

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center px-2 tablet:px-0">
        <h1 className="text-6xl font-bold text-midnight-green mb-4">404</h1>
        <p className="text-xl text-caribbean-current mb-2">Oops! Looks like you&apos;r lost.</p>
        <p className="text-xl text-caribbean-current mb-4">The page you are looking for does not exist.</p>
        <div className='flex flex-col justify-center items-center space-y-1'>
            <a href="#" onClick={() => window.history.back()} 
                className="z-20 text-caribbean-current py-2 px-4 rounded hover:underline"
            >
                <p>Go Back</p>
            </a>
            <Link
                to={'/'}
                className='z-20 flex justify-center items-center w-fit border gap-2 group px-4 py-2
                text-lg tablet:text-2xl font-bold leading-none rounded-full 
                bg-chartreuse-color hover:bg-[#6BC800] text-midnight-green border-midnight-green'
            >
                <p>Go Home</p>
                <ArrowRightIcon
                className="w-[50px] h-[30px] text-chartreuse-color fill-midnight-green"
                />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
