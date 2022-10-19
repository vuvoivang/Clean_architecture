/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

function withLayoutWrapper (HocComponent, containerClass = "") {
  return class extends Component<any> {
    render() {
      return (
        <div className={`zFintech-layout ${containerClass}`}>
          <div className="page-wrapper">
            <HocComponent {...this.props}/>
          </div>
        </div>
      );
    }
  };
};

export default withLayoutWrapper;
