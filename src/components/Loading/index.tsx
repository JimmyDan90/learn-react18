import { Spin } from "antd";
import "./index.scss";

export const Loading = ({ tip = "Loading…" }: { tip?: string }) => {
	return <Spin tip={tip} size="large" />;
};
