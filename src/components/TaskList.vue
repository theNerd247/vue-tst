<template>
	<div id="tasklist">
		<h1> {{ name }} </h1>

		<!-- Not Done Tasks-->
		<h2>On Going</h2>
		<b-list-group>
			<b-list-group-item v-for='(task, index) in tasks' v-if='task.dateDone == null'>
				<span id='taskDesc'> {{ task.desc }} </span>
				<span id='taskDateCreate'> {{ task.dateCreate }} </span>
				<b-button :variant="'danger'" @click='toggleDoneness(task)'>Done</b-button>
			</b-list-group-item>
		</b-list-group>

		<!-- Done Tasks-->
		<h2>Finished</h2>
		<b-list-group>
			<b-list-group-item class="done" v-for='(task, index) in tasks' v-if='task.dateDone != null'>
				<span id='taskDesc'> {{ task.desc }} </span>
				<span id='taskDateCreate'> {{ task.dateCreate }} </span>
				<b-button :variant="'success'" @click='toggleDoneness(task)'>Un-Done-me</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data: function () {
			return {
				name: "TaskList",
				tasks: [
					{ desc: "This is a task",
						dateCreate: new Date('2017-08-01'),
						dateDone: null
					},
					{ desc: "This is a task 2",
						dateCreate: new Date('2017-08-02'),
						dateDone: null
					},
					{ desc: "This is a task",
						dateCreate: new Date('2017-08-01'),
						dateDone: new Date('2017-09-15')
					},
					{ desc: "This is a task 2",
						dateCreate: new Date('2017-08-02'),
						dateDone: new Date('2017-09-15')
					},
					{ desc: "This is a task",
						dateCreate: new Date('2017-08-01'),
						dateDone: new Date('2017-09-15')
					},
					{ desc: "This is a task 2",
						dateCreate: new Date('2017-08-02'),
						dateDone: new Date('2017-09-15')
					}				]
			}
		},
		methods: {
			toggleDoneness: function (task) {
				if(task.dateDone == null)
					task.dateDone = new Date();
				else
					task.dateDone = null;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2 {
		font-weight: normal;
	}

	a {
		color: #42b983;
	}

	.done {
		text-decoration: line-through;
	}
</style>
