import { Tabs, message } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { connect } from "react-redux";
import { setTabsList } from "@/redux/modules/tabs/action";
import { routerArray } from "@/routers";
import { searchRoute } from "@/utils/util";
import "./index.less";

const LayoutTabs = (props: any) => {
	// const { TabPane } = Tabs;
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [activeValue, setActiveValue] = useState<string>(pathname);

	useEffect(() => {
		addTabs();
	}, [pathname]);

	// click tabs
	const clickTabs = (path: string) => {
		navigate(path);
	};

	// add tabs
	const addTabs = () => {
		const route = searchRoute(pathname, routerArray);
		let tabsList = JSON.parse(JSON.stringify(props.tabsList));
		if (props.tabsList.every((item: any) => item.path !== route.path)) {
			tabsList.push({ title: route.meta!.title, path: route.path });
		}
		props.setTabsList(tabsList);
		setActiveValue(pathname);
	};

	// delete tabs
	const delTabs = (tabPath: string) => {
		if (tabPath === pathname) {
			props.tabsList.forEach((item: Menu.MenuOptions, index: number) => {
				if (item.path !== tabPath) return;
				const nextTab = props.tabsList[index + 1] || props.tabsList[index - 1];
				if (!nextTab) return;
				navigate(nextTab.path);
			});
		}
		message.success("删除Tabs标签 😆😆😆");
		props.setTabsList(props.tabsList.filter((item: Menu.MenuOptions) => item.path !== tabPath));
	};

	return (
		<Tabs
			activeKey={activeValue}
			onChange={clickTabs}
			hideAdd
			type="editable-card"
			onEdit={path => {
				delTabs(path as string);
			}}
			items={props.tabsList.map((item: Menu.MenuOptions) => {
				return {
					label: (
						<span>
							{item.path == HOME_URL ? <HomeFilled /> : ""}
							{item.title}
						</span>
					),
					key: item.path,
					closable: item.path !== HOME_URL
				};
			})}
		/>
	);
};

const mapStateToProps = (state: any) => state.tabs;
const mapDispatchToProps = { setTabsList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs);
