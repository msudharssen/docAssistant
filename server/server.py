from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
from functions.create_db import main
from functions.query_data import generateAns

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

UPLOAD_DIR = os.path.join(os.path.dirname(__file__), 'info/data')
paths = os.path.join(os.path.dirname(__file__), '../info/data')

os.makedirs(UPLOAD_DIR, exist_ok=True)  

@app.route('/uploadfile', methods=['POST'])
def upload_file():
   
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file part"}), 400

        file = request.files['file']

        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400

        filename = secure_filename(file.filename)
        file_location = os.path.join(UPLOAD_DIR, filename)
        file.save(file_location)
        #generate the v- database through main function from create_db.py
        main()

        return jsonify({"Result": "Succesfully Uploaded"}), 200

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"File upload failed: {e}"}), 500



#route to answer the query from the user
@app.route('/answerquerry', methods=['POST'])
def ans():
    query = request.json['search']
    print("Hello World")
    if query:
        result = generateAns(query)
        return jsonify({"answer": result}), 200
    return jsonify({"error": "No answer found"}), 404


if __name__ == '__main__':
    app.run(debug=True, port=5000)
