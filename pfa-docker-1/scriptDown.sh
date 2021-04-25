docker container rm -f santunioni_mysql || true
docker container rm -f santunioni_nginx || true
docker container rm -f santunioni_app || true
docker image rm -f santunioni/fc_mysql || true
docker image rm -f santunioni/fc_nginx || true
docker image rm -f santunioni/fc_app || true
docker network rm santunioni-pfa-docker-1 || true