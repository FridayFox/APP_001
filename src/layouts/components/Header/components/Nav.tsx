import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';

// * MenuInfo
declare interface MenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

const Nav = () => {
  const [current, setCurrent] = useState('export');

  // 切换组件大小
	const onClick = (e: MenuInfo) => {
    console.log('菜单点击事件----->', e)
    setCurrent(e.key);
	};

  const items: MenuProps['items'] = [
    {
      key: "export",
      disabled: false,
      label: <span>发现</span>
    },
    {
      key: "create",
      disabled: false,
      label: <span>创作者服务</span>
    },
    {
      key: "about",
      disabled: false,
      label: <span>关于我们</span>
    }
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  )
}
export default Nav