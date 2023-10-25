import React from "react";
import ImageAndInfoBlock from "./ImageAndInfoBlock";

const missionData = [
  {
    title: "",
    description:
      "“A sub copy of what is heartfulness in Pune and the reason why you should care about us” Welcome to the heart of tranquility in Pune, where the Heartfulness Institute and its dedicated volunteers Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, ",
  },
  {
    title: "“Our Mission”",
    description:
      "At the Heartfulness Institute in Pune, we hold a simple yet profound mission – to guide individuals towards inner harmony, helping them tap into the wellspring of peace that resides within. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, ",
  },
  {
    title: "“The Impact”",
    description:
      "Over the years, the efforts of Heartfulness Institute volunteers have rippled through the Pune community, leaving a transformative impact that resonates far beyond its walls. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, ",
  },
];
const videoSrc = "https://www.youtube.com/embed/Z-T2IM8oS9c";

function InfoBlock() {
  return (
    <div className="App">
      {/* First infoComponent with no title */}
      <ImageAndInfoBlock
        title={missionData[0].title}
        description={missionData[0].description}
        imageSrc="/assets/placeholder.png"
        imageFirst
      />
      <div className="my-2 mx-5 d-flex align-items-center justify-content-center">
        <iframe
          width="1012px"
          height="568px"
          src={videoSrc}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* Second infoComponent with image on left */}
      <ImageAndInfoBlock
        title={missionData[1].title}
        description={missionData[1].description}
        imageSrc="/assets/placeholder.png"
        imageFirst={false}
      />
      {/* Third infoComponent with image on right */}
      <ImageAndInfoBlock
        title={missionData[2].title}
        description={missionData[2].description}
        imageSrc="/assets/placeholder.png"
        imageFirst
      />
    </div>
  );
}

export default InfoBlock;
