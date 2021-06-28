import React from 'react';

const Details = ({itm}) => {
    const {title,text1,text2,img} = itm;
    
    return (
        <div className="d-flex justify-content-center align-items-center m-3">
            <div className="col-6 p-5 m-3">
                <h1 className="my-5">{title}</h1>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <div className="col-6 p-5 m-3">
                <img src={img} alt="demo" className="img-fluid" />
            </div>
        </div>
    );
};

export default Details;