import React from "react";

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1> Testing without jsx</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
         React.createElement('h2',null,'testing with jsx')
    )
}
export default Hello