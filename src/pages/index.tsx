import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Page() {
  return (
    <>
      <aside
        className="side-navigation-wrapper enter-right"
        data-no-scrollbar
        data-animation="push-in"
      >
        <div className="side-navigation-scroll-pane">
          <div className="side-navigation-inner">
            <div className="side-navigation-header">
              <div className="navigation-hide side-nav-hide">
                <a href="#">
                  <span className="icon-cancel medium"></span>
                </a>
              </div>
            </div>
            <nav className="side-navigation">navegation</nav>
          </div>
        </div>
      </aside>

      <div className="wrapper reveal-side-navigation">
        <div className="wrapper-inner">
          <Header />

          <div className="content clearfix">
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
