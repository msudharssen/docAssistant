from langchain.schema import Document
from langchain_community.document_loaders.pdf import PyPDFDirectoryLoader
from langchain_ollama import OllamaEmbeddings
from langchain_community.vectorstores import Chroma
import os
import shutil
from langchain_experimental.text_splitter import SemanticChunker



#declare paths to store chroma database and the documents, and original file
CHROMA_PATH = os.path.join(os.path.dirname(__file__), '../database')
paths = os.path.join(os.path.dirname(__file__), '../info/data')



def main():
    makeDataStore(paths)


def makeDataStore(p):
    documents = loadDoc(p)
    chunks = split(documents)
    chromaSave(chunks)


def loadDoc(p):
    document_loader = PyPDFDirectoryLoader(p)
    doc = document_loader.load()
    print("Intial:", doc)
    print('Loaded', len(doc), 'documents.')
    return doc


#generate the data store using semantic chunks
def split(documents: list[Document]):
    text_splitter = SemanticChunker(OllamaEmbeddings(model='llama3.1'), breakpoint_threshold_type='percentile')    
    doc_chunks = text_splitter.split_documents(documents)
    print(type(doc_chunks))
    return doc_chunks

#create vector embeddings for each chunk
def chromaSave(chunks: list[Document]):
    if os.path.exists(CHROMA_PATH):
        shutil.rmtree(CHROMA_PATH)
    if not chunks:
        raise ValueError("No documents provided to Chroma.from_documents()")
    
    db = Chroma.from_documents(
        documents=chunks, 
        embedding=OllamaEmbeddings(model="llama3.1"),
        persist_directory=CHROMA_PATH
    )
    db.persist()
    print(f"Saved {len(chunks)} chunks to {CHROMA_PATH}.")


if __name__ == "__main__":
    main()