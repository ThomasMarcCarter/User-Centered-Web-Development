import React from 'react';
import PropertyList from "../components/PropertyList";
import 'react-gallery-carousel/dist/index.css';
import {Helmet} from "react-helmet";




const Search = () => {
    return (
        <body class="background">
        <Helmet bodyAttributes={{style: 'background-color: #2e3440', color: '#ECEff4'}}>
            <meta charSet='utf-8' />
            <title>StudentLettings</title>
        </Helmet>
            <div className='searchBarRow'>
                <div>
                    <form style={{}}>
                        <input placeholder="Enter a Town, City or Post Code..."
                               style={{marginLeft: 100, width: 500, justifyContent: "center", alignItems: "center"}}></input>

                        <select className='searchSelectOption'>
                            <option value="">ANY</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5+</option>
                        </select>
                        <label htmlFor='bedroom-select'>Bedrooms</label>

                        <select className='searchSelectOption'>
                            <option value="">ANY</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4+</option>
                        </select>
                        <label htmlFor='bathroom-select'>Bathrooms</label>

                        <select className="searchSelectOption">
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
                        <select className="searchSelectOption">
                            <option value="">ANY</option>
                            <option value="">Distance</option>
                        </select>
                        <label>Distance</label>
                        <button style={{marginLeft: 80,width: 200, height: 35}}>Search</button>
                    </form>
                </div>
            </div>
                    <div class='row'>
                        <div id='featureLeftCol'>
                            <div class='red-column'>
                                <PropertyList/>
                            </div>
                        </div>

                            <div id='featureRightCol'>
                                <div class='purple-column'>
                                   <p>please god kill me</p>
                                </div>
                            </div>
                        </div>
        </body>

    );
};

export default Search;
