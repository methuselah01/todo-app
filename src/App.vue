<template>
    <div id="app">
        <list v-bind:todos="todos"></list>
    </div>
</template>

<script>
import List from './components/List';

export default {
    name: 'App',
    components: {
        List
    },
    data() {
        return {
            todos: [
                {
                    title: 'Task 1',
                    description: 'Description 1',
                    deadline: '10-10-2020',
                    status: 1
                },
                {
                    title: 'Task 2',
                    description: 'Description 2',
                    deadline: '10-10-2020',
                    status: 2
                },
                {
                    title: 'Task 3',
                    description: 'Description 3',
                    deadline: '10-10-2020',
                    status: 3
                },
            ],
        }
    }
}
</script>

<style>
body {
    background: black;
    color: #fff;
}
</style>
