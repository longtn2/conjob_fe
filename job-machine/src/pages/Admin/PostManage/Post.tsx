import { Tag, Col, Row } from "antd";
import { ContainerPost, CardCustom } from "./PostManagement.styled";
import { getNews, Post } from "../../../api/mock/news.api";
import { useEffect, useState } from "react";
import { BaseArticle } from "components/common/BaseArticle";
import FilterPost from "../../../components/post/CardPost";
import ActionBtn from "components/post/ActionBtn";
import VideoPlayer from "components/post/VideoPlayer";

const PostContent = () => {
  const [news, setNews] = useState(responseData);

  const handleDelete = (key: string) => {
    const newData = news.filter((item) => item.key !== key);
    setNews(newData);
  };

  const checkPost2 = async () => {
    const updatedNews = await Promise.all(
      news.map(async (response) => {
        try {
          const responseData = await SightengineApi.getImg(response.img);
          const castedResponse = responseData as unknown as {
            action: string;
            reject_reason: {
              text: string;
            }[];
          };
          const statusWithRejectReason = response.status as {
            action: string;
            rejectReason?: string[];
          };

          statusWithRejectReason.action = castedResponse.action;

          if (castedResponse.reject_reason.length > 0) {
            const rejectReasons = castedResponse.reject_reason.map(
              (reason) => reason.text
            );
            statusWithRejectReason.rejectReason = rejectReasons;
            console.log(statusWithRejectReason.rejectReason);
          }
          console.log("check réponse", responseData);
        } catch (error) {
          console.log(error);
        }
        return response;
      })
    );
    setNews(updatedNews);
  };

  useEffect(() => {
    checkPost2();
  }, []);

  return (
    <ContainerPost>
      <Row justify="space-between" gutter={[16, 16]}>
        <Col span={18}>
          <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
            {news?.map((post, index) => (
              <Col span={12} key={post.key}>
                <CardCustom>
                  <BaseArticle
                    title={post.title}
                    description={post.text}
                    date={post.date}
                    author={post.author}
                    avatar={post.avatarUrl}
                    className=""
                  />
                  <VideoPlayer index={index} post={post} />
                  {post.status.rejectReason && (
                    <>
                      <span></span>{" "}
                      <Tag color="red">{post.status.rejectReason}</Tag>
                    </>
                  )}
                  <ActionBtn
                    handleDelete={() => handleDelete(post.key)}
                    itemKey={""}
                  />
                </CardCustom>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={6}>
          <FilterPost />
        </Col>
      </Row>
    </ContainerPost>
  );
};

export default PostContent;
