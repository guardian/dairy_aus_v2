import gsap from "gsap/gsap-core";
import { Sine } from "gsap/gsap-core";
import { Component, render, h, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import Expander from "./Expander";


const GridItem = (props) => {
    // const [expanded, setExpanded] = useState(false);
    const handleExpand = (e) => {
        // setExpanded(!expanded);
    }

    // const [expanderHeight, setExpanderHeight] = useState();

    const getContent = () => {
        // console.log(props.children);
        if (props.children) {
            return props.children;
            return (
                <header class="container">
                            <h1>Meet the dairy farmers who want to be part of the climate solution</h1>
                            <p>We take you to the farm gate to hear from the diary farmers around Australia who believe in a more sustainable, environmentally-friendly way of farming. A growing collection of sustainably minded farmers are committed to being part of the solution to the climate emergency.</p>
                        </header>
            );
        } else {
            return (
                <p>
                No content {props.index + 1}
                </p>
            ); 
        }
    };
    const getContent2 = () => {

            return ("<div class='wrap'><a href='#'>How tree planting lorum ipsum sit dolor »</a></div>"); 
    };

    const expanderRef = useRef(null);

    // useEffect(()=>{
    //     console.log(expanderRef);
    //     setExpanderHeight(expanderRef.current.offsetHeight);
    //     // console.log(expanderRef.current.offsetHeight);
    //     gsap.set(expanderRef.current,{height: '0%', autoAlpha: 0, scale: .8});
    // },[]);
    // useEffect(()=>{
    //     if (props.expanded) {
    //         gsap.to(expanderRef.current,{duration: 0.8, autoAlpha: 1, scale: 1, height: expanderHeight, ease: Sine.easeInOut});
    //     } else {
            
    //         gsap.to(expanderRef.current,{duration: 1, autoAlpha: 0, scale: 0.8, height: 0, ease: Sine.easeInOut});
    //     }
    // });


    // return (
    //     <li {...props} dangerouslySetInnerHTML={{__html: getContent()}}></li>
        
    // );

    return (
        <Fragment>
        <li {...props} dangerouslySetInnerHTML={{__html: getContent()}}>
        </li>
        
        <Expander 
            className={"expander " + (props.expanded && 'active')}  
            ref={expanderRef} 
            expanded={props.expanded} 
            index={props.index} 
            toggleFn={props.toggleFn}
            data={props.data}
            >
                Expanded {props.index + 1}
        </Expander>

        </Fragment>
    );
}


export default GridItem;