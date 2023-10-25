"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/banner.scss";

function BannerCarousel() {
  const [bannerData, setBannerData] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    // Fetching the JSON data
    const fetchData = async () => {
      try {
        const response = await fetch(`/data/bannerImages.json`);
        const data = await response.json();
        setBannerData(data.bannerImages);
      } catch (error) {
        const errorMessage = `Error fetching registration data: ${error}`;
        return errorMessage;
      }
      return null;
    };

    fetchData();
    let resizeTimeout;

    // Check for screen size on component mount
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 720);
    };

    handleResize();

    // Check for screen size on window resize
    const handleResizeDebounced = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", handleResizeDebounced);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResizeDebounced);
    };
  }, []);
  const renderNextButton = ({ onClick }) => (
    <button type="button" onClick={onClick} style={{ fontSize: "2rem" }}>
      <i className="pi pi-angle-right" />
    </button>
  );

  const renderPrevButton = ({ onClick }) => (
    <button type="button" onClick={onClick} style={{ fontSize: "2rem" }}>
      <i className="pi pi-angle-left" />
    </button>
  );
  return (
    <div>
      <div>
        {bannerData.length === 1 && (
          // If there is only one banner, display it as a single banner
          <div>
            <div className="Banner-wrapper">
              <div className="bannerContent">
                <h2 className="title">{bannerData[0].title}</h2>
                <p className="description">{bannerData[0].description}</p>
              </div>
              <Image
                height={360}
                width={1519}
                className="bannner_image"
                src={
                  isSmallScreen && bannerData[0].mobile_src
                    ? bannerData[0].mobile_src
                    : bannerData[0].src
                }
                alt={bannerData[0].alt}
              />
            </div>
          </div>
        )}
        {bannerData.length > 1 && (
          // If there are multiple banners, display them in a carousel
          <div className="Banner-wrapper">
            <Carousel
              showArrows
              swipeable
              infiniteLoop
              interval={3000}
              autoPlay
              showStatus={false}
              showIndicators
              showThumbs={false}
              useKeyboardArrows
              renderNextButton={renderNextButton}
              renderPrevButton={renderPrevButton}
              className="mt-5"
            >
              {bannerData.map((banner) => (
                <div key={banner.id}>
                  <div>
                    <div className="bannerContent">
                      <h2 className="title">{banner.title}</h2>
                      <p className="description">{banner.description}</p>
                    </div>
                    <Image
                      className="bannner_image"
                      height={360}
                      width={1519}
                      src={
                        isSmallScreen && banner.mobile_src
                          ? banner.mobile_src
                          : banner.src
                      }
                      alt={banner.alt}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
export default BannerCarousel;
