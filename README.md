# blog.belgacem.io
This a customized version of [morethan-log blog](https://github.com/morethanmin/morethan-log)

# Setup your local environment
1. Build you docker image and ru it using docker compose
   ```sh
    make up
   ```

2. Install `npmd` to simplify running `npm` commands inside your docker container 
   ```sh
    ./npmd --insall
   ```
   
3. Build your project
   ```sh
    npmd run build
   ```

4. Start your server
   ```sh
    npmd run start
   ```