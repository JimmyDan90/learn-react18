import React from "react";
import lazyload from "@/routers/lazyload";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/dataScreen",
				element: lazyload(React.lazy(() => import("@/views/dataScreen/index"))),
				meta: {
					requiresAuth: false,
					title: "数据大屏",
					key: "dataScreen"
				}
			}
		]
	}
];

export default dataScreenRouter;
