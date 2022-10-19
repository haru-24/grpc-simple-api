mkdir -p api/helloworld
mkdir -p frontend/src/helloworld


# js
protoc proto/helloworld.proto \
    --js_out=import_style=commonjs:frontend/src/helloworld \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:frontend/src/helloworld 


# go
protoc  --go_out=api/helloworld --go_opt=paths=source_relative \
        --go-grpc_out=api/helloworld --go-grpc_opt=paths=source_relative \
        ./proto/helloworld.proto