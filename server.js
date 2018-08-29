const express = require('express');
const app = express();

const notes = {};

class Note {
	constructor(date, title){
		this.date = date;
		this.title = value;
		this.noteId =  Math.random();
		this.taskList = [];
		notes[this.noteId] = this;
	},

	static delete(noteId){
		notes.remove(noteId);
	},

	addTask(value, noteId){
		const newTask = new Task(value, noteId);
		this.taskList.push(newTask);
	},

}

class Task {
	constructor(value, noteId){
		this.value = value;
		this.done = false;
		this.note = notes[noteId];
	},

	delete(){
		const taskIndex = this.note.taskList.indexOf(this);
		this.note.taskList.splice(taskIndex, 1);
	},

	updateText(text){
		this.value = value;
	}

	markDone() {
		this.done = true;
	},

	unmarkDone() {
		this.done = false;
	}
}

app.post('/addTask', function(req, res) {
	res.json();
});

app.post('/updateNote', function(req, res) {
	res.json();
});

app.post('/updateTask', function(req, res) {
	res.json();
});

app.post('/addNote', function(req, res) {
	res.json();
});

app.post('/addNote', function(req, res) {
	res.json();
});


app.get('/note/:id', function(req, res) {
	res.json(notes[req.params.id]);
});


app.get('/notes', function(req, res) {
	res.json(notes);
});


app.listen(8080, () => console.log('Example app listening on port 8080!'));
