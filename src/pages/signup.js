import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import {Helmet} from "react-helmet";

const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
}));

const caroStyle = {
    height: 600,
    flex: 1,
    backgroundColor: '#3b4252',

}



const Home = () => {
    return (
        <body class="background">
        <Helmet bodyAttributes={{style: 'background-color: #2e3440', color: '#ECEff4'}}>
            <meta charSet='utf-8' />
            <title>StudentLettings</title>
        </Helmet>
        <div class='row'>
            <div class='columnLeft'>
                <div class='blue-column'>
                    <Carousel images={images} style={caroStyle} />
                    <div class='row'>
                        <div id='featureLeftCol'>
                            <div class='red-column'>
                                <h1 id='featureTitle'> some description of a house that is for lettings</h1>
                                <body id='featureDesc'>Description of house for letting awudhyiauwhdiahwiduhawiudhiauwhdiuahwdi uahwd iuahwd iuahwd iauhwdiuahwiduhailhufiuawhfoaiuwefasoef asoiefuhawfiuasehfiuoahfosiuehfasioeufhasdfijnaiueafhsifuwhieufh iawuhefoaiuewhfoiauwdhfiuwahefiuawhodifuhawiefuhasdijfhawioefuhawidjhawef</body>
                            </div>
                        </div>
                        <div id='featureRightCol'>
                            <div class='purple-column'>
                                <h1 style={{display: 'flex', justifyContent: "center", alignItems:"center",}}>$500pcm</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='columnRight'>
                <div class='searchForm'>
                    <div>
                        <form>
                            <input placeholder="Enter a Town, City or Post Code..." style={{width: 500, justifyContent:"center", alignItems:"center"}}></input>

                            <br />
                            <select class="selectOption">
                                <option value="">ANY</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5+</option>

                            </select>
                            <label>Bedrooms</label>
                            <br />
                            <select className="selectOption">
                                <option value="">ANY</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4+</option>
                            </select>
                            <label>Bathrooms</label>
                            <br />
                            <select className="selectOption">
                                <option value="">ANY</option>
                                <option value="">500</option>
                                <option value="">600</option>
                                <option value="">700</option>
                                <option value="">800</option>
                                <option value="">900</option>
                                <option value="">1000</option>
                                <option value="">1100</option>
                                <option value="">1200</option>
                                <option value="">1300</option>
                                <option value="">1400</option>


                            </select>
                            <label>Max Price(pcm)</label>
                            <br />
                            <select className="selectOption">
                                <option value="">ANY</option>
                                <option value="">Distance</option>
                            </select>
                            <label>Distance</label>
                            <br />
                            <button style={{width: 400}}>Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </body>

    );
};

export default Home;
