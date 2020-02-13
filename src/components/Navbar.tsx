import * as React from "react";

export default function Navbar() {
    return (
        <div style={HeaderStyle}>
            <h1 style={headerItem}>React playground</h1>
        </div>
    );
}



const HeaderStyle: React.CSSProperties = {
    height: '4em',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',
    alignItems: 'stretch',
    padding: '0 1em',
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