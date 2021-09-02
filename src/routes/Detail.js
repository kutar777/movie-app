import React from "react";

class Detail extends React.Component {
    // called 1st
    render() {
        console.log(this.props);
        const { location } = this.props;
        if (location.state)
            return <span>{location.state.title}</span>;
        else
            return null;
    }
    // called 2nd
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
}
export default Detail;