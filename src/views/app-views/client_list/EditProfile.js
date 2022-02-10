import React from 'react';
import { Form, Button, Input, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { connect } from 'react-redux'

function EditProfile ({id, store, setEditProf}) {

			const onFinish = values => {
			const key = 'updatable';
			message.loading({ content: 'Updating...', key });
			setTimeout(() => {
				message.success({ content: 'Done!', key, duration: 2})
				setEditProf(null)
			}, 1000);
		};

	const user = store.entities.filter(item => item.id == id)[0]
	console.log(user)
	return (
		<>
			<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
			</Flex>
			<div className="mt-4">
				<Form
					name="basicInformation"
					layout="vertical"
					initialValues={
						{ 
							'name': user.name,
							'email': user.email,
							'username': user.username,
							'phoneNumber': user.phone,
							'website': user.website,
							'address': user.address?.street + ' ' + user.address?.suite,
							'city': user.address?.city,
							'postcode': user.address?.zipcode,
							'company': user.company.name + ', ' + user.company.catchPhrase
						}
					}
					onFinish={onFinish}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Name"
										name="name"
										rules={[
											{
												required: true,
												message: 'Please input your name!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Username"
										name="username"
										rules={[
											{
												required: true,
												message: 'Please input your username!'
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Email"
										name="email"
										rules={[{ 
											required: true,
											type: 'email',
											message: 'Please enter a valid email!' 
										}]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Company"
										name="company"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Phone Number"
										name="phoneNumber"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Website"
										name="website"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Form.Item
										label="Address"
										name="address"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="City"
										name="city"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Post code"
										name="postcode"
									>
										<Input />
									</Form.Item>
								</Col>
							</Row>
							<Button type="primary" htmlType="submit">
								Save Change
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	)
}

const mapDispatchToProps = {
  }
   
const mapStateToProps = state => ( () => {
    return {
      store: state.users,
    }
  })
   
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
