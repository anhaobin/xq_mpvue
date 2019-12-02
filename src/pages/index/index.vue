<template>
  <div>
  <van-skeleton 
    title
    avatar
    row="1"
    avatar-size="80px"
    loading="loading"
    >
  </van-skeleton>
  <div class="index_nav">
      <ul>
        <li v-for="item in imgList" :key="item.id">

        </li>
      </ul>
  </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      loading:false,
      imgList:[
        {
          id:1,
          name:"安浩彬",
          img:"https://upload.jianshu.io/users/upload_avatars/14366934/9ad4ed97-4e9e-48ae-bc89-004e4cbd0bcb?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120",
          desc:"为奇偶覅文件佛IE王菲王菲王菲王菲王菲~~~~~~"
        },
        {
          id:2,
          name:"安浩彬",
          img:"https://upload.jianshu.io/users/upload_avatars/14366934/9ad4ed97-4e9e-48ae-bc89-004e4cbd0bcb?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120",
          desc:"为奇偶覅文件佛IE王菲王菲王菲王菲王菲~~~~~~"
        },
        {
          
          id:3,
          name:"安浩彬",
          img:"https://upload.jianshu.io/users/upload_avatars/14366934/9ad4ed97-4e9e-48ae-bc89-004e4cbd0bcb?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120",
          desc:"为奇偶覅文件佛IE王菲王菲王菲王菲王菲~~~~~~"
        },
        {
          id:4,
          name:"安浩彬",
          img:"https://upload.jianshu.io/users/upload_avatars/14366934/9ad4ed97-4e9e-48ae-bc89-004e4cbd0bcb?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120",
          desc:"为奇偶覅文件佛IE王菲王菲王菲王菲王菲~~~~~~"
        },
      ]
    }
  },
  components: {
    card
  },
  created () {
    let _this = this;
    // setTimeout(() => {
    //    _this.loading = false;
    // }, 1000);
  },
  methods: {

  },
}
</script>

<style scoped lang="less">
.index_nav{
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px;
}
</style>
