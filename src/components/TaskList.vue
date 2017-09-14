
<template>
	<div id="tasklist">
		<h1> {{ name }} </h1>

		<h2>New Task</h2>
		<b-form
			@submit="onSubmit"
			inline
			:class="{'was-validated': !$v.form.$error }"
			>
			<b-form-group id='fGroup1'>
				<b-form-input
					id="taskDesc1"
					type="text"
					placeholder="description"
					v-model="form.taskDesc"
					@input="$v.form.taskDesc.$touch()"
					>
				</b-form-input>
				<b-button v-if="!$v.form.$error" type="submit" variant="primary">Submit</b-button>
			</b-form-group>
			<b-form-feedback></b-form-feedback>
		</b-form>

		<!-- Not Done Tasks-->
		<h2>On Going</h2>
		<b-list-group>
			<b-list-group-item v-for='(task, index) in tasks' v-if='task.dateDone == null'>
				<span id='taskDesc'> {{ task.desc }} </span>
				<span id='taskDateCreate'> {{ task.dateCreate }} </span>
				<b-button :variant="'danger'" @click='toggleDoneness(task)'>Done</b-button>
				<b-button :variant="'warning'" @click='deleteItem(index)'>Delete</b-button>
			</b-list-group-item>
		</b-list-group>

		<!-- Done Tasks-->
		<h2>Finished</h2>
		<b-list-group>
			<b-list-group-item class="done" v-for='(task, index) in tasks' v-if='task.dateDone != null'>
				<span id='taskDesc'> {{ task.desc }} </span>
				<span id='taskDateCreate'> {{ task.dateCreate }} </span>
				<b-button :variant="'success'" @click='toggleDoneness(task)'>Un-Done-me</b-button>
				<b-button :variant="'warning'" @click='deleteItem(index)'>Delete</b-button>
			</b-list-group-item>
		</b-list-group>

	</div>
</template>

<script>
	import { alphaNum, required, minLength, between } from 'vuelidate/lib/validators'
export default {
	name: 'hello',
	data: function () {
		return {
			form: {
				taskDesc: ""
			},
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
				}
			]
		}
	},
	mounted: function () {
		this.$v.form.$touch();
	},
	methods: {
		removeTasks: function () {
			this.tasks = null;
		},
		deleteItem: function (index) {
			this.tasks.splice(index,1);
		},
		toggleDoneness: function (task) {
			if(task.dateDone == null)
				task.dateDone = new Date();
			else
				task.dateDone = null;
		},
		onSubmit: function (evnt) {
			evnt.preventDefault();
			//process form submit
			this.tasks.push({
				desc: this.form.taskDesc,
				dateCreate: new Date(),
				dateDone: null
			});
		}
	},
	validations: {
		tasks: {
			required
		},
		form: {
			taskDesc: {
				required,
				minLength: minLength(1)
			}
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
