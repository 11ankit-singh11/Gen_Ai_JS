import 'dotenv/config'; 
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf"
import { OpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";

async function init(){

    const pdfFilePath = './rag/opti.pdf';
    const loader = new PDFLoader(pdfFilePath);
    const docs = await loader.load();

const embeddings = new OpenAIEmbeddings({
  apiKey: process.env.OPENAI_API_KEY,
  model: "text-embedding-3-large",
}); 


const vectoreStore = await QdrantVectorStore.fromDocuments(docs, embeddings, {
  url: "http://localhost:6333",
  collectionName: "optiver-articles", 
});

console.log("Indexing completed.");

}   
init();
