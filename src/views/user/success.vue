<template>
  <div>成功跳转页面
    {{ruleForm.nick}}


  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        ruleForm: {
          pass: '',
          checkPass: '',
          username: '',
          nick: '',
          check: '',
          email: ''
        },
      };
    },
    mounted(){
      this.axios.get('#/a.json').then(res /* => this.ruleForm.nick=res.data.nick */)

    }
    ,
    methods: {

      postData: function() {
        this.axios({
          method: 'post',
          url: this.baseURL + '/user/register',
        }).then(function(repos) {
          console.log(repos);
        }).catch(function(err) {
          console.log(err);
        });
      }

    }
  }
</script>

<style>
</style>
