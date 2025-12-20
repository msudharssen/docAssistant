FROM python:3.12.12-alpine3.23
WORKDIR /appServer
COPY requirements.txt /appServer/
RUN pip install --upgrade pip
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . /appServer/
EXPOSE 5000
ENV FLASK_APP=server.py
CMD [ "flask --app server run"]