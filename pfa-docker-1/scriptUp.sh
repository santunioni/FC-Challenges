# Create docker network for connecting the containers
docker network create -d bridge santunioni-pfa-docker-1 || true
# Setup the database not forwarding any port to host pc. Connections happen only inside the network
docker build -f ./sql/sql.dockerfile -t santunioni/fc_mysql:latest ./sql
docker run --rm -itd --name santunioni_mysql --network=santunioni-pfa-docker-1 santunioni/fc_mysql
# Give it some time for the database to start before running the app
sleep 20s
# Setup the node app which will get data from the database, also not forwarding any port to host pc.
docker build -f ./app/app.dockerfile -t santunioni/fc_app:latest ./app
docker run --rm -itd --name santunioni_app --network=santunioni-pfa-docker-1 --env-file app/database.env santunioni/fc_app
# Setup nginx configured to forward requests to node app at port 3000. Nginx will listen to localhost: 80 because the port forwarding.
docker build -f ./nginx/nginx.dockerfile -t santunioni/fc_nginx:latest ./nginx
docker run --rm -itdp 80:80 --name santunioni_nginx --network=santunioni-pfa-docker-1 -d santunioni/fc_nginx
