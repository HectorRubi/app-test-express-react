#!/bin/bash
searching=1
while [ $searching -eq 1 ]
do
  res=$(docker-compose logs db | grep -o "database system is ready to accept connections" | wc -l)
  if [[ $res -eq 2 ]]
  then
    echo $(docker-compose logs db | grep -o "database system is ready to accept connections")
    echo $(docker-compose logs db | grep -o "database system is ready to accept connections" | wc -l)
    searching=$(( $searching + 1))
  fi
done
echo 'done'