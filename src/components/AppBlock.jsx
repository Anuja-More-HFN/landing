import Image from "next/image";
import "../styles/contactblock.scss";

function AppBlock() {
  return (
    <div className="AppBlockWrapper my-3 p-5">
      <div className="app-block-text-styles  d-flex justify-content-center">
        <div>Over 10 Million people trusted us.</div>
      </div>
      <div className="app-block-text-styles  d-flex justify-content-center">
        <div>What are you waiting for ?</div>
      </div>
      <div className="button-wr mt-5 d-flex align-items-center justify-content-center">
        <a
          href="https://play.google.com/store/apps/details?id=org.heartfulness.heartintune.prod"
          target="_blank"
        >
          <Image src="/assets/gplay.png" width="140" height="41" alt="GPLAY" />
        </a>
        <a
          href="https://apps.apple.com/ph/app/heart-in-tune/id1576857513"
          target="_blank"
          className="mx-2"
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
  );
}

export default AppBlock;
