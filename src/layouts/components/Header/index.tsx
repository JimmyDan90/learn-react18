import { Layout } from "antd";
import { AvatarIcon } from "./components/AvatarIcon";
import { BreadcrumbNav } from "./components/BreadcrumbNav";
import { CollapseIcon } from "./components/CollapseIcon";
import "./index.scss";

const { Header } = Layout;

export const LayoutHeader = () => {
	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
				<BreadcrumbNav />
			</div>
			<div className="header-ri">
				<AvatarIcon />
			</div>
		</Header>
	);
};
