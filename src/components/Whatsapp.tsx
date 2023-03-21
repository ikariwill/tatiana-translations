import Image from "next/image";
import { useContext } from "react";

import { CommonContext } from "@context/CommonProvider";

export function Whatsapp() {
  const { data } = useContext(CommonContext);

  return (
    <div className="whatsapp">
      <a
        href={"https://api.whatsapp.com/send?phone=491637827586"}
        target="_blank"
        rel="noreferrer"
      >
        {data?.common.contactMe}
        <Image
          alt="Whatsapp logo"
          width={20}
          height={20}
          src="/whatsapp-logo.svg"
        />
      </a>
    </div>
  );
}
