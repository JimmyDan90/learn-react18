import React from "react";
import lazyload from "@/routers/utils/lazyload";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/dataScreen/index",
				element: lazyload(React.lazy(() => import("@/views/dataScreen/index"))),
				meta: {
					requiresAuth: true,
					title: "数据大屏",
					key: "dataScreen"
				}
			}
		]
	}
];

export default dataScreenRouter;
