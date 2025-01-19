import React from "react";

export default function Footer() {

    return (
        <section id="footer" className="footer">

            <div className="footer-contacts">
                <div className="footer-contacts-left">
                    <div className="footer-contacts-title footer-contacts-title-head">Свяжитесь с нами</div>
                    <ul className="footer-contacts-list">
                        <div className="footer-contact">
                            <div className="footer-contact-icon footer-contact-icon-phone"></div>
                            <p className="footer-contact-text">8(800)000 00 00</p>
                        </div>
                        <div className="footer-contact">
                            <div className="footer-contact-icon footer-contact-icon-mail"></div>
                            <p className="footer-contact-text">inbox@mail.ru</p>
                        </div>
                        <div className="footer-contact">
                            <div className="footer-contact-icon footer-contact-icon-skype"></div>
                            <p className="footer-contact-text">tu.train.tickets</p>
                        </div>
                        <div className="footer-contact">
                            <div className="footer-contact-icon footer-contact-icon-location"></div>
                            <p className="footer-contact-text">
                                г. Москва ул. Московская 27-35 555 555
                            </p>
                        </div>
                    </ul>
                </div>

                <div className="footer-subscribe-right">
                    <div className="footer-subscribe-title footer-contacts-title-head">Подписка</div>
                    <form className="footer-subscribe-form">

                        <label>Будьте в курсе событий</label>
                        <div className="footer-subscribe-contener">
                            <input className="footer-subscribe-input" placeholder="e-mail"
                                type="email" id="footer-subscription"
                            />
                            <button type="button" className="footer-subscribe-button"
                                id="footer-subscribe-button">ОТПРАВИТЬ</button>
                        </div>
                    </form>
                    <h4 className="footer-subscribe-social-title footer-contacts-title-head">Подписывайся на нас</h4>
                    <div className="footer-subscribe-socials">
                        <div className="footer-subscribe-social footer-subscribe-social-youtube">
                            <a href="#" className="footer-subscribe-social-link" />
                        </div>
                        <div className="footer-subscribe-social footer-subscribe-social-in">
                            <a href="#" className="footer-subscribe-social-link" />
                        </div>
                        <div className="footer-subscribe-social footer-subscribe-social-google">
                            <a href="#" className="footer-subscribe-social-link" />
                        </div>
                        <div className="footer-subscribe-social footer-subscribe-social-facebook">
                            <a href="#" className="footer-subscribe-social-link" />
                        </div>
                        <div className="footer-subscribe-social footer-subscribe-social-twitter">
                            <a href="#" className="footer-subscribe-social-link" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-logo">Лого</div>
                <a className="footer-bottom-up" href="#headerLogo"></a>
                <div className="footer-bottom-copyright">2018 WEB</div>
            </div>
        </section>
    );
}