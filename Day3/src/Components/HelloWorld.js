import React from "react";

class HelloWorld extends React.Component{
    render () {
        return (
            <div className="p-3">
                Hello {this.props.name}
            </div>
        )
    }
}

export default HelloWorld