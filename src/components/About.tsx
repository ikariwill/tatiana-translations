import { useContext } from "react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { CommonContext } from "@context/CommonProvider";
import { LocaleContext } from "@context/LocaleProvider";
import { useAbout } from "@graphql/useAbout";
import { IHero } from "@model/types/IHero";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import Contact from "./Contact";

/* eslint-disable @next/next/no-img-element */
export default function About() {
  const { locale } = useContext(LocaleContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: commonData } = useContext(CommonContext);

  const queryClient = useQueryClient();
  const about = useAbout();

  const { data } = useQuery({
    queryKey: ["about", locale],
    queryFn: () => about,
    enabled: !!locale,
  });

  const heroData = queryClient.getQueryData<{ hero: IHero }>(["hero", locale]);

  return (
    <>
      <section id="about" className="section-block replicable-content">
        <div className="row">
          <div className="column width-6 right left-on-mobile">
            <h2
              className="mb-50"
              dangerouslySetInnerHTML={{
                __html: data?.about.title.html as string,
              }}
            ></h2>
            <div className="thumbnail no-margin-bottom">
              <img src="../images/signature.svg" alt="" />
            </div>
            <p className="weight-bold text-uppercase opacity-05 mb-mobile-50">
              <small>{heroData?.hero.description}</small>
            </p>
            <p>
              <button
                onClick={onOpen}
                className="lightbox-link button text-uppercase bkg-theme color-white border-hover-grey-light color-hover-grey no-margin-bottom rounded"
              >
                {commonData?.common.contact}
              </button>
            </p>
          </div>

          <div className="column width-5 offset-1">
            <div
              className="aboutContent"
              dangerouslySetInnerHTML={{
                __html: data?.about.content.html as string,
              }}
            ></div>
          </div>
        </div>
      </section>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Contact />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
