import * as React from "react";
import  Layout from "./Layout";
// import React, {CSSProperties} from "react";

export interface Props {
    compiler: string;
    framework: string;
};

export default function App() {
    return (
        <Layout />
    );
}

// const centeredContent: React.CSSProperties = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100%"
// }

// const theme: React.CSSProperties = {
//     color: "purple",
// }

// const style = {...centeredContent, ...theme};














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