// 
const extractPrompt = (content)=>{

    const regex = /### Your Prompt[\s\S]*```txt\n([\s\S]*?)```/i;
    const match = content.match(regex);
    console.debug("content",content);
  
    if (match && match.length >= 2) {
      const codeBlockContent = match[1].trim();
      console.log(codeBlockContent);
    } else {
      console.log(""); // Code block not found
    }
};

extractPrompt(process.argv[2])