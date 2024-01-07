import React from 'react'
import Wrapper from '../wrapper/wrapper';
import './tsec.scss';
const Tsec = () => {
    const data = [
        {
            img: '/ts-con-1.png',
            para: 'simple and easy-to-use interface'
        },
        {
            img: '/ts-con-2.png',
            para: 'AI-based alerts for all activities to be conducted'
        },
        {
            img: '/ts-con-3.png',
            para: 'Build a new culture of compliance and accreditation'
        },
        {
            img: '/ts-con-4.png',
            para: 'Multi-institutional dashboard'
        },
        {
            img: '/ts-con-5.png',
            para: 'Track learning behaviour and learning outcomes'
        },
        {
            img: '/ts-con-6.png',
            para: 'Integration with your campus website'
        },
    ]
    return (
        <section className='tsec_style'>
            <Wrapper>
                <section className='tsec'>
                    <section className='tsec_first'>
                        <h1 className='tsec_first_heading'>Why your educational <span id='orange_text'>institution needs Campus Tech</span></h1>
                        <button className='tsec_first_btn'>About Us</button>
                    </section>
                    <section className='tsec_second'>
                        {
                            data.map((data, i) => {
                                const { img, para } = data
                                return (
                                    <section className='container' key={i}>
                                        <img src={img} alt="" className='container_img' />
                                        <p className='container_para'>{para}</p>
                                    </section>
                                )
                            })
                        }
                    </section>
                </section>
            </Wrapper>
        </section>
    )
}

export default Tsec;
