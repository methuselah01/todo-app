<template>
    <div class="container">
        <div class="form-group">
            <label class="col-form-label font-weight-bold" for="title">Title</label>
            <input type="text" v-model="txtTitle" class="form-control" id="title">
        </div>

        <div class="form-group">
            <label class="col-form-label font-weight-bold" for="description">Description</label>
            <input type="text" v-model="txtDescription" class="form-control" id="description">
        </div>

        <div class="form-group">
            <label class="col-form-label font-weight-bold" for="deadline">Deadline</label>
            <input type="date" v-model="txtDeadline" class="form-control" id="deadline">
        </div>

        <div class="form-group text-center mb-5">
            <button type="button" class="btn btn-default w-25 mr-3">
                <i class="fa fa-undo"></i> Cancel
            </button>
            <button type="button" class="btn btn-default w-25" @click="addTodo()">
                <i class="fa fa-save"></i> Save
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                txtTitle: '',
                txtDescription: '',
                txtDeadline: '',
            };
        },
        methods: {
            addTodo() {
                if (this.txtTitle.length > 0 && this.txtDescription.length > 0) {
                    const title = this.txtTitle;
                    const description = this.txtDescription;
                    const deadline = this.txtDeadline;
                    this.$emit('create', {
                        title,
                        description,
                        deadline,
                        status: false,
                    });

                    this.txtTitle = '';
                    this.txtDescription = '';
                    this.txtDeadline = '';
                } else {
                    alert('Title, description and deadline are required !');
                }
            },
        },
    };
</script>