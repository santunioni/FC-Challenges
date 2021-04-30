FROM golang:1 as builder
COPY hello.go .
ENV CGO_ENABLED=0
RUN GOOS=linux go build hello.go && rm hello.go

FROM scratch
COPY --from=builder /go/hello .
ENTRYPOINT [ "./hello" ]
