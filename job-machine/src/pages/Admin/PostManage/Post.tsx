import { useState, useEffect } from 'react';
import { Col, Row, Spin, message, theme, Image } from 'antd';
import { ContainerPost, CardCustom } from './PostManagement.styled';
import { BaseArticle } from '@/components/common/BaseArticle';
import ActionBtn from '@/components/post/ActionBtn';
import VideoPlayer from '@/components/post/VideoPlayer';
import { CloseCircleOutlined } from '@ant-design/icons';
import { PostApi } from '@/api/post/PostApi';
import { BasePagination } from '@/components/common/BasePagination/BasePagination';
import { IQuery, InforPost, ICheckbox } from '@/interfaces/interfaces';
import { SightengineApi } from '@/api/sightengine/sightengineApi';
import { BaseCheckbox } from '@/components/common/BaseCheckbox/BaseCheckbox';
import layoutIcon from '@/assets/images/layout.png';
import FilterSection from '@/components/post/FilterSection';
import BulkActions from '@/components/post/BulkActions';
import { formatDayjs, getMessageStatus } from '@/helper';
import {
  RESPONSE_ERROR,
  RESPONSE_SUCCESS,
  formatDate
} from '@/constants/constants';
import { BaseTag } from '@/components/common/BaseTag';
import { EmptyPage } from '../EmptyPage';
import menuHorizon from '@/assets/menu/4.svg';
import menuVertical from '@/assets/menu/1.svg';

const PostContent: React.FC<ICheckbox> = () => {
  const [news, setNews] = useState<InforPost[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [col, setCol] = useState(6);
  const [filterOptions, setFilterOptions] = useState([
    {
      label: (
        <div>
          <Image src={menuVertical} preview={false} className="icon-layout" />
        </div>
      ),
      value: 1
    },
    {
      label: (
        <div>
          <Image src={menuHorizon} preview={false} className="icon-layout" />
        </div>
      ),
      value: 4
    }
  ]);
  const { token } = theme.useToken();

  const [query, setQuery] = useState<IQuery>({
    page: 1,
    limit: 4,
    title: '',
    start_date: '',
    end_date: ''
  });
  const spanMapping = {
    1: 24,
    // 2: 12,
    4: 6
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  // useEffect(() => {
  //   const handleResizeWidth = () => {
  //     const width = window.innerWidth;
  //     if (width < 992) {
  //       setFilterOptions([1, 2]);
  //     } else {
  //       setFilterOptions([1, 2, 4]);
  //     }
  //   };

  //   handleResizeWidth();
  //   window.addEventListener('resize', handleResizeWidth);
  //   return () => window.removeEventListener('resize', handleResizeWidth);
  // }, []);

  const fetchData = () => {
    setLoading(true);
    PostApi.apiAllPost(query)
      .then(response => {
        setCurrentPage(response.data.totalCount);
        const items = response.data.items;

        return Promise.all(
          items.map(item => {
            item.centersor = {
              action: 'accept',
              rejectReason: {
                text: '',
                reject_prob: 0,
                reject_reason: { text: '' }
              }
            };

            if (item.file_type === 'Img') {
              return SightengineApi.getImg(item.file_url)
                .then(res => {
                  item.centersor.action = res.data.summary.action;
                  if (item.centersor.action === 'reject') {
                    item.centersor.rejectReason.text =
                      res.data.summary.reject_reason
                        .slice(0, 2)
                        .map(reason => reason.text)
                        .join(', ');
                  }
                  return item;
                })
                .catch(error => {
                  // getMessageStatus(error.message, 'error');
                  return item;
                });
            }

            return Promise.resolve(item);
          })
        );
      })
      .then(updatedNews => {
        setNews(updatedNews);
      })
      .catch(error => {
        getMessageStatus(error.message, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id: number) => {
    if (id) {
      PostApi.apiDelete(id)
        .then((res: any) => {
          fetchData();
          getMessageStatus(res.message, RESPONSE_SUCCESS);
        })
        .catch(error => {
          getMessageStatus(error.message, 'error');
        });
    } else {
      Promise.all(
        selectedPosts.map(postId => PostApi.apiDelete(parseInt(postId)))
      )
        .then(() => {
          setSelectedPosts([]);
          fetchData();
        })
        .catch(error => {
          getMessageStatus(error.message, 'error');
        });
    }
  };

  const handleDeleteList = (ids: number[]) => {
    PostApi.apiDeleteList(ids)
      .then((res: any) => {
        setSelectedPosts([]);
        fetchData();
        getMessageStatus(res.message, RESPONSE_SUCCESS);
      })
      .catch(err => {
        const { message } = err;
        getMessageStatus(message, RESPONSE_ERROR);
      });
  };

  const handleAcceptPost = (id: number) => {
    if (id) {
      PostApi.apiActive(id)
        .then((res: any) => {
          fetchData();
          getMessageStatus(res.message, RESPONSE_SUCCESS);
        })
        .catch(error => {
          getMessageStatus(error.message, 'error');
        });
    }
  };

  const handleAcceptPostList = (ids: number[]) => {
    PostApi.apiActiveList(ids)
      .then((res: any) => {
        setSelectedPosts([]);
        fetchData();
        getMessageStatus(res.message, RESPONSE_SUCCESS);
      })
      .catch(err => {
        const { message } = err;
        getMessageStatus(message, RESPONSE_ERROR);
      });
  };

  const handleFilter = value => {
    const { titleContent, datetime } = value;
    console.log('check datatime form post', datetime);

    const newQuery = { ...query };

    if (datetime && datetime.length > 0 && datetime[0]) {
      const startDate = new Date(datetime[0].$d);
      const endDate = datetime[1] ? new Date(datetime[1].$d) : startDate;

      const formattedStartDate = formatDayjs(
        startDate.toISOString(),
        formatDate.DATE_TIME_MINUTE_SECONDS
      );
      const formattedEndDate = formatDayjs(
        endDate.toISOString(),
        formatDate.DATE_TIME_MINUTE_SECONDS
      );

      newQuery.start_date = formattedStartDate;
      newQuery.end_date = formattedEndDate;
    } else {
      newQuery.start_date = '';
      newQuery.end_date = '';
    }

    if (titleContent) {
      newQuery.title = titleContent;
    } else {
      newQuery.title = '';
    }

    newQuery.page = 1;
    newQuery.limit = 4;

    setQuery(newQuery);
  };

  const handlePagination = (page: number) => {
    const newQuery = { ...query };
    newQuery.page = page;
    setQuery(newQuery);
  };

  const handleOptionChange = selectedOption => {
    setCol(spanMapping[selectedOption] || 6);
  };

  const getColSpan = () => col;

  const handleDeleteAllSelected = async () => {
    await handleDeleteList(selectedPosts.map(Number));
    setSelectedPosts([]);
    fetchData();
  };

  const handleActiveAllSelected = async () => {
    await handleAcceptPostList(selectedPosts.map(Number));
    setSelectedPosts([]);
    fetchData();
  };

  const handleCheckboxChange = (postId, isChecked) => {
    if (isChecked) {
      setSelectedPosts(prev => [...prev, postId]);
    } else {
      setSelectedPosts(prev => prev.filter(id => id !== postId));
    }
  };

  const handleCheckAll = () => {
    if (news && selectedPosts.length < news?.length) {
      setSelectedPosts(news?.map(post => String(post.id)));
    } else {
      setSelectedPosts([]);
    }
    setIsChecked(!isChecked);
  };

  const getCol = (col: number) => {
    return col;
  };

  return (
    <>
      <ContainerPost>
        <FilterSection
          col={col}
          handleFilter={handleFilter}
          handleOptionChange={handleOptionChange}
          options={filterOptions}
          layoutIcon={layoutIcon}
        />
        {news && news.length > 0 && (
          <BulkActions
            col={col}
            selectedPosts={selectedPosts}
            handleCheckAll={handleCheckAll}
            handleDeleteAllSelected={handleDeleteAllSelected}
            handleActiveAllSelected={handleActiveAllSelected}
            isAllSelected={selectedPosts.length > 0}
          />
        )}
        {loading ? (
          <Spin
            spinning={true}
            tip="Loading..."
            size="large"
            className="spin-container"
          />
        ) : (
          <Row
            gutter={[16, 16]}
            className={col === 24 ? 'middle-container-row' : 'container-row'}
          >
            {news && news.length ? (
              <Col span={24}>
                <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
                  {news?.map((post, index) => (
                    <Col
                      span={getColSpan()}
                      key={post.id}
                      xs={getCol(col) === 6 || 24 ? 24 : ''}
                      sm={getCol(col) === 6 ? 12 : getCol(col) === 12 ? 12 : ''}
                      lg={getCol(col) === 6 ? 6 : ''}
                    >
                      <CardCustom>
                        {col === 6 ? (
                          <div className="md-card-item">
                            <VideoPlayer
                              index={index}
                              post={post}
                              col={getColSpan()}
                            />
                            {post.centersor?.action === 'reject' &&
                            post.centersor?.rejectReason ? (
                              <BaseTag
                                icon={<CloseCircleOutlined />}
                                color="error"
                                key={`reject-reason-${index}`}
                              >
                                {post.centersor.rejectReason.text.split(',')[0]}
                              </BaseTag>
                            ) : null}
                            <BaseArticle
                              created_at={post.created_at || ''}
                              title={post.title || ''}
                              description={post.caption || ''}
                              date={post.date || ''}
                              author={post.author}
                              avatar={post.avatar_author}
                              postId={String(post.id)}
                              col={getColSpan()}
                            />
                            <ActionBtn
                              handleDelete={() => handleDelete(post.id)}
                              handleAcceptPost={() => handleAcceptPost(post.id)}
                              itemKey={``}
                              col={getColSpan()}
                            />
                          </div>
                        ) : (
                          <div
                            className={
                              col === 24
                                ? 'xl-card-item xs-card-item'
                                : 'xs-card-item'
                            }
                          >
                            <BaseCheckbox
                              className="btn-checkbox"
                              checked={selectedPosts.includes(String(post.id))}
                              onChange={e =>
                                handleCheckboxChange(
                                  String(post.id),
                                  e.target.checked
                                )
                              }
                            />
                            <BaseArticle
                              created_at={post.created_at || ''}
                              title={post.title || ''}
                              description={post.caption || ''}
                              date={post.date || ''}
                              author={post.author}
                              avatar={post.avatar_author}
                              postId={String(post.id)}
                              col={getColSpan()}
                            />
                            <VideoPlayer
                              index={index}
                              post={post}
                              col={getColSpan()}
                            />
                            {post.centersor?.action === 'reject' &&
                            post.centersor?.rejectReason ? (
                              <BaseTag
                                icon={<CloseCircleOutlined />}
                                color="error"
                                key={`reject-reason-${index}`}
                                className="reject-tag"
                              >
                                {post.centersor.rejectReason.text}
                              </BaseTag>
                            ) : null}
                            <ActionBtn
                              handleDelete={() => handleDelete(post.id)}
                              handleAcceptPost={() => handleAcceptPost(post.id)}
                              itemKey={``}
                              col={getColSpan()}
                            />
                          </div>
                        )}
                      </CardCustom>
                    </Col>
                  ))}
                </Row>
                <BasePagination
                  defaultCurrent={1}
                  total={currentPage}
                  pageSize={query.limit}
                  current={query.page}
                  onChange={page => {
                    handlePagination(page);
                  }}
                  className="pagination"
                  style={{
                    background: token ? token.colorBgContainer : '#ffffff'
                  }}
                />
              </Col>
            ) : (
              <EmptyPage />
            )}
          </Row>
        )}
      </ContainerPost>
    </>
  );
};

export default PostContent;
