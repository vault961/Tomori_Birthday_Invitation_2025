import React, { useEffect, useRef, useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import Quote from "../components/quote";

import AOS from "aos";
import "aos/dist/aos.css";

import AudioPlayer from "../components/audioPlayer";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
  padding-bottom: 100px;
`;

const IndexPage = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <Wrapper>
      <AudioPlayer />
      <Title />
      <Quote />
      <Gallery />
      <Location />
    </Wrapper>
  );
};

export default IndexPage;
