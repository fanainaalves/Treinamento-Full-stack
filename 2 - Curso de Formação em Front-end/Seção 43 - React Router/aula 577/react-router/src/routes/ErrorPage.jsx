import { useRouterError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouterError();

    console.log(error)
    return (
        <div>
            <p>Ops temos um erro!</p>
            <p>{error.statusText}</p>
            <p>{error.error.message}</p>
        </div>
    )
}

export default ErrorPage;