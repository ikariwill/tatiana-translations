export default function Contact() {
  return (
    <div id="contact-lightbox" className="pt-20 pb-50 hide">
      <div className="row">
        <div className="column width-12 left">
          <h2 className="mb-50 sc-t">Contact</h2>
          <div className="contact-form-container no-margin-bottom">
            <form
              className="contact-form"
              action="php/send-email.php"
              method="post"
            >
              <div className="row">
                <div className="column width-12">
                  <input
                    type="text"
                    name="fname"
                    className="form-fname form-element large"
                    placeholder="Nome"
                    required
                  />
                </div>
                <div className="column width-12">
                  <input
                    type="email"
                    name="email"
                    className="form-email form-element large"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="column width-6">
                  <input
                    type="text"
                    name="honeypot"
                    className="form-honeypot form-element large"
                  />
                </div>
              </div>
              <div className="row">
                <div className="column width-12 center">
                  <textarea
                    name="message"
                    className="form-message form-element large"
                    placeholder="Mensagem"
                    required
                  ></textarea>
                  <input
                    type="submit"
                    value="Enviar"
                    className="form-submit button medium text-uppercase bkg-theme bkg-hover-charcoal color-white color-hover-white"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
