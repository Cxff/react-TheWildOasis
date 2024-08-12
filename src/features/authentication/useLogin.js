import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // 手动将数据设置为缓存
      queryClient.setQueryData(["user"], user.user);
      console.log("Login==>", user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
