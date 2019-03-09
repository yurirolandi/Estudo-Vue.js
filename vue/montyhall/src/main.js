import Vue from 'vue'
import App from './app'

new Vue({   
    render: h => h(App)
    // render(createElement) {
    //     return createElement(App)
    // }
}).$mount("#app")