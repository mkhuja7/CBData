<template>
    <v-container>
        <v-row no-gutters>
            <v-col class="pa-4 mx-auto" sm="10">
                <v-card class="pa-2">
                    <v-img :src="`/${post.image}`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color="red">{{post.position}}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn :to="{name:'edit-post', params:{id:post._id}}" color="success">Edit</v-btn>
                                <!-- <v-btn color="red">Delete</v-btn> -->
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3>{{post.title}}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>Департамент : {{post.position}}</p>
                        
                        <p>Имя : {{post.name}}</p>
                        <p>Фамилия : {{post.thrName}}</p>
                        <p>Отчество : {{post.frsName}}</p>
                        <p>Дата рождение : {{post.yearBorn}}</p>
                        <p>Место рождение : {{post.placeBorn}}</p>
                        <p>Пол : {{post.sex}}</p>
                        <p>Пасспорт номер : {{post.passportNumber}}</p>
                        <p>Место проживание : {{post.placeLiving}}</p>
                        <p>Образование : {{post.education}}</p>
                        <p>Email : {{post.email}}</p>
                        <p>Телефон номер : {{post.phoneNumber}}</p>
                        <p>Домашний : {{post.homeNumber}}</p>
                        <p>ИНН : {{post.inn}}</p>
                        <p>Воееный билет : {{post.armAccounting}}</p>
                        <p>Дата принятие : {{post.startJob}}</p>
                        <p>Языки : {{post.lngKnow}}</p>
                        <p>Мотивационное писмо : {{post.mtvLetter}}</p>
                        <p>Дата создание :{{post.createdAt}}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import api from '../api'

export default {
    
  data(){
      return {
        post: {},
      };
  },
  
  async created() {
      const { id } = this.$route.params;
      const res = await api.getPost(id);
      this.post = res.data.data;
    //   console.log('DAta from DB'+res);
      console.log(this.post);
  }
}
</script>
