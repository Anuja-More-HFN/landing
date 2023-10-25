import Image from "next/image";
import Link from "next/link";
import "../styles/contactblock.scss";

function ContactBlock() {
  return (
    <div className="contact-block mt-3 p-3">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center mb-3">
          <Image
            src="/assets/call.svg"
            width={74}
            height={74}
            alt="phone icon"
            className="image_size_icons"
          />
          <span className="mx-4 text-styles-contact">
            <Link href="tel:+91 99582 90248">+91 99582 90248</Link>
          </span>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
          <Image
            src="/assets/email.svg"
            width={74}
            height={74}
            alt="email icon"
            className="image_size_icons"
          />
          <span className="mx-4 text-styles-contact">
            <Link href="mailto:Pune@heartfulness.org">
              Pune@heartfulness.org
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactBlock;
