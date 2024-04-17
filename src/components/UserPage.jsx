import { Box, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../api/user";
import { avatarStyles, boxStyles } from "../utils/constants";

const UserPage = () => {
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const storageUserData = JSON.parse(localStorage.getItem("userData"));
    storageUserData && setData(storageUserData);

    const fetchData = async () => {
      const resUserData = await fetchUserData();
      setUserData(resUserData?.data);
    };

    fetchData();
  }, []);

  const handleUpdate = () => {
    navigate("/UserProfileForm");
  };

  return (
    <>
      <Typography>UserProfile</Typography>

      <Box
        sx={boxStyles}
      >
        <Avatar sx={avatarStyles}>{data.avatarUrl}</Avatar>
        {Object.keys(data).map((key, index) => (
          <Typography key={index} variant="h5">
            {data[key]}
          </Typography>
        ))}
        <Button onClick={handleUpdate}>UpdateInfo</Button>
      </Box>
    </>
  );
};

export default UserPage;
