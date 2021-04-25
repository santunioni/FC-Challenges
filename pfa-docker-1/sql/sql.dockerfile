FROM mysql:8

ENV MYSQL_DATABASE FullCycle
ENV MYSQL_RANDOM_ROOT_PASSWORD TRUE

COPY ./seed.sql /docker-entrypoint-initdb.d/seed.sql

EXPOSE 3306