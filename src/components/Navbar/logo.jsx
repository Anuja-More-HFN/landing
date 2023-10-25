"use client";

import Image from "next/image";

function Logo() {
  return (
    <div className="d-flex align-items-center">
      <Image
        className="cursor-pointer image_height mt-2"
        src="/assets/logo.svg"
        height="80"
        width="200"
        quality={100}
        alt="heartfullness Logo"
      />
      <Image
        className="cursor-pointer mobile-logo image_height mt-2"
        src="/assets/logo.svg"
        height="82"
        width="100"
        alt="heartfullness Logo"
        quality={100}
      />
    </div>
  );
}

export default Logo;
