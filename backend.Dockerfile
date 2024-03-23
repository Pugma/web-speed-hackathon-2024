FROM golang:1.22-alpine3.19

WORKDIR /app

COPY /workspaces/server/ .

RUN go mod download && go build -o main .

EXPOSE 8080

ENTRYPOINT [ "./main" ] 