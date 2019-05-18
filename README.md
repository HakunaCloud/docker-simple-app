This is a docker container with simple Express web application that expose few methods 

# Why
If you need to test an http server, you can use this container


# API
* `/hello`: Returns an unexpected json message
* `/fset?q=xxx`: save the value of the `q` parameter in the file system
* `/mset?q=xxx`: save the value of the `q` parameter in a variable
* `/fget`: return the value written in the filesystem 
* `/mget`: return the value written in a local variable

# Usage
Create a volume
```bash
docker volume create test
```

Start the container
```bash
docker run -d -p 3000:3000 -v pippuz:/pippuz  hakunacloud/rd-simple-app
```