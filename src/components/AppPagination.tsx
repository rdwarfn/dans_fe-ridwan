import * as React from 'react'
import * as An from 'antd'

interface Props extends An.PaginationProps {}
function AppPagination(props: Props) {
  return (
    <An.Pagination defaultCurrent={1} total={100} {...props} />
  )
}

export default AppPagination;