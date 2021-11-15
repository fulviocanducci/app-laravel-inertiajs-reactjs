import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../layout";

function Help(props: any) {
    return (
        <div>
            <h3>Help</h3>
            <div></div>
        </div>
    );
}

Help.layout = (page: JSX.Element) => <Layout children={page} />;

export default Help;
