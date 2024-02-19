"use client";
import Header from "@/components/header";
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import TextButton from "@/components/text_button";
import { useRouter } from "next/navigation";

const Step3 = () => {
  const router = useRouter();
  useEffect(() => {
    mixpanel.track("Step3", {});
  }, []);
  return (
    <div>
      <Header renderCenter={() => <div>Step3</div>} />

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
          text="step4으로 이동"
          onClick={() => {
            router.push("/step4");
          }}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Step3;
