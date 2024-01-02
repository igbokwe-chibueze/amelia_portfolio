// Importing specific components from the "components" and "sections" directories.
import { Navbar } from "./components"
import { About, Blogs, Contact, Favourites, Header, Projects, Testimonials, Skills } from "./sections"




const App = () => {
  return (
    <main className="app">
      <Navbar/>
      <About/>
      <Blogs/>
      <Contact/>
      <Favourites/>
      <Header/>
      <Projects/>
      <Testimonials/>
      <Skills/>
    </main>
  )
}

export default App