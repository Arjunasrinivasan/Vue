const app = Vue.createApp({
  data() {
    return { goals: [],
    newGoal:'' };
  },
  methods:{
    addGoals(){
      this.goals.push(this.newGoal)
      this.newGoal=''
    },
    removeToDo(idx){
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#user-goals');
