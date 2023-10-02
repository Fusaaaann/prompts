// 
const extractPrompt = (content)=>{

    const prompt_pattern = /### your prompt[\s\S]*```txt\s+([\s\S]*)```/i;
    const match = content.match(prompt_pattern);
    console.error("content:");
    console.error("%j",content);
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