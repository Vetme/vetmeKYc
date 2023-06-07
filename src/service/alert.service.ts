import { toast } from "react-toastify";

export const renderError = (error: any) => {
  if ([400, 500, 401].includes(error.status)) {
    toast.error(error.data.message, {});
  } else {
    toast.error(error, {});
  }
};

export const renderSuccess = (msg: string) => {
  return toast.success(msg, {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
