"use client";
import Header from "@/components/header";
import TextButton from "@/components/text_button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header renderCenter={() => <div>메인 페이지</div>} />

      <div className="p-4">
        <TextButton
          text="step1으로 이동"
          onClick={() => {
            router.push("/step1");
          }}
          disabled={false}
        />
      </div>
    </div>
  );
}
