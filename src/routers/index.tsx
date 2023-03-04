import React from "react";
import { useRoutes, Navigate, RouteObject } from "react-router-dom";
import lazyload from "./lazyload";
import Login from "@/views/login/index";
import LayoutIndex from "@/layouts/index";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />
		// element: lazyLoad(React.lazy(() => import("@/views/login/index"))),
	},
	{
		element: <LayoutIndex />,
		// element: lazyLoad(React.lazy(() => import("@/layouts/index"))),
		children: [
			{
				path: "/home/index",
				element: lazyload(React.lazy(() => import("@/views/home/index")))
			},
			{
				path: "/dataScreen",
				element: lazyload(React.lazy(() => import("@/views/dataScreen/index")))
			},
			{
				path: "/proTable/useHooks",
				element: lazyload(React.lazy(() => import("@/views/proTable/useHook/index")))
			},
			{
				path: "/proTable/useComponent",
				element: lazyload(React.lazy(() => import("@/views/proTable/useComponent/index")))
			},

			{
				path: "/dashboard/dataVisualize",
				element: lazyload(React.lazy(() => import("@/views/dashboard/dataVisualize/index")))
			}
		]
	},
	{
		path: "/404",
		element: lazyload(React.lazy(() => import("@/components/ErrorMessage/404")))
	},
	{
		path: "/403",
		element: lazyload(React.lazy(() => import("@/components/ErrorMessage/403")))
	},
	{
		path: "/500",
		element: lazyload(React.lazy(() => import("@/components/ErrorMessage/500")))
	},
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
