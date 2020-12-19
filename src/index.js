const express = require('express');
//Esto es un modulo de Node que ya viene instalado por defecto y podemos usarlo requeriendol como aquí
const path = require('path');
//Aquí requerimos a handlebars que ya fué instalado como npm y almacenamos en una constante
const exphbs = require('express-handlebars');
//Aqui requerimos a otro modulo que instalamos
const methodOverride = require('method-override');
//Aqui requerimos otros modulo que instalamos.
const session = require('express-session');

//Initializations
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);
//Al requerir path en la linea 3, aqui lo usamos, que lo que nos hace es buscar directorios donde
//queramos. por ejemplo en este caso estará buscando la carpeta views. Y lo hace con el JOIN que pertnece al modulo path
app.set('views', path.join(__dirname, 'views'));
//Aquí llamamos al motor de handlebar y le decimos que escuche al module con las constante EXPHBS y que 
//será archivo .hbs (handlebars) y le damos un objetos de configuraricion que nos ayudaran s buscar carpetas
//en nuestro proyecto.
app.engine('.hbs', exphbs({
    //Aquí le decimos que el directorio donde vamos a usar la plantilla principal sera main, es un archivo.hbs
    //pero no hace falt ponerselo
    defaultLayout: ('main'),
    //Aquí le diremos donde está el directorio de layout, para que lo pueda encontrar y usaremmos JOIN
    layoutsDir: path.join(app.get('views'), 'layouts'),
    //Aqui estarán los partial, son pequeñas partes de HTML que luedo podemos volver a usar en cualquier vista
    //le creamos una carpeta dentro de views que se llama PARTIALS
    partialsDir: path.join(app.get('views'), 'partials'),
    //Esto sirve para decirle en que van a terminar nuestros archivos.
    extname: '.hbs'
}));
//Una vez configurado(lineas de arriba), ahora le voy a decir que es donde queremos aplicar esa configuración
app.set('view engine', '.hbs');


//Middlewares
//Esto sirve para que cuando un usuario envie un formulario podamos entender sus datos.
//dandole la funcion extended false, le decimos que solo queremos sus datos, no imagenes ni cosas extras.
app.use(express.urlencoded({extended: false}));
//Este es un metodo que instalamos, nos sirve para que nos deje usar mas metodos aparte de GET Y POST.
app.use(methodOverride('_method'));
//A traves de esta configuracion nos van a poder permitir autenticar al usuario y almacenarlo temporalmente.
app.use(session({
    secret: 'mysecretspp',
    resave: true,
    saveUninitialized: true
}));


//Global Variables

//Routes
//Aqui es donde vamos a requerir los archivos que es donde van estan las rutas para los usuarios, notas e index
//que será el directorio principal.
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));


//State Files

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});