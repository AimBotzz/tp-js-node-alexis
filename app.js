const express=require('express'); 
const app = express(); 
const port = 4567; 
const cors = require('cors');
const friends = [
{name: 'steve'},
{name: 'patrick'},
{name: 'bob'}
];
app.use(cors());
app.listen(port, () => {
console.log('hello from express %d',port);

app.get('/api/friends',(req,res)=>{
res.send({friends}); 
});
app.post('/api/friend',(req,res)=>{
	let name=req.query.name;
	console.log(req.query.name);
friends.push({name});
res.sendStatus(201);
});
app.delete('/api/friend',(req,res)=>{
	const hasSameName = (friend) => friend.name === req.query.name;
	let idxFriend = friends.findIndex(hasSameName); 
	friends.splice(idxFriend, 1);
res.sendStatus(202);
});
}); 
module.exports = app;