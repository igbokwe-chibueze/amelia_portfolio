import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AllBlogs, AllGraphicsDesigns, AllProjects } from "../pages";
import GraphicsDesignDetails from "./GraphicsDesignDetails";
import { Contact } from "../sections";

const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path='/blogs' element={<AllBlogs />} />
        <Route path='/projects' element={<AllProjects />} />
        <Route path='/graphicsDesigns' element={<AllGraphicsDesigns />} />
        <Route path='/graphicsDesignDetails/:id/:title' element={<GraphicsDesignDetails />} />
        
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes