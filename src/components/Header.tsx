/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  return (
    <header
      className="header header-fixed header-fixed-on-mobile header-transparent"
      data-bkg-threshold="100"
    >
      <div className="header-inner">
        <div className="row nav-bar">
          <div className="column width-12 nav-bar-inner">
            <div className="logo">
              <div className="logo-inner">
                <a href="/">
                  <img src="../images/resume/logo-dark.png" alt="Sartre Logo" />
                </a>
                <a href="/">
                  <img src="../images/resume/logo.png" alt="Sartre Logo" />
                </a>
              </div>
            </div>
            <nav className="navigation nav-block secondary-navigation nav-right">
              <ul>
                <li>
                  <div className="v-align-middle">
                    <a
                      data-content="inline"
                      data-toolbar=""
                      data-modal-mode
                      data-modal-width="500"
                      href="#contact-lightbox"
                      className="lightbox-link button small pull-right no-margin-bottom icon-mail"
                    ></a>
                  </div>
                </li>
                <li className="aux-navigation hide">
                  <a
                    href="#"
                    className="navigation-show side-nav-show nav-icon"
                  >
                    <span className="icon-menu"></span>
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="navigation nav-block primary-navigation nav-right">
              <ul>
                <li className="current">
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <a href="./">Services</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="translation.html">Translation</a>
                    </li>
                    <li>
                      <a href="editing.html"> Proofreading & Editing</a>
                    </li>
                    <li>
                      <a href="mtpe.html">MTPE</a>
                    </li>
                    <li>
                      <a href="pharmacy.html">Pharmaceutical Translation</a>
                    </li>
                  </ul>
                </li>
                <li className="contains-mega-sub-menu">
                  <a href="confidentiality.html">Confidentiality</a>
                </li>
                <li>
                  <a
                    style={{
                      width: "30px",
                      display: "inline-block",
                      marginRight: "-16px",
                    }}
                    href="#"
                  >
                    <img
                      alt="portuguese"
                      style={{ width: "30px", display: "inline-block" }}
                      src="../images/pt.png"
                    />
                  </a>
                  <a
                    style={{
                      width: "30px",
                      display: "inline-block",
                      marginRight: "-16px",
                    }}
                    href="#"
                  >
                    <img
                      alt="english"
                      style={{ width: "30px", display: "inline-block" }}
                      src="../images/en.png"
                    />
                  </a>
                  <a
                    style={{
                      width: "30px",
                      display: "inline-block",
                      marginRight: "-16px",
                    }}
                    href="#"
                  >
                    <img
                      alt="spanish"
                      style={{ width: "30px", display: "inline-block" }}
                      src="../images/es.png"
                    />
                  </a>
                  <a
                    style={{
                      width: "30px",
                      display: "inline-block",
                      marginRight: "-16px",
                    }}
                    href="#"
                  >
                    <img
                      alt="french"
                      style={{ width: "30px", display: "inline-block" }}
                      src="../images/fr.png"
                    />
                  </a>
                  <a
                    style={{
                      width: "30px",
                      display: "inline-block",
                      marginRight: "-16px",
                    }}
                    href="#"
                  >
                    <img
                      alt="german"
                      style={{ width: "30px", display: "inline-block" }}
                      src="../images/de.png"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
