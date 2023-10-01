// TODO: insert backlink to let user locate the prompt and make pull request
const mergePrompt = (base,modification)=>{
    const regex = /```([\s\S]*?)```/g;
    const codeBlocks = [];
    let match;
  
    while ((match = regex.exec(modification)) !== null) {
      codeBlocks.push(match[1]);
    }
  
    console.log(base+"\n"+codeBlocks.join('\n'));
  }
mergePrompt(process.argv[1],process.argv[2])// TEST: whitespace and quotation mark in argv[1] is escaped
