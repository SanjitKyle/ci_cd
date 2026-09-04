import express from  "express";
const App=express();
App.use(express.json());
App.use(express.urlencoded({extended:true}));
App.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
