import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../src/assets/imgs/logo.svg";
import DotsBG from "../src/assets/imgs/dotsbg.png";
import Dog from "../src/assets/imgs/Dog.png";
import BeigeBG from "../src/assets/imgs/beige-bg.png";
import BlackArrow from "../src/assets/imgs/black-arrow.png";
import OrangeArrow from "../src/assets/imgs/orange-arrow.png";
import RocketCloud from "../src/assets/imgs/Rocket-Cloud.png";
import SpaceDog from "../src/assets/imgs/spacedog.png";
import SpaceDogMobile from "../src/assets/imgs/rocket-mobile.png";
import Phase1 from "../src/assets/imgs/phase1.png";
import Phase2 from "../src/assets/imgs/phase2.png";
import Phase3 from "../src/assets/imgs/phase3.png";
import Phase4 from "../src/assets/imgs/phase4.png";
import Partner1 from "../src/assets/imgs/partner1.svg";
import Partner2 from "../src/assets/imgs/partner2.svg";
import Partner3 from "../src/assets/imgs/partner3.svg";
import Partner4 from "../src/assets/imgs/partner4.svg";
import Partner5 from "../src/assets/imgs/partner5.svg";
import Partner6 from "../src/assets/imgs/partner6.png";
import Tokenomics from "../src/assets/imgs/tokenomics.png";
import OrangeStar from "../src/assets/imgs/orange-star.png";
import WhitepaperDoc from "../src/assets/imgs/whitepaper-doc.png";
import SmallDog from "../src/assets/imgs/smalldog.png";
import About1 from "../src/assets/imgs/About1.png";
import About2 from "../src/assets/imgs/About2.png";
import About3 from "../src/assets/imgs/About3.png";
import About4 from "../src/assets/imgs/About4.png";
import PDF from "../src/assets/imgs/SeAPTv2.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsXLg, BsList } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import gsap from "gsap";
// import {
//   Back,
//   Power3,
//   Power1,
//   Power2,
//   Power4,
//   Linear,
//   Expo,
//   Circ,
// } from "gsap/dist/gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const App = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("roadmap");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const handleDownload = () => {
    // Use the imported PDF path directly
    const link = document.createElement("a");
    link.href = PDF;
    link.download = "SeAPTv2.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu(); // Close the menu after scrolling
    }
  };

  const scrollToSection1 = (section) => {
    setActiveSection(section);
    // Add scrolling logic here if needed
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Handles i18n language change
    setSelectedLanguage(lng); // Updates the state for toggling the SVG
  };

  gsap.registerPlugin(
    Draggable,
    ScrollTrigger,
    ScrollToPlugin,
    MotionPathPlugin
  );

  const sectionRef = useRef(null);
  // const rocketRef = useRef(null);
  // const pathRef = useRef(null);
  const pathRefDesktop = useRef(null);
  const pathRefMobile = useRef(null);
  const rocketRefMobile = useRef(null);
  const rocketRefDesktop = useRef(null);

  useEffect(() => {
    // const section = sectionRef.current;
    // const rocket = rocketRef.current;
    // const path = pathRef.current;

    // if (section && rocket && path) {
    //   gsap.set(rocket, {
    //     xPercent: 35,
    //     yPercent: -80,
    //     transformOrigin: "50% 50%",
    //   });

    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "start 30%",
    //       end: "bottom center",
    //       scrub: true,
    //       // markers: true,
    //     },
    //   });

    //   tl.to(rocket, {
    //     motionPath: {
    //       path: path,
    //       align: path,
    //       alignOrigin: [1, 0.5],
    //     },
    //     duration: 1,
    //     ease: "none",
    //   });
    // }

    const section = sectionRef.current;
    const rocketDesktop = rocketRefDesktop.current;
    const rocketMobile = rocketRefMobile.current;
    const pathDesktop = pathRefDesktop.current;
    const pathMobile = pathRefMobile.current;

    if (section && rocketDesktop && rocketMobile && pathDesktop && pathMobile) {
      const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

      const rocket = isMobile ? rocketMobile : rocketDesktop;
      const path = isMobile ? pathMobile : pathDesktop;

      gsap.set(rocket, {
        // xPercent: isMobile ? 0 : 35,
        // yPercent: isMobile ? 0 : -80,
        xPercent: isMobile ? 0 : 0,
        yPercent: isMobile ? 0 : 0,
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 30%",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(rocket, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
          // autoRotate: true,
        },
        duration: 1,
        ease: "none",
      });
    }

    let starAnim = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".tokenomics-section",
        start: "top 20%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    starAnim.fromTo(
      ".tokenomics-img .orange-star",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    let dogAnim = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".tokenomics-section",
        start: "bottom center",
        // end: "bottom 40%",
        scrub: true,
      },
    });

    dogAnim.fromTo(
      ".wb-right .smalldog",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }, []);

  return (
    <div className="spaceapt">
      <main className="spaceapt-main">
        <section className="hero-header-section">
          <img src={Dog} alt="" className="dog-img" />
          <img src={DotsBG} alt="" className="dots-bg" />
          <div className="box">
            <div className="hh-content">
              <header>
                <div className="header-content">
                  <a href="" className="header-left">
                    <img src={Logo} alt="" />
                    Space APT
                  </a>
                  <div className="header-center">
                    <a onClick={() => scrollToSection("roadmap")}>
                      {t("nav.roadmap")}
                    </a>
                    <a onClick={() => scrollToSection("about")}>
                      {t("nav.about")}
                    </a>
                    <a onClick={() => scrollToSection("tokenomics")}>
                      {t("nav.tokenomics")}
                    </a>
                    <a onClick={() => scrollToSection("whitepaper")}>
                      {t("nav.whitepaper")}
                    </a>
                  </div>
                  <div className="header-right">
                    <div className="language-selector">
                      {selectedLanguage === "en" ? (
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_51208)">
                            <g clip-path="url(#clip1_1_51208)">
                              <rect
                                width="22"
                                height="16"
                                rx="2"
                                fill="#1A47B8"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.34035 0H0V2.66667L19.6469 16L22 16V13.3333L2.34035 0Z"
                                fill="white"
                              />
                              <path
                                d="M0.780579 0L22 14.4378V16H21.2377L0 1.54726V0H0.780579Z"
                                fill="#F93939"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.9048 1.52588e-05H22.0001V2.66668C22.0001 2.66668 8.3913 11.5499 2.09532 16H8.01086e-05V13.3333L19.9048 1.52588e-05Z"
                                fill="white"
                              />
                              <path
                                d="M22 0H21.2895L0 14.4502V16H0.780579L22 1.55895V0Z"
                                fill="#F93939"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.00075 0H14.0176V4.93527H22V11.0615H14.0176V16H8.00075V11.0615H0V4.93527H8.00075V0Z"
                                fill="white"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.26316 0H12.7368V6.15385H22V9.84615H12.7368V16H9.26316V9.84615H0V6.15385H9.26316V0Z"
                                fill="#F93939"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_51208">
                              <rect width="22" height="16" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1_51208">
                              <rect
                                width="22"
                                height="16"
                                rx="2"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      ) : selectedLanguage === "ko" ? (
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_51082)">
                            <rect width="22" height="16" rx="2" fill="white" />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.6667 7.99999C14.6667 10.0619 13.0251 11.7333 11 11.7333C8.97496 11.7333 7.33334 10.0619 7.33334 7.99999C7.33334 6.80533 9.79525 6.30399 11.8674 6.49279C12.0874 6.43306 12.3242 6.39999 12.5714 6.39999C13.7291 6.39999 14.6667 7.11679 14.6667 7.99999Z"
                              fill="#232C80"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.4762 7.46666C10.4762 7.46666 11.4138 6.4 12.5714 6.4C13.7291 6.4 14.6667 7.1168 14.6667 8C14.6667 5.93813 13.0251 4.26666 11 4.26666C9.53649 4.26666 8.27306 5.1392 7.68534 6.40213C7.33334 7.46666 7.33334 7.77813 7.33334 8C7.85715 8.53333 8.43963 8.53333 8.90477 8.53333C9.36992 8.53333 9.78791 8.32746 10.076 8L10.4762 7.46666Z"
                              fill="#F93939"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.7143 5.33333H17.8095L15.7143 3.2H14.6667L15.7143 5.33333ZM6.28573 5.33333H4.19049L6.28573 3.2H7.33335L6.28573 5.33333ZM15.7143 10.6667H17.8095L15.7143 12.8H14.6667L15.7143 10.6667ZM6.28573 10.6667H4.19049L6.28573 12.8H7.33335L6.28573 10.6667Z"
                              fill="#151515"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_51082">
                              <rect width="22" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ): selectedLanguage === "jp" ? (
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_51208)">
                            <g clip-path="url(#clip1_1_51208)">
                              <rect width="22" height="16" rx="2" fill="white" />
                              <circle cx="11" cy="8" r="4" fill="#BC002D" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_51208">
                              <rect width="22" height="16" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1_51208">
                              <rect width="22" height="16" rx="2" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                      ): selectedLanguage === "cn" ? (
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_51208)">
                            <g clip-path="url(#clip1_1_51208)">
                              <rect width="22" height="16" rx="2" fill="#DE2910" />
                              <path
                                d="M3 3L3.8 4.6L5.5 4L3.8 5.4L4.6 7L3 6L1.4 7L2.2 5.4L0.5 4L2.2 4.6L3 3Z"
                                fill="#FFDE00"
                              />
                              <circle cx="5" cy="2.5" r="0.5" transform="rotate(15 5 2.5)" fill="#FFDE00" />
                              <circle cx="6" cy="4.5" r="0.5" transform="rotate(30 6 4.5)" fill="#FFDE00" />
                              <circle cx="6" cy="6.5" r="0.5" transform="rotate(45 6 6.5)" fill="#FFDE00" />
                              <circle cx="5" cy="8.5" r="0.5" transform="rotate(60 5 8.5)" fill="#FFDE00" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_51208">
                              <rect width="22" height="16" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1_51208">
                              <rect width="22" height="16" rx="2" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                      ): selectedLanguage === "vt" ? (
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_51208)">
                            <g clip-path="url(#clip1_1_51208)">
                              <rect width="22" height="16" rx="2" fill="#DA251D" />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11 4L12.09 7.6H15.85L12.88 9.52L13.97 13.12L11 11.2L8.03 13.12L9.12 9.52L6.15 7.6H9.91L11 4Z"
                                fill="#FFCC00"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_51208">
                              <rect width="22" height="16" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1_51208">
                              <rect width="22" height="16" rx="2" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                      ): selectedLanguage === "id" ? (
                        <svg
                          width="22"
                          height="16"
                          viewBox="0 0 22 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_1_51208)">
                            <g clip-path="url(#clip1_1_51208)">
                              <rect width="22" height="16" rx="2" fill="white" />
                              <rect width="22" height="8" fill="#FF0000" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_1_51208">
                              <rect width="22" height="16" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1_51208">
                              <rect width="22" height="16" rx="2" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ): (
                        <div>Language not supported</div>
                      )}
                      <select
                        onChange={(e) => changeLanguage(e.target.value)}
                        // value={i18n.language}
                        value={selectedLanguage}
                      >
                        <option value="en">EN</option>
                        <option value="cn">CN</option>
                        <option value="jp">JP</option>
                        <option value="vt">VT</option>
                        <option value="ko">KO</option>
                      </select>  
                    </div>
                    <BsList
                      className="mob-hamburger"
                      onClick={toggleMobileMenu}
                    />
                  </div>
                </div>
              </header>
              <div className="hero-content">
                <h1>{t("hero.title1")}</h1>
                <h2>{t("hero.title2")}</h2>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="mobile-menu">
                <div className="mobile-menu-top">
                  <a href="" className="header-left">
                    <img src={Logo} alt="" />
                    Space APT
                  </a>
                  <BsXLg onClick={closeMobileMenu} />
                </div>
                <div className="mobile-menu-bottom">
                  <a onClick={() => scrollToSection("roadmap")}>
                    {t("nav.roadmap")}
                  </a>
                  <a onClick={() => scrollToSection("about")}>
                    {t("nav.about")}
                  </a>
                  <a onClick={() => scrollToSection("tokenomics")}>
                    {t("nav.tokenomics")}
                  </a>
                  <a onClick={() => scrollToSection("whitepaper")}>
                    {t("nav.whitepaper")}
                  </a>
                </div>
              </div>
            )}
          </div>
          <img src={BeigeBG} alt="" className="beige-bg" />
          <div className="roadmap-navbar">
            <div
              className={`rn-bars ${
                activeSection === "tokenomics" ? "active" : ""
              }`}
              onClick={() => scrollToSection1("tokenomics")}
            >
              <h4>{t("nav.tokenomics")}</h4>
              <img
                src={activeSection === "tokenomics" ? OrangeArrow : BlackArrow}
                alt=""
              />
            </div>
            <div
              className={`rn-bars ${
                activeSection === "roadmap" ? "active" : ""
              }`}
              onClick={() => scrollToSection1("roadmap")}
            >
              <h4>{t("nav.roadmap")}</h4>
              <img
                src={activeSection === "roadmap" ? OrangeArrow : BlackArrow}
                alt=""
              />
            </div>
            <div
              className={`rn-bars ${
                activeSection === "whitepaper" ? "active" : ""
              }`}
              onClick={() => scrollToSection1("whitepaper")}
            >
              <h4>{t("nav.whitepaper")}</h4>
              <img
                src={activeSection === "whitepaper" ? OrangeArrow : BlackArrow}
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="roadmap-section" id="roadmap">
          <div className="space-roadmap-content">
            <div className="roadmap-content">
              <div className="box">
                <div className="rc-text">
                  <span>
                    How about <br /> finding a home <h4>in space? </h4>
                  </span>
                  <h3>SeAPT</h3>
                  <p>{t("roadmap.description")}</p>
                </div>
              </div>
            </div>
            <div className="roadmap-content" ref={sectionRef}>
              <div className="box">
                <div className="roadmap-tour">
                  <svg
                    width="1063"
                    height="248"
                    viewBox="0 0 1063 248"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="path-img path-img-desktop"
                  >
                    <path
                      d="M5.08296 167.989C59.5086 93.3436 260.267 -52.4631 473.597 29.9706C659.999 101.999 848.501 408.999 1208.5 122.999"
                      stroke="url(#paint0_linear_431_8783)"
                      stroke-width="10"
                      stroke-linecap="round"
                      // ref={pathRef}
                      ref={pathRefDesktop}
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_431_8783"
                        x1="1210.85"
                        y1="-723.292"
                        x2="4.84916"
                        y2="157.481"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF7700" />
                        <stop offset="0.5" stop-color="#F5C200" />
                        <stop
                          offset="1"
                          stop-color="#F5C200"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    width="253"
                    height="1066"
                    viewBox="0 0 253 1066"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="path-img path-img-mobile"
                  >
                    <path
                      d="M87.7565 5.89017C161.946 60.9352 306.077 262.9 221.87 475.536C148.293 661.333 -160.266 847.273 122.728 1209.64"
                      stroke="url(#paint0_linear_508_92)"
                      stroke-width="10"
                      stroke-linecap="round"
                      // ref={pathRef}
                      ref={pathRefMobile}
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_508_92"
                        x1="968.971"
                        y1="1219.03"
                        x2="98.266"
                        y2="5.74385"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF7700" />
                        <stop offset="0.5" stop-color="#F5C200" />
                        <stop
                          offset="1"
                          stop-color="#F5C200"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <img src={RocketCloud} alt="" className="rocket-cloud" />
                  <img
                    src={SpaceDogMobile}
                    alt=""
                    className="space-dog space-dog-mobile"
                    // ref={rocketRef}
                    ref={rocketRefMobile}
                  />
                  <img
                    src={SpaceDog}
                    alt=""
                    className="space-dog space-dog-desktop"
                    // ref={rocketRef}
                    ref={rocketRefDesktop}
                  />
                  <div className="phases-content">
                    <img src={Phase1} alt="" />
                    <div className="phase-text">
                      <h6>{t("roadmap.phase1.title")}</h6>
                      <div className="pt-para">
                        <p>{t("roadmap.phase1.date")}</p>
                        <span>{t("roadmap.phase1.description")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="phases-content pc-2">
                    <img src={Phase2} alt="" />
                    <div className="phase-text">
                      <h6>{t("roadmap.phase2.title")}</h6>
                      <div className="pt-para">
                        <p>{t("roadmap.phase2.date")}</p>
                        <span>{t("roadmap.phase2.description")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="phases-content pc-3">
                    <img src={Phase3} alt="" />
                    <div className="phase-text">
                      <h6>{t("roadmap.phase3.title")}</h6>
                      <div className="pt-para">
                        <p>{t("roadmap.phase3.date")}</p>
                        <span>{t("roadmap.phase3.description")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="phases-content pc-4">
                    <img src={Phase4} alt="" />
                    <div className="phase-text">
                      <h6>{t("roadmap.phase4.title")}</h6>
                      <div className="pt-para">
                        <p>{t("roadmap.phase4.date")}</p>
                        <span>{t("roadmap.phase4.description")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-section">
          <div className="partners-slide">
            <div className="blur-slide-left"></div>
            <div className="blur-slide-right"></div>
            <div className="slider">
              <img src={Partner1} alt="" />
              <img src={Partner2} alt="" />
              <img src={Partner3} alt="" />
              <img src={Partner4} alt="" />
              <img src={Partner5} alt="" />
              <img src={Partner6} alt="" />
              <img src={Partner1} alt="" />
              <img src={Partner2} alt="" />
              <img src={Partner3} alt="" />
              <img src={Partner4} alt="" />
              <img src={Partner5} alt="" />
              <img src={Partner6} alt="" />
              <img src={Partner1} alt="" />
              <img src={Partner2} alt="" />
              <img src={Partner3} alt="" />
              <img src={Partner4} alt="" />
              <img src={Partner5} alt="" />
              <img src={Partner6} alt="" />
            </div>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="box-lg">
            <div className="about-content">
              <div className="about-swiper">
                <div className="sh-right">
                  <span className="about-next">
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.43171 10.9096C6.27426 11.0137 6.07117 11.064 5.8671 11.0492C5.66303 11.0345 5.47467 10.956 5.34345 10.831L0.191193 5.91872C0.123333 5.8571 0.0716708 5.78532 0.0392469 5.7076C0.0068231 5.62988 -0.00570838 5.54779 0.00238998 5.46617C0.0104883 5.38455 0.0390533 5.30504 0.0864035 5.23232C0.133754 5.15959 0.198933 5.09513 0.278107 5.04271C0.357282 4.99029 0.448852 4.95099 0.547431 4.9271C0.64601 4.90322 0.749606 4.89523 0.852125 4.90362C0.954644 4.91202 1.05402 4.93661 1.14439 4.97596C1.23477 5.01531 1.31433 5.06862 1.37839 5.13276L6.53065 10.045C6.66178 10.1701 6.72503 10.3314 6.70647 10.4935C6.68792 10.6557 6.58909 10.8053 6.43171 10.9096Z"
                        fill="#F1E8DA"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.43171 0.142208C6.58909 0.24646 6.68792 0.396093 6.70647 0.558214C6.72503 0.720335 6.66178 0.881672 6.53065 1.00676L1.37839 5.919C1.31433 5.98313 1.23477 6.03645 1.14439 6.0758C1.05402 6.11515 0.954644 6.13974 0.852125 6.14813C0.749606 6.15652 0.64601 6.14854 0.547431 6.12466C0.448852 6.10077 0.357282 6.06146 0.278107 6.00905C0.198933 5.95663 0.133754 5.89217 0.0864035 5.81944C0.0390533 5.74672 0.0104883 5.66721 0.00238991 5.58559C-0.00570845 5.50396 0.00682303 5.42188 0.0392469 5.34416C0.0716707 5.26644 0.123333 5.19466 0.191192 5.13304L5.34345 0.220804C5.47467 0.0957761 5.66303 0.0172625 5.8671 0.00252443C6.07117 -0.0122141 6.27426 0.0380293 6.43171 0.142208Z"
                        fill="#F1E8DA"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.43171 0.142208C6.58909 0.24646 6.68792 0.396093 6.70647 0.558214C6.72503 0.720335 6.66178 0.881672 6.53065 1.00676L1.37839 5.919C1.31433 5.98313 1.23477 6.03645 1.14439 6.0758C1.05402 6.11515 0.954644 6.13974 0.852125 6.14813C0.749606 6.15652 0.64601 6.14854 0.547431 6.12466C0.448852 6.10077 0.357282 6.06146 0.278107 6.00905C0.198933 5.95663 0.133754 5.89217 0.0864035 5.81944C0.0390533 5.74672 0.0104883 5.66721 0.00238991 5.58559C-0.00570845 5.50396 0.00682303 5.42188 0.0392469 5.34416C0.0716707 5.26644 0.123333 5.19466 0.191192 5.13304L5.34345 0.220804C5.47467 0.0957761 5.66303 0.0172625 5.8671 0.00252443C6.07117 -0.0122141 6.27426 0.0380293 6.43171 0.142208Z"
                        fill="#F1E8DA"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.785156 5.52562C0.785156 5.36277 0.866588 5.20659 1.01154 5.09143C1.15649 4.97628 1.35308 4.91159 1.55807 4.91159L16.2435 4.91159C16.4485 4.91159 16.6451 4.97628 16.79 5.09143C16.935 5.20659 17.0164 5.36277 17.0164 5.52562C17.0164 5.68847 16.935 5.84465 16.79 5.9598C16.6451 6.07496 16.4485 6.13965 16.2435 6.13965L1.55807 6.13965C1.35308 6.13965 1.15649 6.07496 1.01154 5.9598C0.866588 5.84465 0.785156 5.68847 0.785156 5.52562Z"
                        fill="#F1E8DA"
                      />
                    </svg>
                  </span>
                  <span className="about-prev">
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5683 0.142207C11.7257 0.038028 11.9288 -0.0122151 12.1329 0.0025232C12.337 0.0172615 12.5253 0.0957743 12.6566 0.220803L17.8088 5.13304C17.8767 5.19466 17.9283 5.26644 17.9608 5.34416C17.9932 5.42188 18.0057 5.50396 17.9976 5.58559C17.9895 5.66721 17.9609 5.74672 17.9136 5.81944C17.8662 5.89217 17.8011 5.95663 17.7219 6.00905C17.6427 6.06146 17.5511 6.10077 17.4526 6.12466C17.354 6.14854 17.2504 6.15652 17.1479 6.14813C17.0454 6.13974 16.946 6.11515 16.8556 6.0758C16.7652 6.03645 16.6857 5.98313 16.6216 5.91899L11.4694 1.00676C11.3382 0.881672 11.275 0.720333 11.2935 0.558212C11.3121 0.396092 11.4109 0.246458 11.5683 0.142207Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5683 10.9095C11.4109 10.8053 11.3121 10.6557 11.2935 10.4935C11.275 10.3314 11.3382 10.1701 11.4694 10.045L16.6216 5.13276C16.6857 5.06862 16.7652 5.01531 16.8556 4.97596C16.946 4.93661 17.0454 4.91201 17.1479 4.90362C17.2504 4.89523 17.354 4.90321 17.4526 4.9271C17.5511 4.95099 17.6427 4.99029 17.7219 5.04271C17.8011 5.09512 17.8662 5.15959 17.9136 5.23231C17.9609 5.30504 17.9895 5.38455 17.9976 5.46617C18.0057 5.54779 17.9932 5.62988 17.9608 5.7076C17.9283 5.78531 17.8767 5.8571 17.8088 5.91872L12.6566 10.831C12.5253 10.956 12.337 11.0345 12.1329 11.0492C11.9288 11.064 11.7257 11.0137 11.5683 10.9095Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.5683 10.9095C11.4109 10.8053 11.3121 10.6557 11.2935 10.4935C11.275 10.3314 11.3382 10.1701 11.4694 10.045L16.6216 5.13276C16.6857 5.06862 16.7652 5.01531 16.8556 4.97596C16.946 4.93661 17.0454 4.91201 17.1479 4.90362C17.2504 4.89523 17.354 4.90321 17.4526 4.9271C17.5511 4.95099 17.6427 4.99029 17.7219 5.04271C17.8011 5.09512 17.8662 5.15959 17.9136 5.23231C17.9609 5.30504 17.9895 5.38455 17.9976 5.46617C18.0057 5.54779 17.9932 5.62988 17.9608 5.7076C17.9283 5.78531 17.8767 5.8571 17.8088 5.91872L12.6566 10.831C12.5253 10.956 12.337 11.0345 12.1329 11.0492C11.9288 11.064 11.7257 11.0137 11.5683 10.9095Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.2148 5.52614C17.2148 5.68899 17.1334 5.84517 16.9885 5.96032C16.8435 6.07548 16.6469 6.14017 16.4419 6.14017L1.75653 6.14017C1.55154 6.14017 1.35495 6.07548 1.21 5.96032C1.06505 5.84517 0.983618 5.68899 0.983618 5.52614C0.983618 5.36329 1.06505 5.20711 1.21 5.09195C1.35495 4.9768 1.55154 4.91211 1.75653 4.91211L16.4419 4.91211C16.6469 4.91211 16.8435 4.9768 16.9885 5.09195C17.1334 5.20711 17.2148 5.36329 17.2148 5.52614Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
                <Swiper
                  spaceBetween={15}
                  slidesPerView={1}
                  modules={[Navigation]}
                  loop={true}
                  navigation={{
                    nextEl: ".about-next",
                    prevEl: ".about-prev",
                  }}
                >
                  <SwiperSlide>
                    <div className="about-swiper-card">
                      <div className="asc-left">
                        <div className="asc-top">
                          <h5>{t("about.rwa.title")}</h5>
                          <h6>{t("about.rwa.subtitle")}</h6>
                        </div>
                        <img src={About1} alt="" />
                      </div>
                      <div className="asc-right">
                        <span>{t("about.rwa.heading")}</span>
                        <p>{t("about.rwa.description")}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="about-swiper-card">
                      <div className="asc-left">
                        <div className="asc-top">
                          <h5>{t("about.luckyToE.title")}</h5>
                        </div>
                        <img src={About2} alt="" />
                      </div>
                      <div className="asc-right">
                        <span>{t("about.luckyToE.heading")}</span>
                        <p>{t("about.luckyToE.description")}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="about-swiper-card">
                      <div className="asc-left">
                        <div className="asc-top">
                          <h5>{t("about.ai.title")}</h5>
                          <h6>{t("about.ai.subtitle")}</h6>
                        </div>
                        <img src={About3} alt="" />
                      </div>
                      <div className="asc-right">
                        <span>{t("about.ai.heading")}</span>
                        <p>{t("about.ai.description")}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="about-swiper-card">
                      <div className="asc-left">
                        <div className="asc-top">
                          <h5>{t("about.nft.title")}</h5>
                          <h6>{t("about.nft.subtitle")}</h6>
                        </div>
                        <img src={About4} alt="" />
                      </div>
                      <div className="asc-right">
                        <span>{t("about.nft.heading")}</span>
                        <p>{t("about.nft.description")}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="about-orange-box"></div>
            </div>
          </div>
        </section>
        <section className="tokenomics-section" id="tokenomics">
          <div className="box">
            <div className="tokenomics-content">
              <h4>
                Own the universe with <b>SeAPT</b>
              </h4>
              <div className="tokenomics-grid">
                <div className="tokenomics-text">
                  <h5>{t("tokenomics.totalSupply.title")}</h5>
                  <p>{t("tokenomics.totalSupply.description")}</p>
                  <h5>{t("tokenomics.lp.title")}</h5>
                  <p>{t("tokenomics.lp.description")}</p>
                  <h5>{t("tokenomics.burn.title")}</h5>
                  <p>{t("tokenomics.burn.description")}</p>
                  <h5>{t("tokenomics.charity.title")}</h5>
                  <p>{t("tokenomics.charity.description")}</p>
                  <h5>{t("tokenomics.marketing.title")}</h5>
                  <p>{t("tokenomics.marketing.description")}</p>
                </div>
                <div className="tokenomics-img">
                  <img src={Tokenomics} alt="" />
                  <img src={OrangeStar} alt="" className="orange-star" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="whitepaper-section" id="whitepaper">
          <div className="box-lg">
            <div className="whitepaper-lines-content">
              <div className="whitebox-line"></div>
              <div className="whitepaper-box">
                <div className="wb-left">
                  <h5>Whitepaper</h5>
                  <button className="orange-btn" onClick={handleDownload}>
                    Download
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.32031 11.6799L11.8803 14.2399L14.4403 11.6799"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.88 4V14.17"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M20 12.18C20 16.6 17 20.18 12 20.18C7 20.18 4 16.6 4 12.18"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="wb-center">
                  <p>{t("whitepaper.content")}</p>
                </div>
                <div className="wb-right">
                  <img src={WhitepaperDoc} alt="" className="whitepaper-doc" />
                  <img src={SmallDog} alt="" className="smalldog" />
                </div>
              </div>
              <div className="whitebox-line"></div>
            </div>
          </div>
        </section>
        <footer>
          <div className="box">
            <div className="footer-content">
              <div className="footer-left">
                <h4>THE TIME IS NOW GET APT IN SPACE</h4>
                <div className="ft-bottom">
                  <div className="social-icons">
                    <a href="">
                      <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.812 0.016625H4.145C1.855 0.016625 0 1.85163 0 4.11563V9.88363C0 12.1476 1.856 13.9836 4.145 13.9836H15.812C18.102 13.9836 19.957 12.1476 19.957 9.88363V4.11563C19.957 1.85163 18.101 0.015625 15.812 0.015625V0.016625ZM13.009 7.27963L7.552 9.85462C7.51872 9.87065 7.48192 9.878 7.44503 9.87598C7.40815 9.87396 7.37237 9.86264 7.34103 9.84308C7.3097 9.82352 7.28382 9.79635 7.2658 9.7641C7.24779 9.73185 7.23822 9.69557 7.238 9.65863V4.34963C7.23867 4.3125 7.24872 4.27614 7.26722 4.24395C7.28573 4.21176 7.31208 4.18477 7.34382 4.1655C7.37556 4.14624 7.41167 4.13532 7.44877 4.13377C7.48587 4.13221 7.52276 4.14008 7.556 4.15663L13.014 6.89163C13.0504 6.90976 13.0809 6.93777 13.102 6.97245C13.1232 7.00713 13.1341 7.04708 13.1336 7.08769C13.1331 7.12831 13.1211 7.16796 13.0991 7.20209C13.077 7.23621 13.0458 7.26344 13.009 7.28063V7.27963Z"
                          fill="#F1E8DA"
                        />
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        width="10"
                        height="20"
                        viewBox="0 0 10 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.04623 3.865V6.613H0.0322266V9.973H2.04623V19.959H6.18023V9.974H8.95523C8.95523 9.974 9.21523 8.363 9.34123 6.601H6.19723V4.303C6.19723 3.96 6.64723 3.498 7.09323 3.498H9.34723V0H6.28323C1.94323 0 2.04623 3.363 2.04623 3.865Z"
                          fill="#F1E8DA"
                        />
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 1.90668C19.2504 2.23405 18.4565 2.44871 17.644 2.54368C18.4968 2.04291 19.138 1.24878 19.448 0.309676C18.64 0.780004 17.7587 1.11128 16.841 1.28968C16.4545 0.884881 15.9897 0.563063 15.4748 0.343854C14.9598 0.124645 14.4056 0.0126411 13.846 0.0146757C11.58 0.0146757 9.743 1.82468 9.743 4.05468C9.743 4.37068 9.779 4.67968 9.849 4.97468C8.22358 4.89737 6.63212 4.48208 5.17617 3.75531C3.72022 3.02855 2.43176 2.00626 1.393 0.753676C1.02883 1.36808 0.837415 2.06946 0.839 2.78368C0.839697 3.45164 1.00683 4.10891 1.32529 4.69607C1.64375 5.28323 2.1035 5.78179 2.663 6.14668C2.01248 6.12568 1.37602 5.952 0.805 5.63968V5.68968C0.805 7.64768 2.22 9.28068 4.095 9.65268C3.74261 9.74617 3.37958 9.79357 3.015 9.79368C2.75 9.79368 2.493 9.76868 2.242 9.71868C2.51008 10.5266 3.02311 11.231 3.70982 11.734C4.39653 12.237 5.22284 12.5137 6.074 12.5257C4.61407 13.6502 2.82182 14.2577 0.979 14.2527C0.647 14.2527 0.321 14.2327 0 14.1967C1.88125 15.3874 4.06259 16.018 6.289 16.0147C13.836 16.0147 17.962 9.85768 17.962 4.51868L17.948 3.99568C18.7529 3.42935 19.4481 2.72152 20 1.90668Z"
                          fill="#F1E8DA"
                        />
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
                          fill="#F1E8DA"
                        />
                        <path
                          d="M11.9823 6.81934C10.6137 6.82145 9.30184 7.36612 8.33421 8.33394C7.36658 9.30176 6.82216 10.6138 6.82031 11.9823C6.8219 13.3513 7.36634 14.6637 8.33421 15.6317C9.30209 16.5998 10.6144 17.1445 11.9833 17.1463C13.3524 17.1447 14.665 16.6002 15.6331 15.6321C16.6012 14.664 17.1457 13.3514 17.1473 11.9823C17.1452 10.6134 16.6003 9.30122 15.632 8.33353C14.6637 7.36584 13.3512 6.82166 11.9823 6.82034V6.81934ZM11.9823 15.1383C11.1456 15.1383 10.3431 14.8059 9.75139 14.2143C9.15971 13.6226 8.82731 12.8201 8.82731 11.9833C8.82731 11.1466 9.15971 10.3441 9.75139 9.75241C10.3431 9.16074 11.1456 8.82834 11.9823 8.82834C12.8191 8.82834 13.6216 9.16074 14.2132 9.75241C14.8049 10.3441 15.1373 11.1466 15.1373 11.9833C15.1373 12.8201 14.8049 13.6226 14.2132 14.2143C13.6216 14.8059 12.8191 15.1383 11.9823 15.1383Z"
                          fill="#F1E8DA"
                        />
                        <path
                          d="M17.1559 8.09509C17.8391 8.09509 18.3929 7.54127 18.3929 6.85809C18.3929 6.17492 17.8391 5.62109 17.1559 5.62109C16.4728 5.62109 15.9189 6.17492 15.9189 6.85809C15.9189 7.54127 16.4728 8.09509 17.1559 8.09509Z"
                          fill="#F1E8DA"
                        />
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.959 11.7194V19.0984H15.681V12.2134C15.681 10.4834 15.062 9.30337 13.514 9.30337C12.332 9.30337 11.628 10.0994 11.319 10.8684C11.206 11.1434 11.177 11.5264 11.177 11.9114V19.0984H6.897C6.897 19.0984 6.955 7.43837 6.897 6.22937H11.177V8.05337L11.149 8.09537H11.177V8.05337C11.745 7.17837 12.76 5.92737 15.033 5.92737C17.848 5.92737 19.959 7.76737 19.959 11.7194ZM2.421 0.0263672C0.958 0.0263672 0 0.986367 0 2.24937C0 3.48437 0.93 4.47337 2.365 4.47337H2.393C3.886 4.47337 4.813 3.48437 4.813 2.24937C4.787 0.986367 3.887 0.0263672 2.422 0.0263672H2.421ZM0.254 19.0984H4.532V6.22937H0.254V19.0984Z"
                          fill="#F1E8DA"
                        />
                      </svg>
                    </a>
                  </div>
                  <p>Space APT © 2024. All rights reserved.</p>
                </div>
              </div>
              <div className="footer-right">
                <img src={OrangeStar} alt="" />
                <div className="footer-nav">
                  <a onClick={() => scrollToSection("roadmap")}>Roadmap</a>
                  <a onClick={() => scrollToSection("about")}>About</a>
                  <a onClick={() => scrollToSection("tokenomics")}>
                    Tokenomics
                  </a>
                  <a onClick={() => scrollToSection("whitepaper")}>
                    Whitepaper
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
