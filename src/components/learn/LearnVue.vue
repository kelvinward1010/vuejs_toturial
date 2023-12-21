<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import ChildCompVue from './ChildComp.vue';


//List
interface PropsTodoList {
  id: any
  text: string
  done: boolean
}

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

function addTodo() {
  const newItems = {
    id: id++,
    text: newTodo.value,
    done: false
  }
  todos.value.push(newItems)
}

function removeTodo(todo: PropsTodoList) {
  todos.value = todos.value.filter((todoitem) => todoitem.id != todo.id)
}

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})


//Lifecycle and Template Refs
const pElementRef = ref('')
onMounted(() => {
    pElementRef.value = "mounted"
})

//Watchers
const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()
watch(todoId, fetchData)

//Props
const greeting = ref('Hello from parent')

//Emits
const childMsg = ref('No child msg yet')

</script>

<template>
    <div class="learn">
        <div class="learn_item">
            <h3>List In VueJS 3</h3>
            <form @submit.prevent="addTodo">
                <input v-model="newTodo" />
                <button>Add Todo</button>
            </form>
            <ul>
                <li v-for="todo in filteredTodos" :key="todo.id">
                <input type="checkbox" v-model="todo.done" />
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
                <button @click="removeTodo(todo)">X</button>
                </li>
            </ul>
            <button @click="hideCompleted = !hideCompleted">
                {{ hideCompleted ? 'Show all' : 'Hide completed' }}
            </button>
        </div>

        <div class="learn_item">
            <h3>Lifecycle and Template Refs</h3>
            <p ref="pElementRef">hello</p>
        </div>

        <div class="learn_item">
            <h3>Watchers</h3>
            <p>Todo id: {{ todoId }}</p>
            <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
            <p v-if="!todoData">Loading...</p>
            <pre v-else>{{ todoData }}</pre>
        </div>

        <div class="learn_item">
            <h3>Props</h3>
            <ChildCompVue :msg="greeting"/>
        </div>
        <div class="learn_item">
            <h3>Emits</h3>
            <ChildCompVue @response="(msg) => childMsg = msg"/>
            <p>{{ childMsg }}</p>
        </div>
    </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
.learn_item{
    margin-top: 30px;
    border-top: 1px solid black;
    margin-bottom: 20px;
}
</style>
