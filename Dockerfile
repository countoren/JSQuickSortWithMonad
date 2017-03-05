FROM node:6.3.1

WORKDIR /app
ADD package.json /app/
RUN npm install \
&& npm install --global jest \
&& npm install -g node-inspector 

ADD . /app

CMD ['node --debug-brk ./node_modules/.bin/jest & node-inspector']
