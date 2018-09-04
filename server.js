const express = require('express');
const app = express();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const notes = {};

function random() {
	return Math.floor(Math.random() * 10000);
}

class Note {
	constructor(title){
		this.title = title ? title : '';
		this.noteId =  '' + random() + '-' + random() + '-' + random() + '-' + random();
		this.taskList = [];
		notes[this.noteId] = this;
	}

	static delete(noteId){
		delete notes[noteId];
	}

	addTask(value){
		const newTask = new Task(value, this.noteId);
		this.taskList.push(newTask);
	}

}

class Task {
	constructor(value, noteId){
		this.value = value;
		this.done = false;
		this.noteId = noteId;
	}

	delete(){
		const taskIndex = notes[this.noteId].taskList.indexOf(this);
		notes[this.noteId].taskList.splice(taskIndex, 1);
	}

	updateTask(value, status){
		this.value = value;
		this.done = status;
	}
}

app.get('/addTask/:noteId', function(req, res) {
	const noteId = req.params.noteId;
	const text = '';
	const note = notes[req.params.noteId];
	note.addTask(text);
	res.json(note);
});

app.get('/updateNote/:noteId/:title', function(req, res) {
	const noteId = req.params.noteId;
	const title = req.params.title == 'null' ? req.params.title : '' ;
	const note = notes[noteId];
	note.title = title;
	res.json(notes);
});

app.get('/deleteNote/:noteId', function(req, res) {
	const noteId = req.params.noteId;
	Note.delete(noteId);
	res.json(notes);
});

app.get('/deleteTask/:taskIndex/:noteId', function(req, res) {
	const noteId = req.params.noteId;
	const taskIndex = req.params.taskIndex;
	const task = notes[noteId].taskList[parseInt(taskIndex)];
	task.delete();
	const note = notes[req.params.noteId];
	res.json(note);
});

app.get('/updateTask/:taskIndex/:noteId/:status/:text', function(req, res) {
	const noteId = req.params.noteId;
	const status = !!parseInt(req.params.status);
	const taskIndex = req.params.taskIndex;
	const text = req.params.text !== 'null' ? req.params.text : '' ;
	const task = notes[noteId].taskList[parseInt(taskIndex)];
	task.updateTask(text, status);
	const note = notes[req.params.noteId];
	res.json(note);
});

app.get('/addNote', function(req, res) {
	const note = new Note();
	res.json(notes);
});

app.get('/notes', function(req, res) {
	res.json(notes);
});


app.listen(8080, () => console.log('Example app listening on port 8080!'));
