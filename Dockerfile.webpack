# from base image node
FROM node:8.11-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy oter files as well
COPY dist/api.bundle.js .

#expose the port
EXPOSE 3070

# command to run when intantiate an image
CMD ["node","api.bundle.js"]