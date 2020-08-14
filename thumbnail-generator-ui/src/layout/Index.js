import React, { Suspense } from "react";
import Loading from "../components/loading/Loading";
const Login = React.lazy(() => import("../components/loadImage/LoadImage"));
const LoadImage = React.lazy(() => import("../components/login/Login"));

function LayoutApp() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Login />
        <LoadImage />
      </Suspense>
    </>
  );
}

export default LayoutApp;
