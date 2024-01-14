// Importing necessary components and features from the React and React Router libraries.
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// Importing specific components from the "components" and "sections" directories.
import { Navbar } from "./components"
import { About, Blogs, Contact, Favourites, Header, Projects, Testimonials, Skills } from "./sections"




const App = () => {
  return (
    <main className="app">
      <Router>
        <Routes>
          {/* Route the handles sections. */}
          <Route
            path="/"
            element={
              <div>
                <Navbar/>
                <section>
                  <Header/>
                  <About/>
                  <Projects/>
                  <Skills/>
                  <Favourites/>
                  <Testimonials/>
                  <Blogs/>
                  <Contact/>
                </section>
              </div>
            }
          />
          {/* Route the handles pages. */}
          <Route
            path='/*'
            element={
              <div>
                {/* <Home />
                <AnimatedRoutes/>
                <Footer /> */}
              </div>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App