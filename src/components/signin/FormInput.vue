<script setup lang="ts">
import { ref } from 'vue'
import { Button, Form, Input, FormItem, InputPassword, TypographyTitle } from 'ant-design-vue';

const username = ref('')
const password = ref('')


const wrapperCol = {
    offset: 10, 
    span: 14
}

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};

const onFinish = () => {
    const data = {
        username: username.value,
        password: password.value,
    }
    console.log(data)
}

</script>

<template>
    <div class="item_signup">
        <TypographyTitle class="title_signup" :level="2">Sign Up</TypographyTitle>
        <Form 
            :labelCol="layout.labelCol"
            :wrapperCol="layout.wrapperCol"
            name="formsignup" 
            @onFinish="onFinish"
        >
            <FormItem 
                label="Username" 
                name="username"
                
            >
                <Input v-model:value="username" />
            </FormItem>
            <FormItem 
                label="Password" 
                name="password"
            >
                <InputPassword v-model:value="password" />
            </FormItem>
            <FormItem :wrapperCol="wrapperCol">
                <Button type="primary" @click="onFinish" htmlType="submit">
                    Submit
                </Button>
            </FormItem>
        </Form>

        <div class="footer">
            <span>Don't have a account!</span>
            <RouterLink to="/signup">Sign Up</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.item_signup .title_signup{
    text-align: center;
    margin-bottom: 30px;
    color: teal;
}
.fetback{
    text-align: center;
    font-size: 10px;
    color: teal;
}

.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.footer a{
  width: fit-content;
  font-size: 12px;
  text-decoration:underline;
}

.footer span{
  width: fit-content;
  font-size: 12px;
}

</style>