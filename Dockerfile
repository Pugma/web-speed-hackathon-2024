# フロントエンドビルド用
FROM node:20.11.1-alpine as client-build

WORKDIR /usr/src/app

RUN apk --no-cache add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata

RUN apk --no-cache add jemalloc
ENV LD_PRELOAD=/usr/lib/libjemalloc.so.2

COPY . .
RUN corepack enable pnpm
RUN pnpm install
RUN pnpm build

ENV PORT 8000
EXPOSE 8000

# バックエンドビルド用
FROM golang:1.22.1-alpine3.19 as server-build

WORKDIR /usr/src/app
COPY . .

RUN cd workspaces/server && go mod download && go build -o app .


# 最終的な配信用
FROM alpine:latest

WORKDIR /

COPY --from=client-build /usr/src/app .
COPY --from=server-build /usr/src/app/app .

EXPOSE 8000

ENTRYPOINT ["./app"]
