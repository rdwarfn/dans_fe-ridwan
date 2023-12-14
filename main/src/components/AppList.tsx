// import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, List } from 'antd';

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

// const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
//   <Space>
//     {React.createElement(icon)}
//     {text}
//   </Space>
// );


interface AppListProps {
  pageSize: number
  total?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: any[]
  onChangePage?: (args: number) => void
}

const DText = (props: string) => {
  return <div dangerouslySetInnerHTML={{ __html: props }} />
}

const AppList: React.FC<AppListProps> = ({
  pageSize = 3,
  dataSource = data,
  total = undefined,
  onChangePage
}) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        onChangePage && onChangePage(page)
      },
      pageSize,
      total,
    }}
    dataSource={dataSource}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        // actions={[
        //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        // ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.company_logo} />}
          title={<a href={item.id}>{item.title}</a>}
          description={DText(item.description)}
        />
        {item.content}
      </List.Item>
    )}
  />
);

export default AppList;