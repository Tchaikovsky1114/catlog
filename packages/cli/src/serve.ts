import path from 'path'
import { Command } from "commander";
import {serve} from '@cat-editor/local-api'

const isProduction = process.env.NODE_ENV === 'production'

export const serveCommend = new Command().command('serve [filename]').description('Open a file for editing').option('-p, --port <number>', 'port to run server on','4005')
.action(async (filename = 'notebook.js', options: {port: string}) => {
  
  try{
    const dir = path.join(process.cwd(), path.dirname(filename))
    await serve(parseInt(options.port),path.basename(filename), dir, !isProduction);
    console.log(`
    ${filename}를 실행합니다. http://localhost:${options.port}로 이동하셔서 파일을 작성하세요.
    `)
  }catch(err){
    if(err instanceof Error){
      console.log('문제가 발생했습니다. 메세지를 확인해주세요. =>', err.message)
      
    }else {
      
    }

    process.exit(1)
  }
  
})


