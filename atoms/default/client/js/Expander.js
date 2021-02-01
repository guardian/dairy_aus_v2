import gsap from "gsap/gsap-core";
import { Sine, Back } from "gsap/gsap-core";
import { Component, render, h, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import AudioPlayer from "/shared/js/AudioPlayer";


const Expander = (props) => {

    const [expanderHeight, setExpanderHeight] = useState();
    const expanderRef = useRef(null);
    const closeRef = useRef(null);

    useEffect(()=>{
        // console.log(expanderRef);
        setExpanderHeight(expanderRef.current.offsetHeight);
        // console.log(expanderRef.current.offsetHeight);
        gsap.set(expanderRef.current,{height: '0%', autoAlpha: 0, scale: .8});
        gsap.set(closeRef.current,{autoAlpha: 0, scale: 0});
    },[]);
    useEffect(()=>{
        if (props.expanded) {
            gsap.to(expanderRef.current,{duration: 0.8, autoAlpha: 1, scale: 1, height: expanderHeight, ease: Sine.easeInOut});
            gsap.to(closeRef.current,{duration: 0.4, autoAlpha: 1, scale: 1, ease: Back.easeOut, delay: 0.7});
        } else {
            
            gsap.to(expanderRef.current,{duration: 1, autoAlpha: 0, scale: 0.8, height: 0, ease: Sine.easeInOut});
            gsap.to(closeRef.current,{duration: 0.4, autoAlpha: 0, scale: 0, ease: Back.easeIn});
        }
    });    

    const handleClose = (e) => {
        e.preventDefault();
        // console.log(props.index);
        props.toggleFn(props.index)
    }

    return (
        <div {...props} ref={expanderRef}>
            <a href="#" className="close" onClick={handleClose} ref={closeRef}></a>
            {props.data.type === 'image' && 
            <div className="container" dangerouslySetInnerHTML={{__html: props.data.expander}}>
                
            </div>
            }
            {props.data.type === 'audio' && 
            <div className="container d-flex d-center">
                <AudioPlayer title="Ian Cochrane on emissions" src="<%= path %>/audio/clip_1_auspost.mp3" subs="<%= path %>/audio/clip_1_auspost.vtt" />
            </div>
            }
        </div>
    );
}


export default Expander;