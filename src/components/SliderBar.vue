<template>
  <div class="header-slidbar" >
    <div class="slidbar-item" v-show="$route.path !== '/pc'" @click="$router.push('/pc')">
      <touch-ripple :speed="1" :opacity="0.3" color="#fff" transition="ease" class="item" >
        <img src="../svg/zhuye.svg" />
      </touch-ripple>
    </div>
    <div @click="goGithub" class="slidbar-item">
      <img src="../svg/github.svg" />
    </div>
  </div>
</template>

<script>
import Config from '../../blog.config'
export default {
  data: () => ({
    Config: Config
  }),
  methods: {
    goGithub () {
      window.open(Config.github)
    }
  }
}
</script>

<style scope>
.header-slidbar {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: 30%;
  width: 50px;
  box-sizing: border-box;
  padding: 50px 0;
  background: rgba(255, 255, 255, .2);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
}
.slidbar-item {
  flex: 1;
  cursor: pointer;
  text-align: center;
  line-height: 80px;
}
.item {
  height: 100%;
  width: 100%;
  display: flex!important;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
}
.item-info {
  display: none;
}
.slidbar-show:hover {
  width: 200%;
  display: flex!important;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 10px;
  align-items: center;
}
.item:hover .item-info{
  flex: 1;
  display: flex;
  justify-content: center!important;
  color: white;
  font-size: 16px;
  margin-left: 240px;
}
</style>
