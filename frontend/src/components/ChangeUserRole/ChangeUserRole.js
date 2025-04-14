import React, { useState } from "react";
import ROLE from "../../common/role";
import { IoMdClose } from "react-icons/io";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import { ChangeUserRoleStyled } from "./ChangeUserRoleStyled";

const ChangeUserRole = ({ name, email, role, userId, onClose, callFunc }) => {
  const [userRole, setUserRole] = useState(role);

  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);
  };

  const updateUserRole = async () => {
    const fetchResponse = await fetch(SummaryApi.updateUser.url, {
      method: SummaryApi.updateUser.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });

    const responseData = await fetchResponse.json();

    if (responseData.success) {
      toast.success(responseData.message);
      onClose();
      callFunc();
    }

  };

  return (
    <ChangeUserRoleStyled>
      <div className="changeUserWrapper">
        <div className="headerWrapper">
          <div className="head">Change User Role</div>
          <button onClick={onClose} className="closebutton">
            <IoMdClose className="closeIcon" />
          </button>
        </div>
        <div className="bodyContent">
          <div className="nameWrapper">
            <div className="nameLable">Name:</div>
            <div className="name">{name}</div>
          </div>
          <div className="emailWrapper">
            <div className="emailLabel">Email:</div>
            <div className="email">{email}</div>
          </div>
          <div className="roleWrapper">
            <div className="role">Role:</div>
            <div>
              <select
                className="border px-4 py-1"
                value={userRole}
                onChange={handleOnChangeSelect}
              >
                {Object.values(ROLE).map((el) => {
                  return (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <button onClick={updateUserRole} className="changeRole">Change Role</button>
        </div>
      </div>
    </ChangeUserRoleStyled>
  );
};

export default ChangeUserRole;
