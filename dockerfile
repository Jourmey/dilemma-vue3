FROM nginx

COPY dist/  /app/dilemma-web/
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'echo init ok!!'