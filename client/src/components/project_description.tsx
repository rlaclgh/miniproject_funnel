"use client";

const ProjectDescription = () => {
  return (
    <div className="flex items-center h-full flex-col">
      <div className="w-120">
        <div className="text-5xl mb-10 mt-10">miniproject_funnel</div>
        <div className="text-2xl my-2">1. 프로젝트 설명</div>
        <div className="text-xl my-2">
          1.1.
          <a href="https://mixpanel.com/" className="text-blue">
            mixpanel
          </a>
          을 활용해 funnel 분석하는 프로젝트입니다.
        </div>
        <div className="text-xl my-2">
          1.2. Step1 -{">"} Step2 -{">"} Step3 -{">"} Step4 -{">"} Complete 의
          단계의 funnel 입니다.
        </div>
        <div className="text-xl my-2">
          1.3. 각 단계별 이탈률을 확인할 수 있습니다.
        </div>

        <img src="funnel.png" width={800}></img>
      </div>
    </div>
  );
};

export default ProjectDescription;
