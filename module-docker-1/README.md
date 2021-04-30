# Code.education Rocks!

The Dockerfile builds a lightweight docker image (1.939MB) which prints "Code.education Rocks!" in the console if executed.

How to test:

- Build the docker image (skip this step if you prefer to download the image from docker.hub): `docker build . -t santunioni/hello-go:latest`

- Execute the image (lift a container): `docker run santunioni/hello-go:latest`
