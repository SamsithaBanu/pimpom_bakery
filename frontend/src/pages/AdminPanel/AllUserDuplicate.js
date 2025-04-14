import React, { useState, useEffect } from 'react'
import { AllUserDupStyled } from './AdminUserDupStyled'
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../../components/ChangeUserRole/ChangeUserRole';

const AllUserDuplicate = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [openUpdateRole,setOpenUpdateRole] = useState(false)
  const [updateUserDetails,setUpdateUserDetails] = useState({
      email : "",
      name : "",
      role : "",
      _id  : ""
  });

  const fetchAllUsers = async() =>{
    const fetchData = await fetch(SummaryApi.allUser.url,{
        method : SummaryApi.allUser.method,
        credentials : 'include'
    })

    const dataResponse = await fetchData.json()

    if(dataResponse.success){
        setAllUsers(dataResponse.data)
    }

    if(dataResponse.error){
        toast.error(dataResponse.message)
    }

}

useEffect(()=>{
    fetchAllUsers()
},[])
  return (
    <AllUserDupStyled>
      <div className='tableWrapper'>
      <div className='heading'>All Users</div>
      <table className='table'>
        <thead>
          <tr>
            <td>Sr.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Edit</td>
            <td>Created Date</td>
          </tr>
        </thead>
        <tbody>
          
          {allUsers?.map((item, index)=>(
            <tr>
            <td>{index +1}</td>
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.role}</td>
            <td>{moment(item?.createdAt).format('LL')}</td>
            <td>
              <button className='edit' onClick={()=>{
                setUpdateUserDetails(item);
                setOpenUpdateRole(true)
              }}>
                <MdModeEdit className='editIcon'/>
              </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
            openUpdateRole && (
                <ChangeUserRole 
                    onClose={()=>setOpenUpdateRole(false)} 
                    name={updateUserDetails.name}
                    email={updateUserDetails.email}
                    role={updateUserDetails.role}
                    userId={updateUserDetails._id}
                    callFunc={fetchAllUsers}
                />
            )      
        }
      </div>
    </AllUserDupStyled>
  )
}

export default AllUserDuplicate