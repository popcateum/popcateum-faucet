import { Component } from "react";

export default class Layout extends Component {
    public render() {
        return <>
            {this.props.children}
        </>;
    }
}
