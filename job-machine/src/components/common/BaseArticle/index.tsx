import React, { useState } from "react";
<<<<<<< HEAD
import { BaseAvatar } from "@/components/common/BaseAvatar/BaseAvatar";
=======
import { BaseAvatar } from "../BaseAvatar/BaseAvatar";
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
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
<<<<<<< HEAD
import { BaseCheckbox } from "@/components/common/BaseCheckbox/BaseCheckbox";
=======
import { BaseCheckbox } from "../BaseCheckbox/BaseCheckbox";
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
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

<<<<<<< HEAD
  const getTruncatedDescription = (
    description: string,
    isShowFullText: boolean
  ) =>
    isShowFullText || !(description.length > 200)
      ? description
      : `${description.substring(0, 200)}...`;
=======
  const getTruncatedDescription = (description: string) => {
    return description.length > 200
      ? `${description.substring(0, 200)}...`
      : description;
  };
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda

  const toggleReadMore = () => {
    return setIsShowFullText(!isShowFullText);
  };
<<<<<<< HEAD
  
=======
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda

  return (
    <Wrapper className={className}>
      <Header>
        {!!avatar && <BaseAvatar src={avatar} alt="author" size={60} />}
        <Flex>
          <Col>
            <AuthorWrapper>
              {author && <Author>{author}</Author>}
<<<<<<< HEAD
              <DateTime>
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(date))}
              </DateTime>
=======
              {/* <DateTime>
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(date))}
              </DateTime> */}
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
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
<<<<<<< HEAD
        <p id="read-more">
          {getTruncatedDescription(description, isShowFullText)}
        </p>
        <p onClick={() => toggleReadMore()} className="read-more">
          {isShowFullText ? "Ẩn bớt" : "Xem thêm"}
        </p>
=======
        {/* <p id="read-more">
          {isShowFullText ? description : getTruncatedDescription(description)}
        </p> */}
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
      </InfoWrapper>
    </Wrapper>
  );
};
