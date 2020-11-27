import  $ from 'jquery'
import css from './css/css1.css'
import less from './css/less1.less'
$(function (){
    $('.baidu').text('百度1')
})

import Vue from 'vue'
import Com from './components/com.vue'
new Vue({
    el: '#app',
    render:h => h(Com)
})