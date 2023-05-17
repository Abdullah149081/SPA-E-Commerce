import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const { error } = useRouteError();

  return (
    <div id="notfound">
      <div className="notfound px-4 pt-40 w-full max-w-xl lg:pt-0 lg:pr-0 lg:pl-40">
        <div className="notfound-404 " />
        <div className="space-y-4">
          <h1 className="text-7xl font-bold">404</h1>
          <h2 className="text-2xl font-bold uppercase">Oops! Page Not Be Found</h2>
          <p className="font-medium text-lg text-error">{error?.status || error?.message}</p>
          <Link className="inline-block" to="/">
            <button type="button" className="btn">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
