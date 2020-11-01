const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog', { useUnifiedTopology: true, useNewUrlParser: true })

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))


app.get('/', (req,res) => {
    const articles = [{
        title: 'test article',
        createdAt: new Date(),
        description: 'this is description'
    },{
        title: 'Another Article',
        createdAt: new Date(),
        description: 'this is another part'
    }]
    res.render('articles/index', {articles : articles })
})


app.use('/articles', articleRouter)

app.listen(3000, console.log('listening'))