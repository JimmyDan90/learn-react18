import logo from "@/assets/images/logo.png";

export const Logo = () => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			<h2 className="logo-text">Admin</h2>
		</div>
	);
};
