var longestCommonPrefix = function(strs) {
    let firstWord = strs[0];
    let prefix = '';
    let prefixArr = [];
    if (!strs[0]){
      return "";
    }else if(strs.length === 1){
      return strs[0];
    }else{
      console.log("this is the length of the array :",strs.length);
      console.log(`First Word: ${firstWord}`);
        for (let i = 1; i <= strs.length - 1; i++){
          let word = strs[i];
          console.log(word);
            for (let i = 0; i <= word.length - 1; i++){
              console.log(word[i]);
              if (word[i] === firstWord[i]){
                // console.log(`${word[i]} is the letter at index ${i} of word ${word} and ${firstWord[i]} is the letter at index ${i} of word ${firstWord}`);
                prefix += word[i];
              }else{
                i = word.length;
              }
            };
            prefixArr.push(prefix);
            prefix = '';
          // for (let i = 0; i <= word.length - 1; i++) {
          //   if (x === s[i]){
          //     intArray.push(romanKey[x]);
          //   };
          // };
        };
        console.log('Input: ',strs);
        console.log('Output: ',prefixArr);
        let smallestIndex = 0;
        let lengthTestString = prefixArr[0];
        let secondPrefixArr = [];
      for (let y = 1; y <= prefixArr.length - 1; y++ ){
        if (prefixArr[y].length < lengthTestString.length){
          console.log(`True, ${prefixArr[y]} is less than ${lengthTestString} `);
          smallestIndex = y;
        };
      };
      console.log(` This is the answer: ${prefixArr[smallestIndex]}`);
      if (prefixArr[0] === ''){
        return "";
      }else if(!prefixArr[0]){
        return "";
      }else{
      return prefixArr[smallestIndex];
      };
    };
  };
  
  longestCommonPrefix(["flower","flow","flight"]);
  longestCommonPrefix(["dog","racecar","car"]);
  longestCommonPrefix([]);
  longestCommonPrefix(['a']);
  longestCommonPrefix(["cir","car"]);

  // This was the sloppiest code I've ever written... x/