import { useRef } from 'react'
import { Button, message } from 'antd';
import { setToken } from "@/redux/modules/user/action";
import { connect } from "react-redux";

const LoginForm = (props: any) => {
  const { closeModal, setToken } = props;

  const account = useRef({} as HTMLInputElement);
  
  const password = useRef({} as HTMLInputElement);

  const handleSubmit = () => {
    const accountValue = account.current.value;
    const passwordValue = password.current.value
    console.log('当前登录账户为------>', accountValue||'未输入账号');
    console.log('登录密码为------>', passwordValue||'未输入密码');
    // 校验

    //
    if (!!accountValue && !!passwordValue) {
      setToken('1');
      message.success('登录成功');
      closeModal()
    } else {
      message.error('登录失败');
    }
    
  };

  return (
    <div className='login_wrapper'>
        <div className='title'>小红书-标记我的生活</div>
        <div className='form-group'>
            <input type="text" required ref={account} />
            <label>用户名</label>
        </div>
        <div className='form-group'>
            <input type="password" required ref={password} />
            <label>密码</label>
        </div>
        <div className='login_button'>
            <Button shape="round" onClick={handleSubmit}>登录</Button>
        </div>
    </div>
  )
}
const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(LoginForm);
 