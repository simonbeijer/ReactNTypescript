import * as React from "react";
import Navbar from "./Navbar"
import Content from "./Content"

// import React, {CSSProperties} from "react";

// export interface Props {
//     compiler: string;
//     framework: string;
// };

export default function Layout() {
    return (
        <div style={LayoutStyle}>
            <Navbar />
            <Content />
        </div>
    );
}

const LayoutStyle: React.CSSProperties = {
    height: '100%',
    width: '100%'
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