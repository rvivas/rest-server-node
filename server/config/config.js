//=======================
//       PUERTO
//=======================

process.env.PORT = process.env.PORT || 3000


//=======================
// Entorno
//=======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//======================
// Vencimiento del token
//======================
// 60 segundos
// 60 minutos
// 24 horas (1 dia)
// 30 dias (1 mes)

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

//======================
// SEED del token
//======================

process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo'
    //======================
    // Base de datos
    //======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://rvivas:12345@localhost:27017/admin'
} else {
    urlDB = process.env.MONGO_URI
}

process.env.URLDB = urlDB;