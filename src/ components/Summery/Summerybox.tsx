import React from "react";
import Required from "./Required";
import ReviewjtValue from "./ReviewjtValue";
import Seafty from "./Seafty";
function Summerybox() {
    return (
        <>
            <section className="Summery">
                <div className="container">
                    <div
                        className="row"
                        style={{
                            borderRadius: "12px",
                            background: "rgba(255, 255, 255, 0.5)",
                            boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                            backdropFilter: "blur(25px)",
                            padding: "30px",
                            paddingTop: "30px",
                            marginBottom: "50px",
                        }}
                    >
                        <div className="col-md-3">
                            <Required />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3">
                                    <ReviewjtValue />
                                </div>
                                <div className="col-md-3">
                                    <Seafty />
                                </div>
                                <div className="col-md-3">
                                    <Seafty />
                                </div>
                                <div className="col-md-3">
                                    <Seafty />
                                </div>
                                <div className="col-md-3">
                                    <Seafty />
                                </div>
                                <div className="col-md-3">
                                    <Seafty />
                                </div>
                                <div className="col-md-3">
                                    <Seafty />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Summerybox;
