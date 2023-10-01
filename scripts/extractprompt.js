// 
const extractPrompt = (content)=>{

    const regex = /### Your Prompt([\s\S]*?)```([\s\S]*?)```/i;
    const match = content.match(regex);
  
    if (match && match.length >= 3) {
      const codeBlockContent = match[2].trim();
      console.log(codeBlockContent);
    } else {
      console.log(""); // Code block not found
    }
};

extractPrompt(process.argv[1])