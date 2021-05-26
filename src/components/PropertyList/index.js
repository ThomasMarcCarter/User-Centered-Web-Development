import React from "react";


const PropertyList = () => {
    return (


        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <ul className="list-group shadow" style={{width: 1200, marginLeft: -240}}>
                        <li className="list-group-item">
                            <div
                                className="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2">Awesome
                                        product</h5>
                                    <p className="font-italic text-muted mb-0 small">Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit. Suscipit
                                        fuga autem maiores necessitatibus.</p>
                                    <div
                                        className="d-flex align-items-center justify-content-between mt-1">
                                        <h6 className="font-weight-bold my-2">$120.00</h6>
                                        <ul className="list-inline small">
                                            <li className="list-inline-item m-0"><i
                                                className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i
                                                className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i
                                                className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i
                                                className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i
                                                className="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <img
                                    src="https://res.cloudinary.com/mhmd/image/upload/v1556485076/shoes-1_gthops.jpg"
                                    alt="Generic placeholder image" width="200"
                                    className="ml-lg-5 order-1 order-lg-2"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default PropertyList;