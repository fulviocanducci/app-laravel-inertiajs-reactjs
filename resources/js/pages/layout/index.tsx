import { Link } from "@inertiajs/inertia-react";
import React, { ReactChild, ReactChildren } from "react";

interface ILayoutProps {
    children: ReactChild | ReactChildren;
}

function Layout({ children }: ILayoutProps) {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Top navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link href="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/todo" className="nav-link">
                                    Todo
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/help" className="nav-link">
                                    Help
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container">{children}</main>
        </>
    );
}
export default Layout;
