"use client";
import api from "@/api/api";
import { useEffect } from "react";

const Todo = () => {
  useEffect(() => {
    const getTodos = async () => {
      const token = await api.login({
        username: "Anpan1ss",
        password: "1234",
        name: "Aleksey",
        surname: "Kondratev",
      });
      console.log(token);
      api.setAuthToken(token);
    };

    getTodos();
  }, []);
  return <></>;
};

export default Todo;
