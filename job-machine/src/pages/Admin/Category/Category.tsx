import React from 'react';
import { ContainerCategory } from './Category.styled';
import FormAddCategory from 'components/category/FormAddCategory';
import SearchCategory from 'components/category/SearchCategory';
import TableCategory from 'components/category/TableCategory';
import { Flex } from 'antd';

const Category = () => {
  return (
    <ContainerCategory>
      <h1>Category Managements</h1>
      <Flex justify='space-evenly'>
        <FormAddCategory className='category-add' />
        <div className='category-management'>
          <SearchCategory />
          <TableCategory />
        </div>
      </Flex>
    </ContainerCategory>
  );
};

export default Category;
