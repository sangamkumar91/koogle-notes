const express = require('express');
const app = express();

const notes ={
	"111-6290-1148-7975" : {
	    "title": "",
	    "noteId": "111-6290-1148-7975",
	    "taskList": [
	        {
	            "value": "dshjahb",
	            "done": false,
	            "noteId": "111-6290-1148-7975"
	        },
	        {
	            "value": "dsknanajn",
	            "done": false,
	            "noteId": "111-6290-1148-7975"
	        },
	        {
	            "value": "task3",
	            "done": false,
	            "noteId": "111-6290-1148-7975"
	        },
	        {
	            "value": "task4",
	            "done": false,
	            "noteId": "111-6290-1148-7975"
	        },
	        {
	            "value": "task5",
	            "done": false,
	            "noteId": "111-6290-1148-7975"
	        },
	        {
	            "value": "task6",
	            "done": false,
	            "noteId": "111-6290-1148-7975"
	        }
	    ]
	} ,
	"111-6290-1148-7976" : {
			"title": "",
			"noteId": "111-6290-1148-7976",
			"taskList": [
					{
							"value": "dshjahb",
							"done": false,
							"noteId": "111-6290-1148-7976"
					},
					{
							"value": "dsknanajn",
							"done": false,
							"noteId": "111-6290-1148-7976"
					},
					{
							"value": "task3",
							"done": false,
							"noteId": "111-6290-1148-7976"
					},
					{
							"value": "task4",
							"done": false,
							"noteId": "111-6290-1148-7976"
					},
					{
							"value": "task5",
							"done": false,
							"noteId": "111-6290-1148-7976"
					},
					{
							"value": "task6",
							"done": false,
							"noteId": "111-6290-1148-7976"
					}
			]
	}

};

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
		notes.remove(noteId);
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

app.get('/addTask/:text/:noteId', function(req, res) {
	const noteId = req.params.noteId;
	const text = req.params.text;
	const note = notes[req.params.noteId];
	note.addTask(text);
	res.json(notes);
});

app.get('/updateNote/:title/:noteId', function(req, res) {
	const noteId = req.params.noteId;
	const title = req.params.title;
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
	res.json(notes);
});

app.get('/updateTask/:text/:taskIndex/:noteId/:status', function(req, res) {
	const noteId = req.params.noteId;
	const status = !!parseInt(req.params.status);
	const taskIndex = req.params.taskIndex;
	const text = req.params.text;
	const task = notes[noteId].taskList[parseInt(taskIndex)];
	task.updateTask(text, status);
	res.json(notes);
});

app.get('/addNote', function(req, res) {
	const note = new Note();
	res.json(notes);
});

app.get('/notes', function(req, res) {
	res.json(notes);
});


app.listen(8080, () => console.log('Example app listening on port 8080!'));
