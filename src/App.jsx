// Importing specific components from the "components" and "sections" directories.
import { Navbar } from "./components"
import { About, Blogs, Contact, Favourites, Header, Projects, Testimonials, Skills } from "./sections"




const App = () => {
  return (
    <main className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Favourites/>
      <Testimonials/>
      <Blogs/>
      <Contact/>
    </main>
  )
}

export default App