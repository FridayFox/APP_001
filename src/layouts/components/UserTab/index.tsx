import { useState } from "react";
import { ManOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, message, Popover } from "antd"
import { connect } from "react-redux";
import { setToken } from "@/redux/modules/user/action";
import Avatar from "@/assets/img/avatar.webp";
import "./index.scss"

const UserTab = (props: any) => {
  const { setToken } = props;
  const [open, setOpen] = useState(false);
  const logout = () => {
    setOpen(false);
    setToken("");
    message.success("退出登录成功！");
  }
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return(
    <div className="user_tab">
      
      <div className="avatar_wrapper">
        <img className="user-images" src={Avatar} />
        <Popover
          content={
            <div className="btn_wrapper">
              <a onClick={hide}>cancle</a>
              <a onClick={logout}>confirm</a>
            </div>
          }
          title="confirm to logout"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Button type="primary" shape="circle" icon={<LogoutOutlined />} />
        </Popover>
      </div>
      <div className="user-nickname">南风</div>
      <div className="user-content">
        <span className="user-redId">小红书号: 955025990</span>
        <span className="user-IP">IP属地: 北京</span>
      </div>
      <div className="user-desc">哈哈</div>
      <div className="user-tags"><ManOutlined /></div>
      <div className="user-interactions">

      </div>
    </div>
  )
}
const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(UserTab);
