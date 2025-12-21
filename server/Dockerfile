FROM python:3.11-slim
WORKDIR /server
COPY requirements.txt /server/
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
COPY . /server/
EXPOSE 5000
ENV FLASK_APP=/server/server.py
CMD ["flask", "run", "--host=0.0.0.0"]