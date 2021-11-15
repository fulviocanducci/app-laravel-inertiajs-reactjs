import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../layout";

function Home(props: any) {
    return (
        <div>
            <h3>Home</h3>
            <div></div>
        </div>
    );
}

Home.layout = (page: JSX.Element) => <Layout children={page} />;

export default Home;
