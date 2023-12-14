import * as React from 'react'
import * as An from 'antd'

interface Props {
  childred?: React.ReactNode
  onSubmit?: (values: FormBarProps) => void
}

export interface FormBarProps {
  job_description: string
  location: string
  full_time_only: boolean
}

const FormBar: React.FC<Props> = (props) => {
  const [form] = An.Form.useForm<FormBarProps>();
  const [checkFulltimeOnly, setCheckFulltimeOnly] = React.useState<boolean>(false);

  function onCheckboxChange (e: { target: { checked: boolean } }){
    setCheckFulltimeOnly(e.target.checked)
  }
  // function onFinish (values: FormBarProps) {
  //   props.onSubmit(values)
  // }

  return (
    <An.Form
      layout="vertical"
      form={form}
      initialValues={{
        job_description: "",
        location: "",
        full_time_only: true
      }}
      onFinish={props.onSubmit}
    >
      <An.Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="bottom" justify="center">
        <An.Col className="gutter-row" span={7}>
          <An.Form.Item
            hasFeedback
            label="Job Description"
            name="job_description"
            validateTrigger="onBlur"
            rules={[{ required: true, message: 'Please input your name' }]}
          >
            <An.Input placeholder="Filter by title, benefits, companies, expertise" />
          </An.Form.Item>
        </An.Col>
        <An.Col className="gutter-row" span={7}>
          <An.Form.Item
            hasFeedback
            label="Location"
            name="location"
            validateTrigger="onBlur"
            rules={[{ required: true, message: 'Please input your name' }]}
          >
            <An.Input placeholder="Filter by city, state, zip code or expertise" />
          </An.Form.Item>
        </An.Col>
        <An.Col className="gutter-row" span={6}>
          <An.Form.Item name="full_time_only">
            <An.Checkbox checked={checkFulltimeOnly} onChange={onCheckboxChange}>
              Full Time Only
            </An.Checkbox>
          </An.Form.Item>
        </An.Col>
        <An.Col className="gutter-row" span={4}>
          <An.Form.Item>
            <An.Button htmlType="submit" type="primary">
              Search
            </An.Button>
          </An.Form.Item>
        </An.Col>
      </An.Row>
    </An.Form>
  )
}

export default FormBar