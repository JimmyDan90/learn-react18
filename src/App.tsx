import Router from "@/routers/index";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};
