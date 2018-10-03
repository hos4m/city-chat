printf ">>> Installing whole product dependencies <<<\n"
npm i

printf ">>> Installing front end dependencies <<<\n"
cd ./client
npm i

printf ">>> Installing backend end dependencies <<<\n"
cd ../server
npm i
