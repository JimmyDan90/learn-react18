import { useRoutes, Navigate, RouteObject } from "react-router-dom";
import { NotFound } from "@/components/ErrorMessage/404";
import { LayoutIndex } from "@/layouts";
import { Login } from "@/views/login";
import { Home } from "@/views/home";
import { DataScreen } from "@/views/DataScreen";
import { UseHook } from "@/views/proTable/useHook";
import { UseComponent } from "@/views/proTable/useComponent";
import { DataVisualize } from "@/views/dashboard/dataVisualize";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		element: <LayoutIndex name="我是参数" />,
		children: [
			{
				path: "/home",
				element: <Home />
			},
			{
				path: "/dataScreen",
				element: <DataScreen />
			},
			{
				path: "/proTable/useHooks",
				element: <UseHook />
			},
			{
				path: "/proTable/useComponent",
				element: <UseComponent />
			},
			{
				path: "/dashboard/dataVisualize",
				element: <DataVisualize />
			}
		]
	},
	{
		path: "*",
		element: <NotFound />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};
export default Router;
