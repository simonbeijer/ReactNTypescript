import * as React from "react";
import SectionItem from "./SectionItem";


export default function Content() {
    return (

        <div style={ContentStyle}>
            <SectionItem title='Forest' img='https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'/>
            <SectionItem  title='Sky' img='https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'/>
            <SectionItem  title='desert' img='https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'/>
        </div>
    );
}



const ContentStyle: React.CSSProperties = {
    height: '100%',
    background: 'black',
    color: '#E1E1E1',
    display: 'flex',   
    flexDirection: 'column',
    justifyContent: 'space-between'
}

// const headerItem = {
//     fontSize: '1.7em',
//     margin: 0,
//     padding: 0,
//     display: 'flex',
//     alineItems: 'center',
//     cursor: 'pointer'
// }









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