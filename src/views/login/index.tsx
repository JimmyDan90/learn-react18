import { Button, message } from "antd";
import "./index.scss";

export const Login = () => {
	return (
		<Button
			type="primary"
			onClick={() => {
				message.success("登录成功！");
			}}
		>
			登录
		</Button>
	);
};
