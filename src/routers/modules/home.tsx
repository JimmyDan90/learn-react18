import React from "react";
import lazyload from "@/routers/utils/lazyload";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 首页模块
const homeRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/home/index",
				element: lazyload(React.lazy(() => import("@/views/home/index"))),
				meta: {
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
		]
	}
];

export default homeRouter;
