import { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
    public render() {
        return <>
            <main>
                Vector Finance
            </main>
            {sessionStorage.__spa_path && <Redirect to={sessionStorage.__spa_path} />}
        </>;
    }

    public componentDidMount() {
        sessionStorage.removeItem("__spa_path");
    }
}
