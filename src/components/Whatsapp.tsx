import Image from "next/image";

export function Whatsapp() {
  return (
    <div className="whatsapp">
      <a
        href={"https://api.whatsapp.com/send?phone=5511981065807"}
        target="_blank"
        rel="noreferrer"
      >
        Entrar em contato
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
