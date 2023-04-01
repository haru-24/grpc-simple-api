# gRPC Simple API

## Create proto
```bash
$ sh generate_code.sh
```

## Run envoy
Docker image build
```bash
$ sudo docker build -t envoy .
```
Run container
```bash
$ docker run -it -p 8080:8080 envoy
```
