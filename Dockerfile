###
### Build a image file for nodejs development
###

FROM node:latest

# update packages
RUN set -x \
&& apt-get update \
&& apt-get upgrade -y \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*

# install tools
RUN npm install -g gulp \
&& npm install -g coffee-script \
&& npm cache clear
