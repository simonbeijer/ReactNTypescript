import * as React from "react";



// import React, {CSSProperties} from "react";

export interface props{
    title: string;
    img: string;
};

export default function SectionItem(props: props) {
    return (
        <div style={ItemStyle}>
            <h3 style={h3Style} >{props.title}</h3>
            <img style={imgStyle} src={props.img} ></img>
        </div>
    );
}



const ItemStyle: React.CSSProperties = {
    height: '30%',
    width: '100%',
    background: 'black',
    color: 'black',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',

}

const imgStyle : React.CSSProperties = {
    objectFit: 'cover',
    width: '96%',
    padding: 0,
    margin: 0
}


const h3Style: React.CSSProperties = {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '2rem',
}

const headerItem: React.CSSProperties = {
    fontSize: '1.7em',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
}








// class App2 extends React.Component<Props> {
//     render() {
//         const { compiler, framework } = this.props
//         return (
//             <h1>
//                 Hello from {compiler} and {framework}!
//             </h1>
//         )
//     }
// }