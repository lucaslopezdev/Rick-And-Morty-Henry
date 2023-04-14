const http = require('http');
const { getCharDetail } = require('./controllers/getCharDetail')
const { getCharById } = require('./controllers/getCharById');
const PORT = 3001;

http.createServer((req, res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  
    const id = req.url.split('/').at(-1)

    if(req.url.includes('onsearch')) {
      getCharById(res,id)
    }
    if(req.url.includes('detail')){
      getCharDetail(res, id)
    }
    
  }).listen(PORT, 'localhost');





    //let characterFilter = characters.find(char => char.id === Number(id))
    /* res.writeHead(200, {'Content-Type':'application/json'});
    return res.end(JSON.stringify(characterFilter)) */
    
    
