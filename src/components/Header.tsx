import Link from "next/link";
import { useContext } from "react";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { CommonContext } from "@context/CommonProvider";
import { LocaleContext } from "@context/LocaleProvider";

import Contact from "./Contact";
/* eslint-disable @next/next/no-html-link-for-pages */
import { Languages } from "./Languages";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const { data } = useContext(CommonContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Link href="/">
                  <img
                    src="../images/resume/logo-dark.png"
                    alt="Tatiana Logo"
                  />
                </Link>
                <Link href="/">
                  <img src="../images/resume/logo.png" alt="Tatiana Logo" />
                </Link>
              </div>
            </div>
            <nav className="navigation nav-block secondary-navigation nav-right">
              <ul>
                <li>
                  <div className="v-align-middle">
                    <button
                      onClick={onOpen}
                      className="button small pull-right no-margin-bottom icon-mail"
                    ></button>
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

      <Modal isCentered isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Contact />
          </ModalBody>
        </ModalContent>
      </Modal>
    </header>
  );
}
