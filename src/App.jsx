import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas, SideBar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relativ z-0 bg-primary">
        <div className="grid grid-cols-[60px_1fr]">
          <SideBar />
          <div>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Tech />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
