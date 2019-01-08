import React from "react";

import Javascript_Logo from '../images/carousel/javascript.png';
import React_Logo from '../images/carousel/react.png';
import Node_Logo from '../images/carousel/node.png';
import mySQL_Logo from '../images/carousel/mySQL.jpg';
import MongoDB_Logo from '../images/carousel/mongoDB.png';
import Bootstrap_Logo from '../images/carousel/bootstrap.png';
import GitHub_Logo from '../images/carousel/github.png';
import Yarn_Logo from '../images/carousel/yarn.jpg';
import JQuery_Logo from '../images/carousel/jquery.png';
import HTML_CSS_Logo from '../images/carousel/html_css.png';
import Express_Logo from '../images/carousel/express.png';
import Heroku_Logo from '../images/carousel/heroku.png';

class Carousel extends React.Component {

    render() {
        return (
            <section id="slideshow">
                <div className="entire-content fade-in-fwd">
                    <div className="content-carrousel">
                        <figure className="shadow"><img alt='Javascript logo' src={Javascript_Logo} /></figure>
                        <figure className="shadow"><img alt='React logo' src={React_Logo} /></figure>
                        <figure className="shadow"><img alt='Node logo' src={Node_Logo} /></figure>
                        <figure className="shadow"><img alt='MySQL logo' src={mySQL_Logo} /></figure>
                        <figure className="shadow"><img alt='MongoDB logo' src={MongoDB_Logo} /></figure>
                        <figure className="shadow"><img alt='Bootstrap logo' src={Bootstrap_Logo} /></figure>
                        <figure className="shadow"><img alt='GitHub logo' src={GitHub_Logo} /></figure>
                        <figure className="shadow"><img alt='Yarn logo' src={Yarn_Logo} /></figure>
                        <figure className="shadow"><img alt='HTML&CSS Logo' src={HTML_CSS_Logo} /></figure>
                        <figure className="shadow"><img alt='JQuery logo' src={JQuery_Logo} /></figure>
                        <figure className="shadow"><img alt='Expres logo' src={Express_Logo} /></figure>
                        <figure className="shadow"><img alt='Heroku logo' src={Heroku_Logo} /></figure>
                    </div>
                </div>
            </section>
        );
    }
}

export default Carousel;