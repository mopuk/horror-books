import { useRouteError, Link } from "react-router-dom";


export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <p>
                <i id="error">{error.statusText || error.message}</i>
            </p>
            <Link id="errorBtn" to="/horror-books/home">Go to home page</Link>
        </div>
    )
}