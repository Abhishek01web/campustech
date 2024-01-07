import React from 'react'
import Wrapper from '../wrapper/wrapper';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { IoIosArrowDown } from "react-icons/io";

import './hero.scss'

const Hero = () => {
    // sildes data
    const slides = [
        {
            heading: <>A <span id='orange_text'>power-packed solution</span> to streamline all educational and institutional processes.</>,
            para: "Campus Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment activities rolled into one for your institution.",
            btn: "Get a Demo",
            img: "/hero-slide-1.png"

        },
        {
            heading: <>Enables <span id='orange_text'>efficient segregation</span> of tasks</>,
            para: "Campus Tech presents you with multiple dashboards to review the status of various accreditation tasks, including the tasks that are overdue, non-compliant, or need attention.",
            btn: "Accreditation & Compliance",
            img: "/hero-slide-2.png"
        },
        {
            heading: <>Helps cater to <span id='orange_text'>accreditation requirements</span></>,
            para: "Campus Tech has created an associated full-fledged and robust campus automation software along with a dedicated mobile app for students that can cater to multiple accreditation and compliance requirements.",
            btn: "Accreditation & Compliance",
            img: "/hero-slide-3.png"
        },
        {
            heading: <><span id='orange_text'>Live reports</span> and <span id='orange_text'>comparative analysis</span> made available</>,
            para: "Get live reports on data added for multiple accreditations, AI-based alerts for tracking of tasks assigned and completed.",
            btn: "Exam Management System",
            img: "/hero-slide-4.png"
        }
    ]

    return (
        <>
            <Wrapper>
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                    animationHandler={'fade'}

                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <IoIosArrowDown onClick={clickHandler}
                            className="sliderBtn pre" />
                    )}
                    renderArrowNext={(clickHandler, hasNext) => (
                        <IoIosArrowDown onClick={clickHandler}
                            className="sliderBtn nex" />
                    )}
                >
                    {/* use slides */}
                    {
                        slides.map((slide, i) => {
                            const { heading, para, btn, img } = slide;
                            return (
                                <section className='hero' key={i}>
                                    <section className='hero_left'>
                                        <h1 className='hero_left_heading'>
                                            {heading}
                                        </h1>
                                        <p className='hero_left_para'>
                                            {para}
                                        </p>
                                        <button className='hero_left_btn'>
                                            {btn}
                                        </button>
                                    </section>
                                    <section className='hero_right'>
                                        <img src={img} alt="hero-slide" />
                                    </section>
                                </section>
                            )
                        })
                    }
                </Carousel>
            </Wrapper>
        </>
    )
}

export default Hero;
