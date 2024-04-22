import { Col, Row } from "antd";
import { ContainerPost, CardCustom } from "./PostManagement.styled";
<<<<<<< HEAD
import { getNews, Post } from "@/api/mock/news.api";
import { useEffect, useState } from "react";
import { BaseArticle } from "@/components/common/BaseArticle";
import FilterPost from "@/components/post/CardPost";
import ActionBtn from "@/components/post/ActionBtn";
import VideoPlayer from "@/components/post/VideoPlayer";
=======
import { getNews, Post } from "../../../api/mock/news.api";
import { useEffect, useState } from "react";
import { BaseArticle } from "components/common/BaseArticle";
import FilterPost from "../../../components/post/CardPost";
import ActionBtn from "components/post/ActionBtn";
import VideoPlayer from "components/post/VideoPlayer";
import { checkPost2 } from "service/customize_axios";
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda

const PostContent = () => {
  const [news, setNews] = useState<Post[]>([]);

<<<<<<< HEAD
  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);

  const handleDelete = (key: React.Key) => {
    const newData = news.filter((item) => item.key !== key);
    setNews(newData);
  };

=======
  // useEffect(() => {
  //   getNews().then((res) => setNews(res));
  // }, []);

  // const handleDelete = (key: React.Key) => {
  //   const newData = news.filter((item) => item.key !== key);
  //   setNews(newData);
  // };

  // console.log(news);

  const fetchData = async () => {
    try {
      const newsData = await getNews();

      let result;
      try {
        result = await checkPost2();
      } catch (error) {
        // console.error("Error checking post:", error);
        setNews(newsData);
        return;
      }

      // console.log("check res", result);

      setNews(newsData);
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
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
<<<<<<< HEAD
                  <ActionBtn
                    handleDelete={() => handleDelete(post.key)}
                    itemKey={""}
                  />
=======
                  {/* <ActionBtn
                    // handleDelete={() => handleDelete(post.key)}
                    itemKey={""}
                  /> */}
>>>>>>> 13ecb2a603866ebde2c6ffc92728890f619f0dda
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
