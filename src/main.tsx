import { createRoot } from "react-dom/client";
import "@/styles/reset.less";
import "@/styles/common.less";
import "@/assets/iconfont/iconfont.less";
import "antd/dist/antd.css";
import "@/language/index";
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
