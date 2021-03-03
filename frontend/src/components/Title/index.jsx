import React from 'react';

import './Title.css';

const Title = (props) =>{

    return(
        <>
            <div className="w-100 p-4 bg-light">
                <h4 className="text-center text-title" >{ props.title }</h4>
            </div>
            
        </>
    );
}


export default Title;