const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
// var path = require('path');
const express = require('express');
const app = express();
// var logger = require('morgan');
// var indexRouter = require('../src/router/router');
app.use(bodyParser.json());
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/api/notes', notesRouter);
// app.use('/api/password', passwordRouter);


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


// if (!module.parent) {
//   app.listen(port, host, function () {
//     console.log("Express server listening on port %d in %s mode",
//     app.address().port,
//     app.settings.env
//   );
// });
// }
// 后端api路由
app.use('/api', routerApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');