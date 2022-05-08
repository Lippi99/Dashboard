import { notification } from "antd";
export const openNotificationWithIcon = (
  type: "open" | "success" | "info" | "warning" | "error",
  message: string
) => {
  notification[type]({
    message: message,
  });
};
