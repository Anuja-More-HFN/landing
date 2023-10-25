import Image from "next/image";

function Lang() {
  return (
    <div className="lang-container d-flex align-items-center">
      <Image
        src="/assets/glob.png"
        alt="Globe Icon"
        height={14}
        width={14}
        quality={100}
      />
      <span className="text-styles mx-2">IN-EN</span>
    </div>
  );
}

export default Lang;
