import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, FormControl, Input } from "@mui/material";
import { fetchUserLocation } from "../api/location";
import { formStyles } from "../utils/constants";

const UserProfileForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      Object.keys(userData).forEach((key) => {
        setValue(key, userData[key]);
      });
    }

    // when working on local port 3000, when trying to request data, there is a problem with the CORS
    const fetchData = async () => {
      const resUserLocation = await fetchUserLocation();

      resUserLocation &&
        setLocation(
          resUserLocation?.data?.city +
            ", " +
            resUserLocation?.data?.country_name
        );
    };

    fetchData();
  }, []);

  return (
    <form variant="standard" onSubmit={handleSubmit(onSubmit)}>
      <FormControl sx={formStyles}>
        <Input type="url" {...register("avatarUrl")} placeholder="avatarUrl" />
        <Input type="text" {...register("username")} placeholder="username" />
        <Input
          type="text"
          {...register("displayName")}
          placeholder="displayName"
        />

        <Input type="text" {...register("name")} placeholder="name" />
        <Input type="number" {...register("age")} placeholder="age" />
        <Input type="text" {...register("gender")} placeholder="gender" />
        <Input
          type="text"
          {...register("location")}
          value={location}
          onChange={(e) => setValue("location", e.target.value)}
          placeholder="location"
        />
        <Input
          type="text"
          {...register("interests1")}
          placeholder="interests1"
        />
        <Input
          type="text"
          {...register("interests2")}
          placeholder="interests2"
        />
        <Input type="email" {...register("email")} placeholder="email" />

        <Button type="submit">Save</Button>
      </FormControl>
    </form>
  );
};

export default UserProfileForm;
