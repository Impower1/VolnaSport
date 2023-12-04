import Logo from '../static/assets/Logo.png'

function Footer() {
    return ( 
        <div className="wrapper footer-wrapper">
            <footer>
                    <div className="footer-left">
                        <h3>Доступный фитнес личных достижений</h3>
                        <div className="footer-left-bottom">
                            <img src={Logo} alt="" />
                            <p>
                                (812) 337-55-38 <br/>
                                (812) 369-12-83
                            </p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p>
                            г. Санкт-Петербург<br/>
                            м. Московский ворота<br/>
                            м. Электросила<br/>
                            Московский пр., 150 корп. 2<br/>
                        </p>
                    </div>
            </footer>
        </div>
     );
}

export default Footer;