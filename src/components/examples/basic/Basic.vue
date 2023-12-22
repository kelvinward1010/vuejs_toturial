<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue';


//Hello world
const message = ref("Hello world")

//Handling User Input
const message1 = ref("Hello world")
function reverseMessage(){
    message1.value = message1.value.split('').reverse().join('')
}

//Attribute Bindings
const message2 = ref("Hello world")
const isRed = ref(true)
const color = ref("green")

function toggleRed() {
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}

//Conditionals and Loops
const show = ref(true)
const list = ref([1, 2, 3])


//Form Bindings
const text = ref('Edit me')
const checked = ref(true)
const checkedNames = ref(['Jack'])
const picked = ref('One')
const selected = ref('A')
const multiSelected = ref(['A'])

//Simple Component
const groceryList = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' }
])


//ALL
const props = defineProps({
    isShow: Boolean
})

</script>

<template>
    <div class="container" v-if="props.isShow">
        <div class="item_container">
            <h4>1. Hello World</h4>
            <div class="content">
                <p>{{ message }}</p>
            </div>
        </div>
        <div class="item_container">
            <h4>2. Handling User Input</h4>
            <div class="content">
                <p>{{ message1 }}</p>
                <button v-on:click="reverseMessage()">Reverse Message</button>
                <button @click="message1 += '!'">Append "!"</button>
            </div>
        </div>
        <div class="item_container">
            <h4>3. Attribute Bindings</h4>
            <div class="content">
                <p v-bind:title="message2">Hover your mouse over me for a few seconds to see my dynamically bound title!</p>
                <p :class="{red : isRed}" @click="toggleRed">
                    This should be red... but click me to toggle it.
                </p>
                <p :style="{color}" @click="toggleColor">
                    This should be green, and should toggle between green and blue on click.
                </p>
            </div>
        </div>
        <div class="item_container">
            <h4>4. Conditionals and Loops</h4>
            <div class="content">
                <button @click="show = !show">Toggle List</button>
                <button @click="list.push(list.length + 1)">Push Number</button>
                <button @click="list.pop()">Pop Number</button>
                <button @click="list.reverse()">Reverse List</button>

                <ul v-if="show && list.length">
                    <li v-for="item in list" :key="item">{{ item }}</li>
                </ul>
                <p v-else-if="list.length">List is not empty. But it hidden</p>
                <p v-else>List is emplty</p>
            </div>
        </div>
        <div class="item_container">
            <h4>5. Form Bindings</h4>
            <div class="content">
                <div class="content_item">
                    <h5>Text Input</h5>
                    <div class="cnt">
                        <input v-model="text"> {{ text }}
                    </div>
                </div>
                
                <div class="content_item">
                    <h5>Checkbox</h5>
                    <div class="cnt">
                        <input type="checkbox" id="checkbox" v-model="checked">
                        <label for="checkbox">Checked: {{ checked }}</label>
                    </div>
                </div>

                <div class="content_item">
                    <h5>Multi Checkbox</h5>
                    <div class="cnt">
                        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                        <label for="jack">Jack</label>
                        <input type="checkbox" id="john" value="John" v-model="checkedNames">
                        <label for="john">John</label>
                        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                        <label for="mike">Mike</label>
                    </div>
                    <p>Checked names: <pre>{{ checkedNames }}</pre></p>
                </div>

                <div class="content_item">
                    <h5>Radio</h5>
                    <div class="cnt">
                        <input type="radio" id="one" value="One" v-model="picked">
                        <label for="one">One</label>
                        <input type="radio" id="two" value="Two" v-model="picked">
                        <label for="two">Two</label>
                    </div>
                    <p>Picked: <pre>{{ picked }}</pre></p>
                </div>

                <div class="content_item">
                    <h5>Select</h5>
                    <select v-model="selected">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                    <span>Selected: {{ selected }}</span>
                </div>

                <div class="content_item">
                    <h5>Multi Select</h5>
                    <select v-model="multiSelected" multiple style="width: 150px;">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                    <span>Selected: {{ multiSelected }}</span>
                </div>

                <div class="content_item">
                    <h5>Simple Component</h5>
                    <ol>
                        <TodoItem
                            v-for="item in groceryList"
                            :todo="item"
                            :key="item.id"
                        ></TodoItem>
                    </ol>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.item_container{
    margin-top: 10px;
    border-top: 1px solid black;
}
.container .content{
    margin: 0 15px;
    display: flex;
    flex-direction: column;
}
.container .item_container .content .content_item{
    margin-top: 20px;
}
.container .item_container .content .content_item h5{
    font-weight: 600;
}
.container .item_container .content .content_item .cnt{
    display: flex;
    justify-content: start;
}

.cnt label{
    margin-right: 10px;
}

.red{
    color: red;
}
</style>