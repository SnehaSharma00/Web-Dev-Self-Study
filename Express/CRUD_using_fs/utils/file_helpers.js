const fsPromises = require("fs/Promises");

const myReadFile = async (filePath)=>{
    try{
        const data = await fsPromises.readFIle(filePath, "utf-8");
        //return data; //string in form of js object
        return JSON.parse(data);//JSON string to JS object
    }catch(err){
        console.log("error in reading file ,", err.message);
        return [];
    }
};

const mySaveFile = async (filePath, data)=>{
    try{
        const str = JSON.stringify(data, null, 4 ); //JS Object to JSON string
        await fsPromises.writeFile(filePath, str);
    }catch(err){
        console.log("error saving file ", err.message);
        return [];
    }
};

module.exports = { myReadFile, mySaveFile };