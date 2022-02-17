<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Добавить нового сотрудника</v-card-title>
                    <v-divider></v-divider>
                    <v-form @submit.prevent="submitForm" enctype="multipart/form-data" class="pa-5" ref="form">
                        <v-text-field label="Департамент" v-model="post.title" prepend-icon="mdo-note" :rules="rules"></v-text-field>
                    
                        <v-text-field label="Имя" v-model="post.name" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Фамилия" v-model="post.thrName" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Отчество" v-model="post.frsName" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Дата рождение" v-model="post.yearBorn" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Место рождение" v-model="post.placeBorn" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Пол" v-model="post.sex" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Пасспорт номер" v-model="post.passportNumber" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Домашний адрес" v-model="post.placeLiving" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Образование" v-model="post.education" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Email" v-model="post.email" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Сотовый номер" v-model="post.phoneNumber" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Домашний гомер" v-model="post.homeNumber" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="ИНН" v-model="post.inn" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Воееный билет" v-model="post.armAccounting" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Принят на работу" v-model="post.startJob" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                        
                        <v-text-field label="Знание языка" v-model="post.lngKnow" prepend-icon="mdo-view-list" :rules="rules"></v-text-field>
                                            
                        <v-textarea label="Мотивационное писмо" v-model="post.mtvLetter" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        
                        <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Выберете фото"> </v-file-input>
                        
                        <v-btn class="mt-3" type="submit" color="primary"> Добавить</v-btn>
                    
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>



<script>
import api from "../api"

export default ({
   data(){
       return {
           rules:[(value)=>!!value||"This fields are require"],
           post:{
               title:"",
               name:"",
               thrName:"",
               frsName:"",
               yearBorn:"",
               placeBorn:"",
               sex:"",
               passportNumber:"",
               placeLiving:"",
               education:"",
               email:"",
               phoneNumber:"",
               homeNumber:"",
               inn:"",
               armAccounting:"",
               startJob:"",
               lngKnow:"",
               mtvLetter:"",
               image:""
           },
           image:"",
           
       }
   },
   
    methods:{
           selectFile(file){
               this.image=file[0]
           },
           
           async submitForm(){
               const formData=new FormData()
               
               formData.append('image', this.image)
               formData.append('name', this.post.name)
               formData.append('thrName', this.post.thrName)
               formData.append('frsName', this.post.frsName)
               formData.append('yearBorn', this.post.frsName)
               formData.append('placeBorn', this.post.frsName)
               formData.append('sex', this.post.sex)
               formData.append('passportNumber', this.post.passportNumber)
               formData.append('placeLiving', this.post.placeLiving)
               formData.append('education', this.post.education)
               formData.append('email', this.post.email)
               formData.append('phoneNumber', this.post.phoneNumber)
               formData.append('homeNumber', this.post.homeNumber)
               formData.append('inn', this.post.inn)
               formData.append('armAccounting', this.post.armAccounting)
               formData.append('startJob', this.post.startJob)
               formData.append('lngKnow', this.post.lngKnow)
               formData.append('mtvLetter', this.post.mtvLetter)
               
               
               
               if(this.$refs.form.validate()) {
                   const res = await api.createPost(formData)
                   this.$router.push({name:'home', params:{message:res.message}})
               }
           }
       }
})
</script>
