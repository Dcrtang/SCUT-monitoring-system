# SCUT-monitoring-system

[![Docker Build & Publish](https://github.com/Dcrtang/SCUT-monitoring-system/actions/workflows/build-docker-images.yaml/badge.svg)](https://github.com/Dcrtang/SCUT-monitoring-system/actions/workflows/build-docker-images.yaml)

## Getting started

### Prerequisites

- docker

- docker-compose

## Boot up the system

1. Clone the project
   
   ```shell
   git clone https://github.com/Dcrtang/SCUT-monitoring-system.git
   ```

2. Start services
   
   ```shell
   cd SCUT-monitoring-system
   docker-compose up -d
   ```

### Operations

- Stopping services
  
  ```shell
  cd SCUT-monitoring-system
  docker-compose down
  ```

- Updating services
  
  ```shell
  cd SCUT-monitoring-system
  docker-compose pull
  ```