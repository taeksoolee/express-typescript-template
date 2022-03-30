# express - Template Project

## 세팅 내용
* express / typescript
* static 설정
* bodyParser 설정
* 라우터 분리
* 절대경로 적용
* dotenv 설정 적용

## 명령어 - Command
``` shell
    npm run start:dev # 절대경로(@src/) 사용시 
```

## 테스트
```
    curl http://localhost:4000/hero | jq
    curl http://localhost:4000/hero -X POST -d "name=lee" | jq
    curl http://localhost:4000/hero/1 -X PUT -d "name=taek" | jq
    curl http://localhost:4000/hero/1 -X DELETE | jq
```