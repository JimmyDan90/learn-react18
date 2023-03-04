import React from "react";
import { useRoutes, Navigate, RouteObject } from "react-router-dom";
import lazyLoad from "./lazyload";
// import { NotFound } from "@/components/ErrorMessage/404";
// import { LayoutIndex } from "@/layouts";
// import { Login } from "@/views/login";
// import { Home } from "@/views/home";
// import { DataScreen } from "@/views/DataScreen";
// import { UseHook } from "@/views/proTable/useHook";
// import { UseComponent } from "@/views/proTable/useComponent";
// import { DataVisualize } from "@/views/dashboard/dataVisualize";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: lazyLoad(React.lazy(() => import("@/views/login/index")))
	},
	{
		element: lazyLoad(React.lazy(() => import("@/layouts/index"))),
		children: [
			{
				path: "/home",
				element: lazyLoad(React.lazy(() => import("@/views/home/index")))
			},
			{
				path: "/dataScreen",
				element: lazyLoad(React.lazy(() => import("@/views/DataScreen/index")))
			},
			{
				path: "/proTable/useHooks",
				element: lazyLoad(React.lazy(() => import("@/views/proTable/useHook/index")))
			},
			{
				path: "/proTable/useComponent",
				element: lazyLoad(React.lazy(() => import("@/views/proTable/useComponent/index")))
			},
			{
				path: "/dashboard/dataVisualize",
				element: lazyLoad(React.lazy(() => import("@/views/dashboard/dataVisualize/index")))
			}
		]
	},
	{
		path: "/403",
		element: lazyLoad(React.lazy(() => import("@/components/ErrorMessage/403")))
	},
	{
		path: "/500",
		element: lazyLoad(React.lazy(() => import("@/components/ErrorMessage/500")))
	},
	{
		path: "*",
		element: lazyLoad(React.lazy(() => import("@/components/ErrorMessage/404")))
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};
export default Router;
