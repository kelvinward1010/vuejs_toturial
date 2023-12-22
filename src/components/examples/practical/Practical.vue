<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import DemoGrid from './Grid.vue'
import Modal from './Modal.vue'

//ALL
const props = defineProps({
    isShow: Boolean
})


//Markdown Editor
const input = ref('# hello')
const output = computed(() => marked(input.value))

const update = debounce((e: any) => {
  input.value = e.target.value
}, 100)

//Fetching Data
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const branches = ['main', 'v2-compat']

const currentBranches = ref(branches[0])
const commits: any = ref(null)

watchEffect(async () =>{
    const url = `${API_URL}${currentBranches.value}`
    commits.value = await (await fetch(url)).json();
})
console.log(commits)

function truncate(v: any) {
  const newline = v.indexOf('\n')
  return newline > 0 ? v.slice(0, newline) : v
}

function formatDate(v: any) {
  return v.replace(/T|Z/g, ' ')
}

//Grid with Sort and Filter
const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]

//Tree View
// const treeData = ref({
//     name: 'My Tree',
//     children: [
//         { name: 'hello' },
//         { name: 'world' },
//         {
//         name: 'child folder',
//         children: [
//             {
//                 name: 'child folder',
//                 children: [{ name: 'hello' }, { name: 'world' }]
//             },
//             { name: 'hello' },
//             { name: 'world' },
//             {
//                 name: 'child folder',
//                 children: [{ name: 'hello' }, { name: 'world' }]
//             }
//         ]
//         }
//     ]
// })


//Modal
const showModal = ref(false)
    
</script>

<template>
    <div class="container" v-if="props.isShow">
        <div class="item_container">
            <h4>1. Markdown Editor</h4>
            <div class="content">
                <div class="editor">
                    <textarea class="input" :value="input" @input="update"></textarea>
                    <div class="output" v-html="output"></div>
                </div>
            </div>
        </div>

        <div class="item_container">
            <h4>2. Fetching Data</h4>
            <div class="content">
                <div v-for="branch in branches" class="cnt">
                    <input 
                        type="radio"
                        :id="branch"
                        :value="branch"
                        name="branch"
                        v-model="currentBranches"
                    >
                    <label :for="branch">{{ branch }}</label>
                </div>
                <p style="margin: 10px 0 0;">vuejs/vue@{{ currentBranches }}</p>
                <ul>
                    <li v-for="{ html_url, sha, author, commit } in commits">
                    <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
                    - <span class="message">{{ truncate(commit.message) }}</span><br>
                    by <span class="author">
                        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
                    </span>
                    at <span class="date">{{ formatDate(commit.author.date) }}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="item_container">
            <h4>3. Grid with Sort and Filter</h4>
            <div class="content">
                <form id="search">
                    Search <input name="query" v-model="searchQuery">
                </form>
                <DemoGrid
                    :data="gridData"
                    :columns="gridColumns"
                    :filter-key="searchQuery">
                </DemoGrid>
            </div>
        </div>

        <div class="item_container">
            <h4>4. Tree View</h4>
            <div class="content">
                <ul>
                    <!-- <TreeItem class="item" :model="treeData"></TreeItem> -->
                    Just working on Javascript
                </ul>
            </div>
        </div>

        <div class="item_container">
            <h4>5. Modal</h4>
            <div class="content">
                <button id="show-modal" @click="showModal = true">Show Modal</button>
                <Teleport to="body">
                    <Modal :show="showModal" @close="showModal = false">
                        <template #header>
                            <h3>Header In Modal</h3>
                        </template>
                        <template #body>
                            <h3>Body In Modal</h3>
                        </template>
                        <template #footer>
                            <h3>Body In Modal</h3>
                            <button
                                class="modal-default-button"
                                @click="showModal = false"
                            >OK</button>
                        </template>
                    </Modal>
                </Teleport>
            </div>
        </div>
    </div>
</template>

<style scoped>
.item_container{
    margin-top: 10px;
    border-top: 1px solid black;
}
.container .item_container .content{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
}
.container .item_container .content .cnt{
    display: flex;
    justify-content: start;
}

.content .cnt label{
    margin-right: 10px !important;
}

.editor{
    height: 250px;
    width: 100%;
    display: flex;
}
.editor .input,
.editor .output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.editor .input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

#search{
    margin-bottom: 10px;
}

.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}

</style>