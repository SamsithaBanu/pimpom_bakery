import React, { useState } from "react";
import { GeneralUserStyled } from "./GeneralUserStyled";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../../store/userSlice";
import imageTobase64 from "../../helpers/imagetobase";
import { IoCloseOutline } from "react-icons/io5";

const MyProfile = () => {
  const user = useSelector((state) => state?.user?.user);
  const [editMode, setEditMode] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const dispatch = useDispatch(); // Initialize dispatch
  const [dateOfBirth, setDateOfBirth] = useState(user?.dateOfBirth || "");
  const [mobileNumber, setMobileNumber] = useState(user?.mobileNumber || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profilePic, setProfilePic] = useState(user?.profilePic || "");
  const [editDateOfBirth, setEditDateOfBirth] = useState(
    user?.dateOfBirth || ""
  );
  const [editMobileNumber, setEditMobileNumber] = useState(
    user?.mobileNumber || ""
  );
  const [editGender, setEditGender] = useState(user?.gender || "");
  const [editName, setEditName] = useState(user?.name || "");
  const [editEmail, setEditEmail] = useState(user?.email || "");
  const [editProfilePic, setEditProfilePic] = useState(user?.profilePic || "");

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);
    setEditProfilePic(imagePic);
  };

  console.log("user", user);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("editProfileOverlay")) {
      setEditProfile(false);
    }
  };

  const handleSave = async () => {
    try {
      const fetchResponse = await fetch(SummaryApi.updateUser.url, {
        method: SummaryApi.updateUser.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userId: user?._id,
          dateOfBirth,
          mobileNumber,
          gender,
        }),
      });

      const responseData = await fetchResponse.json();

      if (responseData.success) {
        toast.success(responseData.message);
        setEditMode(false);
        dispatch(
          setUserDetails({ ...user, dateOfBirth, mobileNumber, gender })
        ); // Update Redux state
      } else {
        toast.error(responseData.message || "Failed to update profile.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile.");
    }
  };

  const handleEditSave = async () => {
    // Optimistically update the Redux state before the API response
    dispatch(
      setUserDetails({
        ...user,
        name: editName, // Update with edited fields
        email: editEmail,
        profilePic: editProfilePic,
        dateOfBirth: editDateOfBirth,
        mobileNumber: editMobileNumber,
        gender: editGender,
      })
    );

    // Sync local state with updated values
    setName(editName);
    setEmail(editEmail);
    setProfilePic(editProfilePic);
    setDateOfBirth(editDateOfBirth);
    setMobileNumber(editMobileNumber);
    setGender(editGender);

    // Toggle off the edit mode right away for instant UI feedback
    setEditProfile(false);
    setEditMode(false);

    try {
      const fetchResponse = await fetch(SummaryApi.updateUser.url, {
        method: SummaryApi.updateUser.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userId: user?._id,
          name: editName,
          email: editEmail,
          profilePic: editProfilePic,
          dateOfBirth: editDateOfBirth,
          mobileNumber: editMobileNumber,
          gender: editGender,
        }),
      });

      const responseData = await fetchResponse.json();

      if (responseData.success) {
        toast.success(responseData.message);
      } else {
        // Revert changes in case of failure
        dispatch(setUserDetails(user));
        toast.error(responseData.message || "Failed to update profile.");
      }
    } catch (error) {
      // Revert changes in case of an error
      dispatch(setUserDetails(user));
      toast.error("An error occurred while updating the profile.");
    }
  };

  console.log("user", user);

  return (
    <GeneralUserStyled>
      <div className="profileWrapper">
        {editProfile && (
          <div
            className="editProfileOverlay"
            onClick={handleBackgroundClick}
          ></div>
        )}
        <div className="header">
          <div className="head">My Profile</div>
          <div className="editProduct">
            <button
              className="px-3 py-2 uploadProductBtn"
              onClick={() => setEditProfile(!editProfile)}
            >
              Edit Profile
            </button>
            <MdModeEditOutline color={"#9f2b68"} />
          </div>
        </div>
        <div className="body">
          <div className="profileSection">
            <div className="top">
              <div className="imageWrap">
                {user?.profilePic ? (
                  <img
                    src={profilePic}
                    className="w-20 h-20 rounded-full"
                    alt={user?.name}
                  />
                ) : (
                  <FaRegCircleUser className="w-20 h-20 rounded-full" />
                )}
              </div>
              <div className="role">{user?.role}</div>
            </div>
            <div className="bottom">
              <div className="left">
                <div className="content">
                  <label>User Name:</label>
                  <input value={name} readOnly />
                </div>
                <div className="content">
                  <label>Email:</label>
                  <input value={email} readOnly />
                </div>
                <div className="content">
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    disabled={!editMode}
                  />
                </div>
                <div className="content">
                  <label>Gender:</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    disabled={!editMode}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="content">
                  <label>Mobile number:</label>
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    disabled={!editMode}
                  />
                </div>
                {editMode && (
                  <div className="saveDetails">
                    <button
                      className="px-3 py-2 uploadProductBtn"
                      onClick={() => {
                        setEditMode(!editMode);
                        handleSave();
                      }}
                    >
                      Save user Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {editProfile && (
            <div className="editprofileSection">
              <div className="top">
                <div>
                  {user?.profilePic ? (
                    <img
                      src={profilePic}
                      className="w-20 h-20 rounded-full"
                      alt={user?.name}
                    />
                  ) : (
                    <FaRegCircleUser className="w-20 h-20 rounded-full" />
                  )}
                  <div className="image-upload">
                    <div>Edit Photo</div>
                    <input
                      type="file"
                      className=""
                      onChange={handleUploadPic}
                    />
                  </div>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setEditProfile(false)}
                >
                  <IoCloseOutline size={27} />
                </div>
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="content">
                    <label>User Name:</label>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </div>
                  <div className="content">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                    />
                  </div>
                  <div className="content">
                    <label>Date of Birth:</label>
                    <input
                      type="date"
                      value={editDateOfBirth}
                      onChange={(e) => setEditDateOfBirth(e.target.value)}
                    />
                  </div>
                  <div className="content">
                    <label>Gender:</label>
                    <select
                      value={editGender}
                      onChange={(e) => setEditGender(e.target.value)}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="content">
                    <label>Mobile number:</label>
                    <input
                      type="number"
                      value={editMobileNumber}
                      onChange={(e) => setEditMobileNumber(e.target.value)}
                    />
                  </div>
                  {editMode && (
                    <div className="saveDetails">
                      <button
                        className="px-3 py-2 uploadProductBtn"
                        onClick={() => {
                          setEditProfile(!editProfile);
                          handleEditSave();
                        }}
                      >
                        Edit user Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </GeneralUserStyled>
  );
};

export default MyProfile;
