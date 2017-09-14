<template>
	<b-container id="foo">
		<b-row>
			<b-col cols="4"/>
			<b-col>
				<img src="./assets/logo.png">
			</b-col>
			<b-col cols="4"/>
		</b-row>
		<b-row>
			<b-col>
				<router-view></router-view>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	export default {
		name: 'foo'
	}
</script>

<style>
	#foo {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
