import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const onSearch = value => console.log(value);

const SearchBar = () => {
    return (
        <div className="search">
            <Space direction="vertical">
                <Search
                    placeholder="input place of date"
                    onSearch={onSearch}
                    enterButton />
            </Space>
        </div>

    )
}

export default SearchBar;
