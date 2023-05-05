import { useRef, useMemo } from 'react'
import Footer from "../Footer"
import LoginModal from "../LoginModal"
import { Button, Divider } from 'antd';
import "./index.scss"
import { store } from "@/redux";
import { connect } from "react-redux";
import UserTab from '../UserTab';

const SideBar = () => {
  const { token } = store.getState().user

  const showLogin =  useMemo(() => {
    console.log('token', token)
    return !!token
  }, [token])

  interface ModalRef {
		showModal: () => void;
	}
  const infoRef = useRef<ModalRef>(null);

  const showLoginModal = () => {
    infoRef.current!.showModal()
  }

  return (
    <>
      <div className="side_bar">
        <aside style={{display: showLogin?'block':'none'}}>
          {/* 左侧区域 */}
          {/* <Button type="primary" shape="round" onClick={logOut}>登出</Button> */}
          <UserTab />
        </aside>
        <div style={{display: !showLogin?'flex':'none'}} className="login_area">
          <Button type="primary" shape="round" size="large" onClick={showLoginModal}>登录</Button>
        </div>
        <div className="divider">
          <Divider />
        </div>
        <span>token: {token}</span>
        <span>showLogin: {showLogin}</span>
        <Footer />
      </div>
      <LoginModal innerRef={infoRef} />
    </>
  )
}
const mapStateToProps = (state: any) => state.user;
export default connect(mapStateToProps, null)(SideBar);
