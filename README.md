# Document Assistant AI

A full-stack application that enables users to upload PDF documents and ask questions about their content using AI-powered document analysis and retrieval.

## Features

- **PDF Document Upload**: Upload PDF files for processing and analysis
- **AI-Powered Q&A**: Ask questions about uploaded documents and get intelligent responses
- **Vector Database**: Documents are processed into semantic chunks using Chroma vector database
- **Chat Interface**: Clean, intuitive chat interface for interactive document exploration
- **Real-time Processing**: Immediate feedback and responses to user queries

## Tech Stack

### Backend
- **Flask**: Python web framework for API endpoints
- **LangChain**: Framework for building LLM applications
- **Ollama**: Local LLM integration (Llama 3.1)
- **Chroma**: Vector database for document embeddings
- **PyPDF**: PDF document processing

### Frontend
- **React**: Modern JavaScript UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Create React App**: Development environment and build tools

## Project Structure

```
docAssistantAi/
├── server/                 # Flask backend
│   ├── server.py          # Main Flask application
│   ├── functions/         # Core functionality modules
│   │   ├── create_db.py   # Vector database creation
│   │   └── query_data.py  # Document querying logic
│   ├── database/          # Chroma vector database storage
│   └── info/data/         # Uploaded PDF storage
└── client/                # React frontend
    ├── src/
    │   ├── components/    # React components
    │   │   ├── Dashboard.js  # Main application dashboard
    │   │   ├── Upload.js     # File upload component
    │   │   ├── Search.js     # Query input component
    │   │   └── Chatbox.js    # Chat display component
    │   └── index.js       # Application entry point
    ├── package.json       # Node.js dependencies
    └── tailwind.config.js # Tailwind CSS configuration
```

## Prerequisites

- **Python 3.8+**
- **Node.js 16+**
- **Ollama** with Llama 3.1 model installed

### Installing Ollama and Llama 3.1

1. Install Ollama from [ollama.ai](https://ollama.ai)
2. Pull the Llama 3.1 model:
   ```bash
   ollama pull llama3.1
   ```

## Installation

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install Python dependencies:
   ```bash
   pip install flask flask-cors langchain langchain-community langchain-ollama langchain-experimental chroma pypdf
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Start the Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Activate virtual environment:
   ```bash
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Start the Flask server:
   ```bash
   python server.py
   ```

The backend will run on `http://localhost:5000`

### Start the Frontend

1. In a new terminal, navigate to the client directory:
   ```bash
   cd client
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## Usage

1. **Upload a PDF**: Use the upload panel on the left to select and upload a PDF document
2. **Wait for Processing**: The system will process the PDF and create vector embeddings
3. **Ask Questions**: Type questions about the document content in the input field
4. **View Responses**: AI-generated answers will appear in the chat interface

## API Endpoints

### POST /uploadfile
Uploads a PDF file and processes it into the vector database.

**Request**: Multipart form data with 'file' field
**Response**: Success/error message

### POST /answerquerry
Queries the processed documents and returns AI-generated answers.

**Request**: JSON with 'search' field containing the question
**Response**: JSON with 'answer' field containing the response

## How It Works

1. **Document Upload**: PDFs are uploaded to the `info/data` directory
2. **Text Processing**: PyPDF extracts text content from uploaded documents
3. **Semantic Chunking**: Documents are split into meaningful chunks using LangChain's SemanticChunker
4. **Vector Embeddings**: Ollama generates embeddings for each chunk using Llama 3.1
5. **Storage**: Embeddings are stored in Chroma vector database
6. **Query Processing**: User questions are converted to embeddings and matched against stored documents
7. **Response Generation**: Relevant chunks are retrieved and fed to Llama 3.1 for answer generation

## Customization

- **Model Selection**: Change the Ollama model in `create_db.py` and `query_data.py`
- **Chunk Settings**: Modify semantic chunking parameters in the `split` function
- **UI Styling**: Update Tailwind classes in React components for different appearances
- **Similarity Threshold**: Adjust the relevance score threshold in `query_data.py`

## Troubleshooting

**Ollama Connection Issues**: Ensure Ollama is running and the Llama 3.1 model is installed
**CORS Errors**: Verify the Flask CORS configuration matches your frontend URL
**File Upload Failures**: Check that the `info/data` directory exists and has write permissions
**No Search Results**: Ensure documents have been uploaded and processed successfully

## License

This project is open source and available under the MIT License.