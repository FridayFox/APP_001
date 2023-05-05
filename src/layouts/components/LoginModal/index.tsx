import {useState, useImperativeHandle, Ref} from 'react'
import { Modal } from 'antd';
import "./index.scss"
import LoginForm from './components/LoginForm';
import LeftArea from './components/LeftArea';

interface Props {
	innerRef: Ref<{ showModal: () => void } | undefined>;
}

const LoginModal = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

	useImperativeHandle(props.innerRef, () => ({
		showModal
	}));

	const showModal = () => {
		setModalVisible(true);
	};

	const handleClose = () => {
		setModalVisible(false);
	};

	return (
		<Modal
      open={modalVisible}
      onCancel={handleClose}
      destroyOnClose={true}
      footer={null}
      width={520}
      centered={true}
    >
      <LeftArea />
      <LoginForm closeModal={handleClose}/>
		</Modal>
	);
}
export default LoginModal
