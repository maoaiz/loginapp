# loginapp

Login app with express for Acamica

This project serves a express api to get data from a form in the frontend.


# Docker 


## Create a simple container

1. Build your own image based on our Dockerfile:

```
docker build . -t loginapp_image
```

2. Check your image:

```
docker images
```
You should see you `loginapp_image` in the list.

3. Run your container:

```
docker run --name loginapp_container -p 4567:3000 -d loginapp_image
```

4. Check your container:

```
docker ps
```
You should see you `loginapp_container` in the list.

5. Check your browser [localhost:4567](http://localhost:4567), you should see your api responses

6. [Optional] Connect to your container:

```
docker exec -it loginapp_container bash
```
You should be inside of your container

7. Stop your container and images:

```
docker stop loginapp_container
```
Our node app is not running anymore, you can check the browser and realize nothing is running in the port 4567.

You can also use `start` or `rm`.

Remove the image:
```
docker image rm loginapp_image
```


## Create a simple container with Docker compose

If you see the previous point 3 you realize that the command is a little bit large, Docker compose can help you to prevent remember all command with the following:

```
docker-compose up
```

