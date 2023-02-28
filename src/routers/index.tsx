import { useRoutes, Navigate, RouteObject } from "react-router-dom";
import { Login } from "@/views/login/index";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};
export default Router;
