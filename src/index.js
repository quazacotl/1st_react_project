import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';

// class  WhoAmI extends  Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 20
//         }
//     }
//
//     nextYear = () => {
//         this.setState(state => ({
//             years: ++state.years
//         }));
//     }
//
//         render() {
//         const {name, surname, link} = this.props;
//         const {years} = this.state;
//         return (
//             <>
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name}, surname - {surname}, years - {years}</h1>
//                 <a href={link}>My profile</a>
//             </>
//         );
//     }
//
// }

// const All = () => {
//     return (
//         <>
//             <WhoAmI name='klfnjg' surname='jtiyuj' link='linaergk'/>
//             <WhoAmI name='name' surname='surname' link='link'/>
//             <WhoAmI name='name' surname='surname' link='link'/>
//         </>
//     )
// }


ReactDOM.render(<App/>, document.getElementById('root'));



