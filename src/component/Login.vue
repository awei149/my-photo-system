<template>
  <div class="body">
      <div class="form">
        <form class="zhuce" v-show="flag">
          <input type="text" placeholder="User Name"  ref="username"/>
          <input type="password" placeholder="Password" ref="password" />
          <!-- <input type="email" placeholder="User email" /> -->
          <button type="button" @click="insertInfo($event)">注册</button>
          <p class="message">确定登录？<a href="#" @click="islogin">前往登录</a></p>
        </form>
        <form class="login" v-show="!flag">
          <input type="text" placeholder="User Name" ref="loginuser" />
          <input type="password" placeholder="Password" ref="userpassword" />
          <button type="button" @click="login">登录</button>
          <p class="message">确定注册？<a href="#" @click="islogin">前往注册</a></p>
        </form>
      </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            flag:true,
            username:'',
            password:''
        }
    },
    methods: {
        insertInfo(e){
          var username = this.$refs.username.value;
          var passWord = this.$refs.password.value;
          console.log('name:'+username)
          console.log('passwoed:'+passWord)
          this.$http.post('/api/setUserInfo',{
            userName:username,
            password:passWord
          }).then((res)=>{
            console.log('res'+res)
          })
          e.target.innerText = '注册成功';
        },
        islogin(){
          this.flag = !this.flag;
        },
        login(){
          var that = this;
          var username = this.$refs.loginuser.value;
          var password = this.$refs.userpassword.value;
          this.$http.get('/api/getUserInfo',{
            params:{
              username:username,
              passWord:password
            }
          }).then((res)=>{
            var userName = res.data[0].userName;
            console.log('username:'+userName);
            var userpassword = res.data[0].password;
            console.log('password:'+userpassword);
            window.sessionStorage.setItem(userName,userpassword);
            console.log(sessionStorage);
            if(userName == username && password == userpassword){
              this.$router.push({path:'/home'})
            }else{
              alert('账号或密码错误');
            }
          })
        }
    },
    mounted() {
        // this._initSwiper();
    },
};
</script>
<style lang="scss" scope>
.body {
    position: relative;
  background: url("../photo/hh.jpg");
  height: 750px;
  width: 100%;

  background-size: cover;
  font-family: sans-serif;
  text-align: center;
}
* {
  margin: 0;
  padding: 0;
}
.zhuce {
  width: 360px;
  padding: 10% 0 0;
  margin: auto;
  // display: none;
  /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); */
}
.login{
  width: 360px;
  padding: 10% 0 0;
  margin: auto;
  // display: none;
}
.form {
  position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  z-index: 1;
  /* background: #000; */
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  overflow: hidden;
}
.form input {
  outline: none;
  background: #f2f2f2;
  width: 100%;
  margin: 0;
  border: 0;
  margin: 0 0 15px;
  /* padding: 15px; */
  height: 50px;
  text-indent: 2rem;
  box-shadow: border-box;
  font-size: 18px;
}
.form button {
  text-transform: uppercase;
  outline: 0;
  background: orange;
  width: 100%;
  border: none;
  padding: 15px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s;
}
.form button:hover,
.form button:active {
  background: green;
  border: none;
}
.form .message {
  margin: 15px 0 0;
  color: #fff;
  font-size: 12px;
}
.form .message a {
  color: orange;
  text-decoration: none;
}
</style>