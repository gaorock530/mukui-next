module.exports = {
  apps : [{
    name: "mukui",
    script: "./server.js",
    exec_mode: "cluster", // 设置执行模式，值为：fork|cluster

    exec_interpreter: "node",
    // 定时重启,仅在 cluster 模式有效, [minute] [hour] [day] [month] [day of week]

    instances: 1, // 负数代表服务器 cup 核心数

    autorestart: true, // 进程失败后启用或禁用自重启

    watch: false, // 文件有改变则重启,用于调试

    max_memory_restart: "300M", // 如果超出内存量，重新启动应用
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}

// module.exports = {
//   apps : [{
//       name: "API",
//       script: "server.js",
//       exec_mode: "cluster", // 设置执行模式，值为：fork|cluster

//       exec_interpreter: "node",
//       // 定时重启,仅在 cluster 模式有效, [minute] [hour] [day] [month] [day of week]
//       cron_restart: "*/1 * * * *", // 每分钟重启(测试)

//       instances: 1, // 负数代表服务器 cup 核心数

//       autorestart: true, // 进程失败后启用或禁用自重启

//       watch: false, // 文件有改变则重启,用于调试

//       max_memory_restart: "500M", // 如果超出内存量，重新启动应用

//       log_date_format: "YYYY-MM-DD HH:mm Z",
//       log_file: "logs/api.log",
//       error_file: "logs/api-err.log",
//       out_file: "logs/api-out.log",

//       env: { // 默认环境
//           "INTERVAL": 6000,
//           "NODE_ENV": "production",
//           "DEBUG": "express"
//       }
//   }]
// };