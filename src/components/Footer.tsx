/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="row flex">
          <div className="column width-6 offset-3 center">
            <div className="widget">
              <h4 className="widget-title">Tatiana Hernandez - 2023</h4>
              <p>
                <Link href="/impressum">Impressum</Link> |
                <Link href="/data_privacy"> Data Privacy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <div className="column width-12 center">
            <p className="copyright">
              © Tatiana Hernandez. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
