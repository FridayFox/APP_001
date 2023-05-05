import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ExploreModule = () => {
    return (
      <div className='export'>
        <Input
          placeholder="export interest in life"
          suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
      </div>
    )
  }
  export default ExploreModule