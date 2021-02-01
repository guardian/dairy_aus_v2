// import "./../../css/image_grid.scss";

import { Component, render, h, Fragment } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import GridItem from "./GridItem";


const ImageGrid  = (props) => {



    const handleTileExpand = (index) => {
        expandState[index] = !expandState[index];
        if (currentExpanded !== null && currentExpanded != index) expandState[currentExpanded] = 0;
        // console.log(expandState, currentExpanded, index);
        setCurrentExpanded(index);
        setExpandState(expandState.slice());
    }

    const [expandState, setExpandState] = useState( new Array(10).fill(0,0,10));
    const [currentExpanded, setCurrentExpanded] = useState(null);

    const itemClasses = new Array(10).fill('',0,10);
    itemClasses[0] = 'w-100';
    itemClasses[1] = 'w-50';
    itemClasses[6] = 'w-50';
    itemClasses[7] = 'w-50';
    // const gridItems = new Array(10).fill(0,0, 10).map((i, n)=> {
    const gridItems = props.cards.map((i, n)=> {
        console.log(i);
        // return <GridItem className={"grid-item " + (itemClasses[n]) + (expandState[n] ? " active" : "")} key={n} index={n} onClick={ expandState[n] ? null : () => handleTileExpand(n)} expanded={expandState[n]}>Grid item {n}</GridItem>;
        const content = i.content !== '' ? i.content : `Grid item ${n}`;
        const classNames = [
            'grid-item',
            i.classes,
            i.type
        ];
        if (i.expandable) classNames.push('expandable');
        if (expandState[n]) classNames.push('active');

        return <GridItem className={classNames.join(' ')} key={n} index={n} onClick={ i.expandable? () => handleTileExpand(n) : false} expanded={expandState[n]} toggleFn={handleTileExpand} data={i}>{content}</GridItem>;
    });
    // gridItems.push(<div key="11" className="expander">EXPANDED</div>);
    return (
        <div className="grid" >
            <ul className="grid-container">
                {gridItems}
            </ul>
        </div>
    )
}

export default ImageGrid;