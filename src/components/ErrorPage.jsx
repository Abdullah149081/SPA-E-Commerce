import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="h-screen text-center flex flex-col justify-center items-center space-y-12">
        <h1 className="text-6xl font-extrabold">Oops!</h1>
        <p className="text-4xl font-bold">Sorry, an unexpected error has occurred.</p>
        <p className="text-error font-medium text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
