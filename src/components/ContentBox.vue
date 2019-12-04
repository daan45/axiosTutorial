<template>
    <h2>{{categories}}222</h2>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContentBox',
  data () {
    return {
      categories: ''
    }
  },
  created () {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      this.categories = res
    })
  }
}

</script>