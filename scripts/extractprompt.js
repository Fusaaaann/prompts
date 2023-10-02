// 
const extractPrompt = (content)=>{

    const regex = /### your prompt[\s\S]*```txt\n([\s\S]*?)```/i;
    const match = content.match(regex);
    console.error("content:",content);
    console.error("match:",match);
  
    if (match && match.length >= 2) {
      const codeBlockContent = match[1].trim();
      console.log(codeBlockContent);
      console.error("result:",codeBlockContent);
    } else {
      console.log(""); // Code block not found
      console.error("prompt not found");
    }
};

extractPrompt(process.argv[2])