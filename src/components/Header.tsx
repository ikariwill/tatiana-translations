import Link from "next/link";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleProvider";
/* eslint-disable @next/next/no-html-link-for-pages */
import { useHeaderMenu } from "@graphql/useHeaderMenu";
import { useQuery } from "@tanstack/react-query";

import { Languages } from "./Languages";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const { locale } = useContext(LocaleContext);
  const headerMenu = useHeaderMenu();

  const { data } = useQuery({
    queryKey: ["headerMenu", locale],
    queryFn: () => headerMenu,
  });

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
                  <img
                    src="../images/resume/logo-dark.png"
                    alt="Tatiana Logo"
                  />
                </a>
                <a href="/">
                  <img src="../images/resume/logo.png" alt="Tatiana Logo" />
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
                {data?.headerMenus.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.url}>{menu.title}</Link>

                    {(menu.headerSubmenus.length && (
                      <ul className="sub-menu">
                        {menu.headerSubmenus.map((subMenu) => (
                          <li key={subMenu.id}>
                            <Link href={subMenu.url}>{subMenu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )) ||
                      null}
                  </li>
                ))}

                <li>
                  <Languages />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
