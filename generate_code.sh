protoc -I=$DIR echo.proto \
    --js_out=import_style=commonjs:frontend/src/helloworld \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:frontend/src/helloworld