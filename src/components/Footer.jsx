import "../styles/footer.scss";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer_wrapper footer bg-neutral pt-4">
      <div className="container text-center py-4">
        <div className="row">
          <div className="col-sx-12 col-sm-12 col-md-6 col-lg-4 text-start">
            <h6 className="my-3">
              <Image
                src="/assets/footerlogo.png"
                width="149"
                height="48"
                alt="linkedin logo"
              />
            </h6>
            <ul>
              <li>13-110, Kanha Shanti Vanam</li>
              <li>Kanha Village, Ranga Reddy District,</li>
              <li>Nandigama Mandal,</li>
              <li>Telangana 509328</li>
            </ul>
            <div className="button-wr mt-3">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-3 mb-md-0">
                  <a
                    href="https://play.google.com/store/apps/details?id=org.heartfulness.heartintune.prod"
                    target="_blank"
                  >
                    <Image
                      src="/assets/gplay.png"
                      width="140"
                      height="41"
                      alt="GPLAY"
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <a
                    href="https://apps.apple.com/ph/app/heart-in-tune/id1576857513"
                    target="_blank"
                  >
                    <Image
                      src="/assets/ios-app.png"
                      width="140"
                      height="41"
                      alt="IOS-APP"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sx-12 col-sm-12 col-md-6 col-lg-3 text-start">
            <h6 className="my-3">Social</h6>
            <ul>
              <li className="d-flex">
                <Image
                  src="/assets/linkedin.png"
                  width="20"
                  height="20"
                  alt="linkedin logo"
                />
                <span className="mx-2"> LinkedIn</span>
              </li>
              <li>
                <Image
                  src="/assets/facebook.png"
                  width="20"
                  height="20"
                  alt="linkedin logo"
                />
                <span className="mx-2">Facebook</span>
              </li>
              <li>
                <Image
                  src="/assets/instagram.png"
                  width="20"
                  height="20"
                  alt="linkedin logo"
                />
                <span className="mx-2">Instagram</span>
              </li>
              <li>
                <Image
                  src="/assets/twitter.png"
                  width="20"
                  height="20"
                  alt="linkedin logo"
                />
                <span className="mx-2">Twitter</span>
              </li>
              <li>
                <Image
                  src="/assets/whatsapp.png"
                  width="20"
                  height="20"
                  alt="linkedin logo"
                />
                <span className="mx-2">Whatsapp</span>
              </li>
            </ul>
          </div>
          <div className="col-sx-12 col-sm-12 col-md-6 col-lg-2 text-start">
            <h6 className="my-3">Usefull links</h6>
            <ul>
              <li>About us</li>
              <li>Trainers</li>
              <li>Daaji</li>
              <li>Daily Thought</li>
            </ul>
          </div>
          <div className="col-sx-12 col-sm-12 col-md-6 col-lg-3 text-start">
            <h6 className="my-3">Insights</h6>
            <ul>
              <li>Humans of Heartfulness</li>
              <li>Heartfulness Initiatives</li>
              <li>Heartfulness Magazine</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-wr py-3">
        <div className="container text-center">
          <div className="row">
            <div className="col-sx-12 col-sm-12 col-md-6 col-lg-6 text-start">
              <span className="">&copy;</span>
              <span>
                {new Date().getFullYear()} Heartfulness. All rights reserved.
              </span>
            </div>
            <div className="col-sx-12 col-sm-12 col-md-6 col-lg-6 text-end">
              <a target="_blank" href="https://heartfulness.org/in/terms/">
                Terms of Use
              </a>
              <a
                target="_blank"
                href="https://heartfulness.org/in/privacy-policy/"
              >
                Privacy Policy
              </a>
              <Image
                src="/assets/message.svg"
                width="140"
                height="41"
                alt="GPLAY"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
