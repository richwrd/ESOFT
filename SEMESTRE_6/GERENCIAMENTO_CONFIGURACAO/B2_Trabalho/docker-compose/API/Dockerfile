FROM node:18

WORKDIR C:/Users/Karla Duarte/Documents/docker/node/
# está copiando todos os pacotes e colocando no diretório configurado acima
COPY package*.json .

#instala as dependencias do app
RUN npm install
#criar permissões do node, copia tudo e cola no ditetório definido no workdir
COPY --chown=node:node . .
RUN npm install -g @nestjs/cli
RUN npm run build


EXPOSE 3001

CMD ["npm", "run", "start"]