import React, {Component} from 'react';
import styles from "./page.module.scss"

import { Chart, Lines, Dots, Labels, Handlers, Ticks } from "rumble-charts";

const getLine = (length = 10) =>
    [...new Array(length)].map(() => Math.floor(Math.random() * 100));

const series = [
    { name: "variant 1", data: getLine() },
    { name: "variant 2", data: getLine() },
    { name: "variant 3", data: getLine() }
];

const colors = "category10";

// hide all labels in a parent element

interface Element {
    style: CSSStyleDeclaration
}
function hideAll(el: HTMLElement){
     Array.from(el.querySelectorAll<HTMLElement>(".ctr-dot text")).map((el)=>{el["style"].opacity = "0";}) ;
    //  [...el.querySelectorAll(".ctr-dot text")].map(el => {
    //     el.style.opacity = 0;
    // });
};

// hide all labels when mouse leaves
const handleMouseLeave = ({ nativeEvent }:{nativeEvent: any}) => {
    hideAll(nativeEvent.target.viewportElement);
};

// find closest label and show only it
const handleMouseMove = ({ closestPoints, originalEvent }:{closestPoints: any, originalEvent: any}) => {
    const closest = closestPoints[0];
    if (!closest) {
        return;
    }
    const { seriesIndex, pointIndex } = closest;
    hideAll(originalEvent.target.viewportElement);
    originalEvent.target.viewportElement.querySelector(
        `.ctr-series-${seriesIndex} .ctr-dot-${pointIndex} text`
    ).style.opacity = 1;
};

const AboutEmpty: React.FC = () => {
    return (
        <div className='w-100 h-100 bg-secondary d-flex align-items-center justify-content-center'>
            <h1 className='text-light'>ABOUT</h1>
            <div className={styles.axis}>
                <Chart viewBox="0 0 1000 400" series={series}>
                    <Ticks
                        axis="y"
                        lineLength="100%"
                        lineVisible={true}
                        lineStyle={{ stroke: "lightgray" }}
                        labelStyle={{
                            textAnchor: "end",
                            dominantBaseline: "middle",
                            fill: "black"
                        }}
                        labelAttributes={{ x: -5 }}
                    />

                    <Ticks
                        axis="x"
                        label={({ index, props }) =>
                            props.series[index] && props.series[index].name
                        }
                        labelStyle={{
                            textAnchor: "middle",
                            dominantBaseline: "text-before-edge",
                            fill: "black"
                        }}
                    />

                    <Lines colors={colors} />
                    <Handlers onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <Dots colors={colors} />
                        <Labels
                            className="ctr"
                            colors={colors}
                            label={({ point }: {point: any}) => `${point.y} click-throughs`}
                            dotStyle={{
                                textAnchor: "middle",
                                dominantBaseline: "text-after-edge",
                                fontFamily: "sans-serif",
                                fontSize: "0.8em",
                                opacity: 0
                            }}
                            labelAttributes={{
                                y: -4
                            }}
                        />
                    </Handlers>
                </Chart>
            </div>
        </div>
    );
};

export default AboutEmpty;