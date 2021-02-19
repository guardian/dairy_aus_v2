import { Component, render, h, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { useSelector } from "react-redux";

import SocialBar from 'shared/js/SocialShare';

const Header  = (props) => {

    const data = useSelector(state=>state.global ? state.global[0] : {headline:'',standfirst:'',shareUrl:"", shareTitle:""});

    return (
        <Fragment>
        <div className ="hero" style="background-image: url(<%= path %>/header.jpg);" alt="" />
            <div className="max-container">
                <div className="header">
                    <header>
                        <h1>{data.headline}</h1>
                        <p>{data.standfirst}</p>
                    </header>
                    <div className='client'>
                        <p>Paid for by</p>
                        <img src="<%= path %>/da_logo.svg" width="120" alt="" />
                        <SocialBar url={data.shareUrl} title={data.shareTitle} />
                    </div>
            </div>
        </div>
    </Fragment>
    )
}

export default Header;