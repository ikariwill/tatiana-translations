import Image from "next/image";
import { useContext } from "react";

import { CommonContext } from "@context/CommonProvider";

export function Whatsapp() {
  const { common } = useContext(CommonContext);

  return (
    <div className="whatsapp">
      <a
        href={"https://api.whatsapp.com/send?phone=5511981065807"}
        target="_blank"
        rel="noreferrer"
      >
        {common?.contactMe}
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
