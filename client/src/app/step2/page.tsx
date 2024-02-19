"use client";
import Header from "@/components/header";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import TextButton from "@/components/text_button";
import { useRouter } from "next/navigation";

const Step2 = () => {
  const router = useRouter();
  useEffect(() => {
    mixpanel.track("Step2", {});
  }, []);
  return (
    <div>
      <Header renderCenter={() => <div>Step2</div>} />

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
          text="step3으로 이동"
          onClick={() => {
            router.push("/step3");
          }}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Step2;
