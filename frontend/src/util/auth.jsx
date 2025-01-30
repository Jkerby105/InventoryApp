import axios from "axios";
import { redirect } from "react-router-dom";

export function getUserID() {
  const ID = localStorage.getItem("userId");
  return ID;
}

export async function checkAuthLoader() {
    const token = localStorage.getItem("token");
    if (!token) {
      return redirect("/");
    }
  
    try {
      const response = await axios.post(
        "http://localhost:3000/account/validate",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response)

      if (response.status !== 200) {
        throw new Error("token is not created");
      }
    

      return null;
    } catch (error) {
      console.error("Token validation failed:", error);
      return redirect("/");
    }

  }
  