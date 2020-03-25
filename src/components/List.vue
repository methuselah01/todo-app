<template>
    <div class="container">
        <button @click="addTodo()" class="btn btn-success mb-3">
            Create <i class="fa fa-plus"></i>
        </button>

        <router-link to='/create'>Create</router-link>
        <router-view></router-view>

        <div class="table-responsive">
            <table class="table table-bordered table-striped" cellpadding="10">
                <thead>
                    <tr class="text-center">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(todo,index) in todoList" :key="index">
                        <td class="text-center">{{ index }}</td>
                        <td>{{ todo.title }}</td>
                        <td>{{ todo.description }}</td>
                        <td>{{ todo.deadline }}</td>

                        <td v-if="todo.status == 1">
                            Open
                        </td>
                        <td v-else-if="todo.status == 2">
                            In progress
                        </td>
                        <td v-else>
                            Closed
                        </td>

                        <td class="text-center"><button class="btn btn-primary"><i class="fa fa-edit"></i></button></td>
                        <td class="text-center"><button @click="deleteTodo(index)" class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['todos'],
    data () {
        return {
            todoList: this.todos
        }
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
}
</script>

<style>
</style>
