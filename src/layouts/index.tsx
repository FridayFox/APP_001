// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar"
import "./index.scss";

const Layout = () => {
  // const [screenWidth, setCount] = useState(document.body.clientWidth)

	// 监听窗口大小变化
	// const listeningWindow = () => {
	// 	window.onresize = () => {
	// 		return (() => {
	// 			const screenWidthNew = document.body.clientWidth;
  //       setCount(() => screenWidthNew)
	// 		})();
	// 	};
	// };

	// useEffect(() => {
	// 	listeningWindow();
	// }, []);

	return (
		// 这里不用 Layout 组件原因是切换页面时样式会先错乱然后在正常显示，造成页面闪屏效果
		// <section className="container">
		// 	<span>窗口大小</span>
		// 	<span>{screenWidth}</span>
		// 	<Outlet></Outlet>
		// </section>
		<div className="layout">
			<Header />
      <SideBar />
      <main>
        <Outlet></Outlet>
      </main>
		</div>
	);
};

export default Layout
