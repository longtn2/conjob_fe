import { Flex, Typography } from 'antd';
import { BaseSelect, Option } from '@/components/common/BaseSelect';
import { BaseButton } from '@/components/common/BaseButton/BaseButton';
import Post from '@/pages/postManagement';

const Banner = () => {
  return (
    <Flex vertical gap='30px'>
      <Flex vertical align='flex-start'>
        <Typography.Title level={2}>Post Management </Typography.Title>
        <Typography.Text type='secondary' strong>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Typography.Text>
      </Flex>

      <Flex gap={10}>
        <BaseSelect
          defaultValue='Move to trash'
          allowClear
          style={{ height: '40px', width: '130px' }}
        >
          <Option value='lucy'>Move to trash</Option>
          <Option value='view'>View</Option>
          <Option value='accept'>Accept</Option>
          <Option value='reject'>Reject</Option>
        </BaseSelect>
        <BaseButton size='large'>Apply</BaseButton>
        <BaseSelect
          defaultValue='All dates'
          allowClear
          style={{ height: '40px', width: '110px' }}
        >
          <Option value='all'>All dates</Option>
          <Option value='week'>Last week</Option>
          <Option value='month'>Last month</Option>
        </BaseSelect>
        <BaseButton size='large'>Filter</BaseButton>
      </Flex>
      <Post />
    </Flex>
  );
};

export default Banner;
