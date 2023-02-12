const express = require("express");
const router = require("./router/router.js");
const mongoose = require("mongoose");
const app = express();
const path = require('path');

const db = "mongodb+srv://buiducduy:Buiducduy%4007062000@cluster0.fugtbzu.mongodb.net/asure";

const PORT = process.env.PORT || 3000;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>{console.log('ket noi db thanh cong');});
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use('/static', express.static(path.join(__dirname, 'public')))

router(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

