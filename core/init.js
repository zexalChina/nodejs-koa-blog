const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app;
    InitManager.initLoadRouters()
    InitManager.loadHttpException()
    InitManager.loadConfig()
  }

  // 加载全部路由
  static initLoadRouters() {
    // 绝对路径
    const apiDirectory = `${process.cwd()}/app/api`
    // 路由自动加载 // 参数：第一个参数固定参数module，第二个参数要加载的模块的文件路径，第三个参数：每次加载一个参数执行的函数
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    })

    // 判断 requireDirectory 加载的模块是否为路由
    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }

  static loadConfig(path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }

  static loadHttpException() {
    const errors = require('./http-exception')
    global.errs = errors
  }
}

module.exports = InitManager
