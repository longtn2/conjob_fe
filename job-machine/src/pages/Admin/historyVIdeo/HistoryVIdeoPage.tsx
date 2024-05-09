import React, { useEffect, useState } from 'react';
import ContentCensorshiprVideo from '@/components/historyVideoAdmin/ContentCensorshiprVideo';
import HeaderCensorshipVideo from '@/components/historyVideoAdmin/HeaderCensorshipVideo';
import { ContainerHistoryVideo } from './HistoryVideo.styled';
import { ParamsPostVideo, ResponseDataPostAPI } from '@/interfaces/interfaces';
import { PER_PAGE_CENSOR_HISTORY, formatDate } from '@/constants/constants';
import { formatDayjs, getMessageStatus, getStatusPost } from '@/helper';
import { historyApi } from '@/api/history/historyApi';

const HistoryVIdeoPage = () => {
  const [dataHistory, setDataHistory] = useState<
    ResponseDataPostAPI | undefined
  >(undefined);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isFlag, setIsFlag] = useState(false);
  const [isParams, setIsParams] = useState<
    Pick<
      ParamsPostVideo,
      'status_filter' | 'start_date' | 'end_date' | 'search_term'
    >
  >({
    status_filter: undefined,
    start_date: undefined,
    end_date: undefined,
    search_term: undefined
  });
  // const [params, setParams] = useState<ParamsPostVideo>({
  //   Page: page,
  //   Limit: PER_PAGE_CENSOR_HISTORY,
  //   status_filter: undefined,
  //   start_date: undefined,
  //   end_date: undefined,
  //   search_term: undefined
  // });

  useEffect(() => {
    fetchData();
  }, [page, isFlag, isParams]);

  const fetchData = async () => {
    setLoading(true);
    await historyApi
      .apiGetAll({
        ...isParams,
        Page: page,
        Limit: PER_PAGE_CENSOR_HISTORY
      })
      .then(res => {
        if (res.data) {
          const formattedDataHistory: ResponseDataPostAPI = {
            ...res.data,
            items: res.data.items.map(values => {
              const formattedCreatedAt = formatDayjs(
                values.created_at,
                formatDate.DATE_TIME_SECONDS
              );
              const status = getStatusPost(
                values.is_deleted,
                values.is_actived
              );
              return {
                ...values,
                created_at: formattedCreatedAt,
                statusPost: status
              };
            })
          };
          setDataHistory(formattedDataHistory);
        }
      })
      .catch(error => {
        getMessageStatus(error.message, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangePage = async (newPage: number) => {
    setPage(newPage);
  };

  const getLoading = () => {
    return loading;
  };

  const handleFlag = () => {
    setIsFlag(prevFlag => !prevFlag);
  };

  const handleChangeParams = async (newParams: ParamsPostVideo) => {
    setIsParams(newParams);
    setPage(1);
  };

  const actionReset = () => {
    setIsParams({
      status_filter: undefined,
      start_date: undefined,
      end_date: undefined,
      search_term: undefined
    });
    setPage(1);
  };

  return (
    <ContainerHistoryVideo>
      <HeaderCensorshipVideo
        params={isParams}
        handleFlag={handleFlag}
        handleChangeParams={handleChangeParams}
        actionReset={actionReset}
      />
      {dataHistory && (
        <ContentCensorshiprVideo
          dataHistory={dataHistory}
          handleFlag={handleFlag}
          handlePage={handleChangePage}
          page={page}
          getLoading={getLoading}
        />
      )}
    </ContainerHistoryVideo>
  );
};

export default HistoryVIdeoPage;
