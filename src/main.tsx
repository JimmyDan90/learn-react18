import { createRoot } from "react-dom/client";
import "@/styles/reset.less";
import "@/assets/iconfont/iconfont.less";
import "antd/dist/antd.less";
import "@/language/index";
import "@/styles/common.less";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import App from "@/App";

const root = document.getElementById("root");
root &&
	createRoot(root).render(
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	);
