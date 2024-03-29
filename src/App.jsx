// Importing necessary components and features from the React and React Router libraries.
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// Importing specific components from the "components" and "sections" directories.
import { Navbar, BackToTop, FollowPointer } from "./components"
import { Services, Blogs, Contact, GraphicsDesigns, Header, Projects, Testimonials, Skills } from "./sections"




const App = () => {
  return (
    <main className="app">
      <div className="hidden laptop:flex">
        <FollowPointer/>
      </div>
      <Router>
        <Routes>
          {/* Route the handles sections. */}
          <Route
            path="/"
            element={
              <div>
                <Navbar/>
                <BackToTop/>
                <section>
                  <Header/>
                  <Services/>
                  <Projects/>
                  <Skills/>
                  <GraphicsDesigns/>
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