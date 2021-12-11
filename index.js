// Импортируем базовые конфигурации
const express = require('express')

// Экспортируем роутер
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')


// Порт по умолчанию 8080
const PORT = process.env.PORT || 8080

// Создание самого сервера
const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)


// Заставляем сервер слушать этот порт
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))