import { Link } from "react-router-dom"

export function MainPage() {
    return (
        <>
            <h1>Hello world</h1>
            <Link to={"/dashboard"}>
                <p>Dashboard</p>
            </Link>
        </>
    )
}