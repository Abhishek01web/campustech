import React from 'react'
import Wrapper from '../wrapper/wrapper';

import './fsec.scss'

const Fsec = () => {
    return (
        <Wrapper className={'fsec_container'}>
            <Wrapper>
                <section className='fsec'>
                    <section className='fsec_left'>
                        <h1 className='fsec_left_h'>Ready to give your <span id='orange_text'>institution an upgrade ?</span></h1>
                        <button className='fsec_left_btn'>
                            Contact Us
                        </button>
                    </section>
                </section>
            </Wrapper>
            <section>
                <section className='fsec_right'>
                    <img src="/girl.png" alt="girl" className='girl' />
                </section>
            </section>
        </Wrapper >
    )
}

export default Fsec;
