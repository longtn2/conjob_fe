import React, { useState } from 'react';
import { BaseAvatar } from '@/components/common/BaseAvatar/BaseAvatar';
import {
  Header,
  Author,
  AuthorWrapper,
  DateTime,
  InfoHeader,
  InfoWrapper,
  Title,
  Wrapper,
  Description
} from './BaseArticle.styled';
import AnonymousAvater from '@/assets/images/ano_avt.png';
import { Col, Row, theme } from 'antd';
export interface BaseArticleProps {
  author?: React.ReactNode;
  imgUrl?: string;
  title: string;
  date?: string;
  description: string;
  avatar?: string;
  className?: string;
  postId?: string;
  created_at: Date | string;
  col: number;
}

export const BaseArticle: React.FC<BaseArticleProps> = ({
  title,
  date,
  description,
  author,
  avatar,
  created_at,
  col
}) => {
  const [isShowFullText, setIsShowFullText] = useState(false);

  const getTruncatedDescription = (
    description: string,
    isShowFullText: boolean
  ) => {
    if (col === 6 && !isShowFullText && description?.length > 70) {
      return `${description.substring(0, 70)}  ... `;
    }
    return description;
  };

  const { token } = theme.useToken();
  return (
    <Wrapper>
      <Header
        className="header-card"
        style={{ background: token ? token.colorBgContainer : '#ffffff' }}
      >
        <Row>
          {col !== 6 ? (
            <Col span={6} className="avatar">
              {!!avatar ? (
                <BaseAvatar src={avatar} alt="author" size={60} />
              ) : (
                <BaseAvatar src={AnonymousAvater} alt="author" size={60} />
              )}
            </Col>
          ) : (
            <Col span={1}></Col>
          )}

          <Col span={10}>
            <AuthorWrapper>
              {author && (
                <Author
                  style={{ color: token ? token.colorText : '#ffffff' }}
                  className="author-name"
                >
                  {author}
                </Author>
              )}
              <div className="section-time">
                <DateTime className="date-time">
                  {created_at.toString().replace('T', ' ').substring(0, 19)}
                </DateTime>
              </div>
            </AuthorWrapper>
          </Col>
        </Row>
      </Header>
      <InfoWrapper>
        <InfoHeader>
          <Title
            className="card-title"
            style={{ color: token ? token.colorText : '#ffffff' }}
          >
            {getTruncatedDescription(title, isShowFullText)}
          </Title>
        </InfoHeader>
        <Description className={col === 6 ? 'md-des' : 'xs-des'}>
          {getTruncatedDescription(description, isShowFullText)}
        </Description>
      </InfoWrapper>
    </Wrapper>
  );
};
