import React from "react";
import lazyload from "@/routers/util/lazyload";
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
					keepAlive: true,
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
		]
	}
];

export default homeRouter;
