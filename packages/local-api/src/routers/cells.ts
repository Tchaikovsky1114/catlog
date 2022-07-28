import express from 'express'
import fs from 'fs/promises'
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code'
}

interface ErrorMessage extends Error{
  code: string
}

export const createCellsRouter = (filename:string, dir:string) => {
const router = express.Router();
router.use(express.json())
const fullpath = path.join(dir, filename);

router.get('/cells', async (req,res) => {

  try{
    const result = await fs.readFile(fullpath, {encoding: 'utf-8'});
    res.status(200).send(JSON.parse(result));
  }catch(err){
    const typedError = err as ErrorMessage
    if(typedError.code === 'ENOENT'){
      await fs.writeFile(fullpath,'[]','utf-8')
      res.send([]);
    }else{
      throw Error('알 수 없는 에러가 발생했습니다.')
    }
  }


  // 스토리지에 파일이 존재하는지 확인.
  // 없으면 생성

  // 있으면 파일 읽고 , cell parsing

  
  // browser로 전송
})

router.post('/cells', async(req,res) => {
  const {cells}:{cells:Cell[]} = req.body;

    // req obj에서 body 가져와서 
  // file 작성
  await fs.writeFile(fullpath, JSON.stringify(cells), 'utf-8');

  res.status(200).send('OK');


})

return router;
}