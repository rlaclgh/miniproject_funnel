## 설명

[mixpanel](https://mixpanel.com/) 을 활용해 funnel 분석하는 프로젝트입니다.   
Step1 -> Step2 -> Step3 -> Step4 -> Complete 의 단계로 이루어져 있습니다.   
각 단계별 이탈률을 확인할 수 있습니다.   



## 실행결과


<img src="https://github.com/rlaclgh/miniproject_funnel/assets/46914232/7fa051a1-68b6-4fa4-bf0b-a4d961c88a88" width="600px" ></img>

<br />

<img src="https://github.com/rlaclgh/miniproject_funnel/assets/46914232/9e23d2df-4e06-4fb3-83e8-13e5e4576fbc" width="600px" ></img>

<br />


## 실행방법


client/.env에 token 입력
```

NEXT_PUBLIC_MIXPANEL_TOKEN = MIXPANEL_TOKEN

```

```

docker compose up -d --build

```

## 기술스택

- client: Nextjs
- server: Spring boot
- db : Postgre
