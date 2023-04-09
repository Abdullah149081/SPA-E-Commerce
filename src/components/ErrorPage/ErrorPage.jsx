import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const { error } = useRouteError();

  return (
    <>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>
              4<span></span>4
            </h1>
          </div>
          <div className="space-y-4 mb-4">
            <h2>Oops! Page Not Be Found</h2>
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
