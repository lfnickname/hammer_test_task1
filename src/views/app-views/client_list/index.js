import React, { useEffect, useState } from 'react'
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { connect } from 'react-redux'
import { fetchUsers } from 'redux/actions/Users';
import Loading from 'components/shared-components/Loading'
import EditProfile from './EditProfile';;

function UserList ({fetchUsers, store, loaded}) {
	const [editProf, setEditProf] = useState(null)
	const [users, setUsers] = useState(null)
	useEffect(()=>{if (store.loaded === null && store.loading === null) fetchUsers()}, [])
	useEffect(()=>{setUsers(store.entities)}, [loaded])
	console.log(loaded)

	if (editProf) return <EditProfile id={editProf} setEditProf={setEditProf}/>

	function deleteUser (userId){
		setUsers (users.filter(item => item.id !== userId))
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}



	const tableColumns = [
		{
			title: 'User',
			dataIndex: 'name',
			render: (_, record) => (
				<div className="d-flex" >
					<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
				</div>
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
					  b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Username',
			dataIndex: 'username',
			sorter: {
				compare: (a, b) => a.role.length - b.role.length,
			},
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
			render: date => (
				<span>{date}</span>
			),
			sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
		},
		{
			title: 'Website',
			dataIndex: 'website',
			render: status => (
				<a>{status}</a>
			),
			sorter: {
				compare: (a, b) => a.status.length - b.status.length,
			},
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right" >
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} size="small"/>
					</Tooltip>
					
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={()=> {deleteUser(elm.id)}} size="small"/>
					</Tooltip>
				</div>
			)
		}
	];


	return loaded === true ? (
		<Card bodyStyle={{'padding': '0px'}}>
			<Table 
			onRow={() => {
				return {
				  onClick: event => {setEditProf(event.currentTarget.getAttribute('data-row-key'))},
				};
			  }}
			columns={tableColumns} dataSource={users} rowKey='id'/>
		</Card>
	)
	: (
		<Loading />
	)
}

const mapDispatchToProps = {
	fetchUsers
  }
   
const mapStateToProps = (state) => ({
	store: state.users,
	loaded: state.users.loaded
});
   
export default connect(mapStateToProps, mapDispatchToProps)(UserList)