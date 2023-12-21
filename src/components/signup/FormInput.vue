<script setup lang="ts">
import { ref } from 'vue'
import { Button, Form, Input, FormItem, InputPassword, TypographyTitle } from 'ant-design-vue';

const username = ref('')
const password = ref('')
const confirmpassword = ref('')

let messageFetBack = ''

const wrapperCol = {
    offset: 10, 
    span: 14
}

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};

const checkpassword = () => {
    const data = {
        username: username.value,
        password: password.value,
        confirmpassword: confirmpassword.value
    }
    if(data.password != data.confirmpassword && data.confirmpassword != ''){
        return messageFetBack = "Confirm password wrong! Please try again!"
    }else if(data.confirmpassword === '' && data.password != ''){
        return messageFetBack = "Please confirm your password!"
    }else if(data.password === data.confirmpassword && data.confirmpassword != ''){
        return messageFetBack = 'Password is correct!'
    }else{
        return messageFetBack = ''
    }
}

const onFinish = () => {
    const data = {
        username: username.value,
        password: password.value,
        confirmpassword: confirmpassword.value
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
            <FormItem 
                label="Confirm Password" 
                name="confirmpassword" 
            >
                <InputPassword v-model:value="confirmpassword"/>
            </FormItem>
            <p class="fetback">{{ checkpassword() }}</p>
            <FormItem :wrapperCol="wrapperCol">
                <Button type="primary" @click="onFinish" htmlType="submit">
                    Submit
                </Button>
            </FormItem>
        </Form>
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
</style>