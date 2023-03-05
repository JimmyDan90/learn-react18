import ReactDOM from "react-dom";
import "@/styles/reset.less";
import "@/styles/common.less";
import "@/assets/iconfont/iconfont.less";
import "antd/dist/antd.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux";
import App from "@/App";

ReactDOM.render(
	// * react严格模式
	// <React.StrictMode>
	// * react-redux写法
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	// </React.StrictMode>,
	document.getElementById("root")
);
