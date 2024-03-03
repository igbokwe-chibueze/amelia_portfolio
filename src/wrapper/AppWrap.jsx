import { NavigationDots, SocialMedia } from '../components';


// Define the 'AppWrap' higher-order component (HOC) function
const AppWrap = (Component, idName, classNames) => function HOC() {
  // The HOC function returns JSX elements with layout and additional elements
  return (
    <div id={idName} className={`app-container ${classNames}`}>
      {/* Render the 'SocialMedia' component to display social media icons */}
      <div className='hidden tablet:flex z-10'>
        <SocialMedia />
      </div>

      {/* Create a wrapper div with 'app__wrapper' and 'app__flex' class names */}
      <div className="app-wrapper app-flex">

        {/* Render the wrapped component (passed as 'Component' argument) */}
        <Component />

        {/* Render the 'copyright' section */}
        {/* <div className="hidden tablet:flex copyright">
          <p>@2024 AMELIA</p>
          <p>All rights reserved</p>
        </div> */}
      </div>

      {/* Render the 'NavigationDots' component to display navigation dots */}
      <div className='hidden tablet:flex z-10'>
        <NavigationDots />
        {/* <NavigationDots active={idName} /> */}
      </div>
      
    </div>
  );
};

// Export the 'AppWrap' higher-order component (HOC)
export default AppWrap;
