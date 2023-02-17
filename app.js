const Koa = require("koa");
const app = new Koa();
const static = require("koa-static");
const routers = require("./routers/index");
const path = require("path");
const bodyParser = require("koa-bodyparser");
var cors = require('koa2-cors');
const port = 3001;

// 使用ctx.body解析中间件
app.use(bodyParser());

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());
// 暴露静态资源
app.use(static(path.join(__dirname, "./static")));

// 实现跨域
app.use(cors());

app.listen(port);
console.log(`[demo] start-quick is starting at port ${port}`);
