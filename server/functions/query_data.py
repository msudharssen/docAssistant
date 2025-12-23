import argparse
from langchain_chroma import Chroma
from langchain.prompts import ChatPromptTemplate
from langchain_ollama import OllamaEmbeddings
from langchain_ollama import OllamaLLM
import os
from dotenv import load_dotenv


load_dotenv()
urlPath = os.environ.get('OLLAMA_HOST')




embedding_function = OllamaEmbeddings(model="llama3.1", base_url=urlPath)
CHROMA_PATH =  os.path.join(os.path.dirname(__file__), '../database')

PROMPT_TEMPLATE = """
Answer the question based only on the following context:

{context}

---

Answer the question based on the above context: {question}
"""


def generateAns(text):
    

    print(f"Query: {text}")

    embedding_function = OllamaEmbeddings(model="llama3.1", base_url=urlPath)
    db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embedding_function)
    print(CHROMA_PATH)

    print(f"Number of documents in the database: ")   

#get the 5 most relevant documents that can help answer the question
    results = db.similarity_search_with_relevance_scores(text, k=5)
    print(results)
    if len(results) == 0 or results[0][1] < 0.1:
        print(f"Unable to find matching results.")
        return (f"Unable to find matching results.")

    context_text = "\n\n---\n\n".join([doc.page_content for doc, _score in results])
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt = prompt_template.format(context=context_text, question=text)
    print(prompt)

    model = OllamaLLM(model="llama3.1", base_url=urlPath)
    response_text = model.invoke(prompt)

    # create the response
    formatted_response = f"Response: {response_text}"
    print(formatted_response)
    return(formatted_response)

   
if __name__ == "__main__":
    generateAns()

