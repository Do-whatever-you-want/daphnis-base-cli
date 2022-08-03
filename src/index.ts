import { program } from 'commander'
import create from './order/create'

// help
// 先把 eslint 禁用, 不然会报错, 主要是看着别扭。
/* eslint-disable @typescript-eslint/no-var-requires */
program
  .version(`${require('../package.json').version}`, '-v --version') // 获取 cli 版本
  .usage('<command> [options]') // 设置帮助信息的首行提示

// 命令
program
  .command('create <app-name>') // 设置命令 <> 里的是必选参数
  .description('新建项目请执行: daphnis-base-cli create appName') // 命令解释文案
  .action(async (appName: string) => {
    // create 命令的主要逻辑, appName 就是 create <app-name> 里的 app-name
    await create(appName)
  })

// process.argv 终端输入的命令
program.parse(process.argv) // 解析 process.argv 的结果