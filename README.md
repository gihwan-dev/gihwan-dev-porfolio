# 포트폴리오 사이트 겸 기술 블로그

포트폴리오 사이트 겸 기술 블로그로 운영하기 위한 사이트 입니다.

## 기술 스택

- Next.js
- TailwindCSS
- tRPC
- prisma

## 인프라

배포: Vercel
데이터베이스: Vercel PostgreSQL
도메인: AWS 도메인 + AWS Route 53

## 사용 방법

.env파일을 만들고 DATABASE_URL에 vercel의 postgreSQL 주소를 입력합니다.

```sh
pnpm dlx prisma generate

pnpm run dev
```

를 입력해 파일을 실행합니다.

/admin 경로로 접속해 화면테 보여지는 컨텐츠를 수정할 수 있습니다.
