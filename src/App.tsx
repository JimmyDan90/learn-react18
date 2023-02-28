import Router from "@/routers/index";
import { HashRouter } from "react-router-dom";

export const App = () => {
	return (
		<HashRouter>
			<Router />
		</HashRouter>
	);
};
