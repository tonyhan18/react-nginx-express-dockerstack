const express = require('express');
const app = express();
const os = require('os');

app.get('/', (req,res)=>{
	res.send(`${os.hostname()}`);
})

app.use(express.json());

app.get('/api/list', (req, res) => {
    res.json([
        { id: 'test1', name: '테스트1' },
        { id: 'test2', name: '테스트2' },
        { id: 'test3', name: '테스트3' },
        { id: 'test4', name: '테스트4' },
    ]);
});

app.get('/api/item', (req, res) => {
    res.json({
        id: 'test1',
        name: '테스트1'
    });
});

const port = process.env.NODE_ENV || 5000;
app.listen(port, () => {
	console.log(`서버 시작${port}`);
})
