# SCUT-monitoring-system

[![Docker Build & Publish](https://github.com/Dcrtang/SCUT-monitoring-system/actions/workflows/build-docker-images.yaml/badge.svg)](https://github.com/Dcrtang/SCUT-monitoring-system/actions/workflows/build-docker-images.yaml)

## Getting started

### Prerequisites

- docker

- docker-compose

### Install Docker

```shell
curl -sSL https://get.daocloud.io/docker -o docker-install.sh
chmod +x docker-install.sh
sudo ./docker-install.sh --mirror Aliyun
curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://f1361db2.m.daocloud.io
```

## Boot up the system

1. Clone the project
   
   ```shell
   git clone https://github.com/Dcrtang/SCUT-monitoring-system.git
   ```

2. Start services
   
   ```shell
   cd SCUT-monitoring-system
   sudo docker compose -f docker-compose.yaml up -d
   ```

### Operations

- Stopping services
  
  ```shell
  cd SCUT-monitoring-system
  sudo docker -f docker-compose.yaml compose down
  ```

- Updating services
  
  ```shell
  cd SCUT-monitoring-system
  sudo docker -f docker-compose.yaml compose pull
  ```

## For multi bridge version

Just replace the ` -f docker-compose.yaml` args with ` -f docker-compose-multi-bridge.yaml`, it will work.
