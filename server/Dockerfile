#Stage 1: Build
FROM python:3.11-slim AS builder
WORKDIR /server
COPY requirements.txt /server/
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
COPY . /server/
ENV FLASK_APP=server.py
ENV PYTHONPATH=/server


#Stage 2: Production
FROM python:3.11-slim AS production
WORKDIR /server
COPY --from=builder /usr/local/lib/python3.11/site-packages/ /usr/local/lib/python3.11/site-packages/
COPY --from=builder /server /server
EXPOSE 5000
ENV FLASK_APP=server.py
ENV PYTHONPATH=/server
CMD ["python", "-m", "flask", "run", "--host=0.0.0.0"]


