FROM node:12.0.0

RUN mkdir -p /app/src 

WORKDIR /app/src

COPY package.json .
 
RUN npm install
 
COPY . .

EXPOSE 3000

CMD ["npm", "start"]





# COPY . /Courses/Udemy/nextjsinfluencer/react-admin/


# ENV PORT 80



# CMD [ "node", "src/server.js" ]