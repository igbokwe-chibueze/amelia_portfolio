/**
 * Higher-order component (HOC) function 'AppWrap'.
 * This HOC wraps a given component with additional layout and styling elements, such as navigation dots and social media icons.
 *
 * @param {Component} Component - The component to be wrapped.
 * @param {string} idName - The identifier for the wrapper's 'id' attribute.
 * @param {string} classNames - Additional class names to be applied to the wrapper.
 * @returns {function} HOC - The higher-order component returned by 'AppWrap'.
 */

// Import 'NavigationDots' and 'SocialMedia' components from '../components'
import { NavigationDots, SocialMedia } from '../components';

// Define the 'AppWrap' higher-order component (HOC) function
const AppWrap = (Component, idName, classNames) => function HOC() {
  // The HOC function returns JSX elements with layout and additional elements
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      {/* Render the 'SocialMedia' component to display social media icons */}
      <SocialMedia />

      {/* Create a wrapper div with 'app__wrapper' and 'app__flex' class names */}
      <div className="app__wrapper app__flex">

        {/* Render the wrapped component (passed as 'Component' argument) */}
        <Component />

        {/* Render the 'copyright' section */}
        <div className="copyright">
          <p className="p-text">@2020 MICHAEL</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>

      {/* Render the 'NavigationDots' component to display navigation dots */}
      <NavigationDots active={idName} />
    </div>
  );
};

// Export the 'AppWrap' higher-order component (HOC)
export default AppWrap;
