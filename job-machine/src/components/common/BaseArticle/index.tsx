import React, { useState } from "react";
import { BaseAvatar } from "../BaseAvatar/BaseAvatar";
import {
  Header,
  Author,
  AuthorWrapper,
  DateTime,
  InfoHeader,
  InfoWrapper,
  Title,
  Wrapper,
} from "./BaseArticle.styled";
import { BaseCheckbox } from "../BaseCheckbox/BaseCheckbox";
import { Col, Flex } from "antd";

export interface BaseArticleProps {
  author?: React.ReactNode;
  imgUrl?: string;
  title: string;
  date: number;
  description: string;
  avatar?: string;
  className?: string;
}

export const BaseArticle: React.FC<BaseArticleProps> = ({
  title,
  date,
  description,
  author,
  avatar,
  className,
}) => {
  const [isShowFullText, setIsShowFullText] = useState(false);

  const getTruncatedDescription = (description: string) => {
    return description.length > 200
      ? `${description.substring(0, 200)}...`
      : description;
  };

  const toggleReadMore = () => {
    return setIsShowFullText(!isShowFullText);
  };

  return (
    <Wrapper className={className}>
      <Header>
        {!!avatar && <BaseAvatar src={avatar} alt="author" size={60} />}
        <Flex>
          <Col>
            <AuthorWrapper>
              {author && <Author>{author}</Author>}
              <DateTime>
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(date))}
              </DateTime>
            </AuthorWrapper>
          </Col>
          <Col>
            <BaseCheckbox className="btn-checkbox" />
          </Col>
        </Flex>
      </Header>
      <InfoWrapper>
        <InfoHeader>
          <Title>{title}</Title>
        </InfoHeader>
        <p id="read-more">
          {isShowFullText ? description : getTruncatedDescription(description)}
        </p>
        <p onClick={() => toggleReadMore()} className="read-more">
          {isShowFullText ? "Ẩn bớt" : "Xem thêm"}
        </p>
      </InfoWrapper>
    </Wrapper>
  );
};
