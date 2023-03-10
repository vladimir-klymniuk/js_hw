// https://connect.facebook.net/en_US/sdk.js

async function* makeTextFileLineIterator(fileURL) {
    const utf8Decoder = new TextDecoder('utf-8');
    const response = await fetch(fileURL);
    const reader = response.body.getReader();
    let { value: chunk, done: readerDone } = await reader.read();
    chunk = chunk ? utf8Decoder.decode(chunk) : '';
  
    const re = /\n|\r|\r\n/gm;
    let startIndex = 0;
    let result;
  
    while (true) {
      let result = re.exec(chunk);
      if (!result) {
        if (readerDone) break;
        let remainder = chunk.substr(startIndex);
        ({ value: chunk, done: readerDone } = await reader.read());
        chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
        startIndex = re.lastIndex = 0;
        continue;
      }
      yield chunk.substring(startIndex, result.index);
      startIndex = re.lastIndex;
    }
  
    if (startIndex < chunk.length) {
      // Last line didn't end in a newline char
      yield chunk.substr(startIndex);
    }
  }
  
  async function run() {
    const urlOfFile = "https://connect.facebook.net/en_US/sdk.js";
    for await (const line of makeTextFileLineIterator(urlOfFile)) {
        console.log("---------------------------------------------------");
        console.log(line);
        console.log("-----!!!!--------------------------!!!!!!----------------");
    //   processLine(line);
    }
  }
  
  run();