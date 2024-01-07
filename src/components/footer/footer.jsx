import React from 'react'
import Wrapper from '../wrapper/wrapper';

import './footer.scss'

const Footer = () => {
    return (
        <Wrapper className={'foot'}>
            <Wrapper>
                <section className='footer'>
                    <section className='footer_logo'>
                        <img src="/logo.png" alt="logo" />
                    </section>
                    <section className='footer_content'>
                        <section className='content_f'>
                            <ul>
                                <li>Resources</li>
                                <li>Solutions</li>
                                <li>About Us</li>
                            </ul>
                        </section>
                        <section className='content_s'>
                            <p className='content_s_h'>Contact Us</p>
                            <p>support@campus.technology</p>
                            <p>+91-9980-747-722</p>
                        </section>
                        <section className='content_t'>
                            <p className='content_t_h'>Chat with us</p>
                            <section className='content_t_social_icons'>
                                <img src="/facebook.png" alt="" />
                                <img src="/instagram.png" alt="" />
                                <img src="/twitter.png" alt="" />
                                <img src="/linkedin.png" alt="" />
                            </section>
                        </section>
                    </section>
                    <section className='footer_footer'>
                        <p>@2022 kahan technologies Pvt. Ltd.</p>
                        <p>Designed by <b>Grapdes</b></p>
                    </section>
                </section>
            </Wrapper>
        </Wrapper>

    )
}

export default Footer;
