import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Maria Marceneira</div>
                <div className="footer_copyright">
                    Maria Marceneira 2019. Instagran&nbsp;
                    <a href="www.instagram.com/mariamarceneira">mariamarceneira</a>
                </div>

            </Fade>
        </footer>
    );
};

export default Footer;