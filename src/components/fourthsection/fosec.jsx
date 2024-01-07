import React from 'react'
import Wrapper from '../wrapper/wrapper';

import './fosec.scss'

const Fosec = () => {
    const data = [
        {
            num: "30",
            para: "Top Institutions"
        },
        {
            num: "13",
            para: "in A/A+/A++ Tier"
        },
        {
            num: "3000",
            para: "Faculty Connect"
        },
        {
            num: '90,000',
            para: "Students Benefited"
        },
    ]
    return (
        <>
            <Wrapper>
                <section className='fosec_top'>
                    <h1 className='fosec_top_h'>The best in the country <span id='orange_text'>trust us</span></h1>
                    <section className='fsec_top_con'>
                        {
                            data.map((data, i) => {
                                const { num, para } = data;
                                return (
                                    <section className='content' key={i}>
                                        <p className='content_num '>{num}</p>
                                        <p className='content_para'>{para}</p>
                                    </section>
                                )
                            })
                        }
                    </section>
                </section>
            </Wrapper>
            <section className='fsec_slider'>
                <img src="fs-img-1.png" alt="" />
                <img src="fs-img-2.png" alt="" />
                <img src="fs-img-3.png" alt="" />
                <img src="fs-img-4.png" alt="" />
                <img src="fs-img-1.png" alt="" />
                <img src="fs-img-2.png" alt="" />
                <img src="fs-img-3.png" alt="" />
                <img src="fs-img-4.png" alt="" />
            </section>
            <section className='line'>
                <hr className='dline' />
            </section>

        </>
    )
}

export default Fosec;
