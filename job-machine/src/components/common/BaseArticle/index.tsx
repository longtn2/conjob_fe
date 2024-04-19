import React, { useState } from "react";
import { BaseAvatar } from "@/components/common/BaseAvatar/BaseAvatar";
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
import { BaseCheckbox } from "@/components/common/BaseCheckbox/BaseCheckbox";
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

  const getTruncatedDescription = (
    description: string,
    isShowFullText: boolean
  ) =>
    isShowFullText || !(description.length > 200)
      ? description
      : `${description.substring(0, 200)}...`;

  const toggleReadMore = () => {
    return setIsShowFullText(!isShowFullText);
  };

  console.log(isShowFullText);

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
          <Col>{/* <BaseCheckbox className="btn-checkbox" /> */}</Col>
        </Flex>
      </Header>
      <InfoWrapper>
        <InfoHeader>
          <Title>{title}</Title>
        </InfoHeader>
        <p id="read-more">
<<<<<<< Updated upstream
          {getTruncatedDescription(description, isShowFullText)}
        </p>
        <p onClick={() => toggleReadMore()} className="read-more">
          {isShowFullText ? "Ẩn bớt" : "Xem thêm"}
=======
          {isShowFullText ? description : getTruncatedDescription(description)}
          {description.length > 200 && (
            <p onClick={toggleReadMore} style={{ color: "#619cff" }}>
              {isShowFullText ? "Ẩn bớt" : "Xem thêm"}
            </p>
          )}
>>>>>>> Stashed changes
        </p>
      </InfoWrapper>
    </Wrapper>
  );
};
