import React from 'react'
import Wrapper from "../wrapper/wrapper"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './secondsec.scss'

const Secondsec = () => {

  const slide = [
    {
      img: "/ss-slide-1.png",
      heading: "Accreditation & Compliance",
      para: "Enable the formulation of syllabi as per the NEP guidelines and identify new and diverse categories of courses",
    },
    {
      img: "/ss-slide-2.png",
      heading: "ILMS",
      para: "Customise the learning system by giving users a unified platform for all academic needs with easy-to-use technology",
    },
    {
      img: "/ss-slide-3.png",
      heading: "Exam Management System",
      para: "Streamline the examination process with Interactive Examinations, Live Proctoring, and Exam Evaluation modules",
    }
  ]

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Wrapper className={'sec_sec'}>
        <hr className='dline' />
        <Wrapper>
          <section className='secondSec'>
            <h1 className='secondSec_heading'>Learn more about <span id='orange_text'>what we solve</span></h1>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              infinite={true}
              infiniteLoop={true}
              containerClass="carousel-container secondSec_slider"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              arrows={false}
            >
              {
                slide.map((slide, i) => {
                  const { img, heading, para } = slide;
                  return (
                    <section className='slide' key={i}>
                      <img src={img} alt="ss-slide" />
                      <h2 className='slide_heading'>{heading}</h2>
                      <p className='slide_para'>{para}</p>
                      <button className='slide_btn'>Learn More</button>
                    </section>
                  )
                })
              }
            </Carousel>
          </section >
        </Wrapper>
      </Wrapper >
    </>
  )
}

export default Secondsec;
