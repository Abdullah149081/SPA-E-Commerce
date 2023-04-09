import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const { error } = useRouteError();

  return (
    <>
      <div id="notfound">
        <div className="notfound max-w-lg w-full text-center leading-4 ">
          <div className="notfound-404 h-28 md:h-48">
            <h1 className="md:text-9xl text-8xl font-bold m-0 text-[#232323] font-mono">
              4<span></span>4
            </h1>
          </div>
          <div className="space-y-4 mb-4">
            <h2 className="text-2xl font-bold m-0 uppercase text-[#232323]">Oops! Page Not Be Found</h2>
            <p className="text-error font-medium text-2xl">
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
          <Link to="/">Back to homepage</Link>
        </div>
      </div>
    </>
  );
}
