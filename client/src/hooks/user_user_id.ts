import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

const useUserId = () => {
  useEffect(() => {
    const userId = localStorage.getItem("userId") || "";

    if (!userId) {
      const newUserId = (Math.random() + 1).toString(36).substring(2, 10);
      localStorage.setItem("userId", newUserId);
      mixpanel.identify(newUserId);
    } else {
      mixpanel.identify(userId);
    }
  }, []);
};

export default useUserId;
