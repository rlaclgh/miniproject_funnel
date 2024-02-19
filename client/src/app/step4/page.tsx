"use client";
import Header from "@/components/header";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import TextButton from "@/components/text_button";
import { useRouter } from "next/navigation";

const Step4 = () => {
  const router = useRouter();
  useEffect(() => {
    mixpanel.track("Step4", {});
  }, []);

  return (
    <div>
      <Header renderCenter={() => <div>Step4</div>} />

      <div className="p-4">
        <TextButton
          text="메인으로"
          onClick={() => {
            router.push("/");
          }}
          disabled={false}
        />
      </div>

      <div className="p-4">
        <TextButton
          text="완료"
          onClick={() => {
            mixpanel.track("Complete", {});
            router.push("/");
          }}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Step4;
