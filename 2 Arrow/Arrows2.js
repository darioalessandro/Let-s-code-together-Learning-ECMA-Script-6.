
/*
 Count names characters and print them. Multiline arrow function.
 */

var names = ["Name1", "Name223234", "Name3ddgsdfhdsfh"];

var namesCharCount = names.map((name) => {
        const length = name.length;
        return {
            name: name,
            length: length
        }
    }
);

console.log("NamesCharCount", namesCharCount);