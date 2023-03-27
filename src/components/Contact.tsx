import { useContext, useState } from "react";

import { CommonContext } from "@context/CommonProvider";

export default function Contact() {
  const { data } = useContext(CommonContext);
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = "Contato Site Tatiana";
  const toEmail = "tatiher.translator@hotmail.com";

  return (
    <div className="row">
      <div className="column width-12 left">
        <h2 className="mb-50 sc-t">{data?.common.contact}</h2>
        <div className="contact-form-container no-margin-bottom">
          <div className="row">
            <div className="column width-12">
              <input
                onChange={(event) => setName(event.target.value)}
                type="text"
                name="fname"
                className="form-fname form-element large"
                placeholder={data?.common.name}
                required
              />
            </div>
            <div className="column width-12">
              <input
                onChange={(event) => setFromEmail(event.target.value)}
                type="email"
                name="email"
                className="form-email form-element large"
                placeholder={data?.common.email}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="column width-12 center">
              <textarea
                onChange={(event) => setMessage(event.target.value)}
                name="message"
                className="form-message form-element large"
                placeholder={data?.common.message}
                required
              ></textarea>
              <a
                href={`mailto:${toEmail}?subject=${subject}&body=contato: ${name} - ${fromEmail} | ${message}`}
                className="form-submit button medium text-uppercase bkg-theme bkg-hover-charcoal color-white color-hover-white"
              >
                {data?.common.send}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
