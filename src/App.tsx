/* eslint-disable prefer-const */
/* eslint-disable no-extra-boolean-cast */
import * as React from 'react'
import * as An from 'antd'
import AppLayout from './components/AppLayout'
import FormBar, { FormBarProps } from './components/form/FormBar'
import { JobReqPay, jobSearch } from './api/jobApi'
import AppList from './components/AppList'

const App: React.FC = function () {

  const [payload, setPayload] = React.useState<FormBarProps>({
    full_time_only: false,
    job_description: "",
    location: ""
  });

  const [page, setPage] = React.useState<number>(1);
  const [total, setTotal] = React.useState<number>(0);
  const [jobs, setJobs] = React.useState<[]>([]);
  const [pageSize, setPageSize] = React.useState<number>(10);

  const jobSearchCall = React.useCallback(() => {
    const _params = { l: pageSize, p: page, s: (page - 1) * pageSize };
    const _payload = (function (args) {
      let data: { payload: JobReqPay } = { payload: {} };

      if (!!args.full_time_only) {
        data.payload = { ...data.payload, type: "Full Time" };
      } else {
        data.payload = { ...data.payload, type: null }
      }

      if (!!args.job_description) {
        data.payload = { ...data.payload, description: args.job_description }
      }

      if (!!args.location) {
        data.payload = { ...data.payload, location: args.location }
      }

      return data.payload
    })(payload);

    jobSearch(_params, _payload)
      .then(ress => {
        if (ress.data.code == 200) {
          setJobs(ress.data.data.jobs)
          setTotal(ress.data.data.item_count)
          setPageSize(10)
        }
      });
  }, [pageSize, page, payload]);

  const setPayloadCall = React.useCallback((values: FormBarProps) => {
    setPayload(values)
  }, []);

  const setPageCall = React.useCallback((value: number) => {
    setPage(value);
  }, [])

  React.useEffect(() => {
    jobSearchCall()
  }, [jobSearchCall])

  return (
    <An.ConfigProvider
      theme={{
        cssVar: true
      }}>
        <An.App>
          <AppLayout>
            <FormBar onSubmit={setPayloadCall} />
            <AppList dataSource={jobs} pageSize={pageSize} total={total} onChangePage={setPageCall} />
          </AppLayout>
        </An.App>
    </An.ConfigProvider>
  )
}

export default App
