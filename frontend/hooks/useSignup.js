import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../src/context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  useAuthContext
 
  const { setAuthUser } = useAuthContext();


  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    console.log(fullName);
    const sucess = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!sucess) return;

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      // LOcalStorage 
      localStorage.setItem("chat-user", JSON.stringify(data))
      //context
      setAuthUser(data);




    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password != confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("password must be at  least 6  characters");
    return false;
  }
  return true;
}
