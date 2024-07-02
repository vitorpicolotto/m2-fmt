const petRoutes = require('./routes/pets.routes')
const vacinasRoutes = require("./routes/vacinas.routes")
const servicosRoutes = require("./routes/servicos.routes")

app.use('/pets', petRoutes)
app.use('/vacinas', vacinasRoutes)
app.use('/servicos', servicosRoutes)