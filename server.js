const app =require('./app.js')
const PORT = process.env.PORT || 5005;


app.listen(PORT,()=>{
    console.log(`Running server at PORT: ${PORT}`);
})