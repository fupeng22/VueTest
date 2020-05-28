<template>
  <div id="app" :style="{ fontSize: postFontSize + 'em' }">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
        <!--组件：my-list，data-list是在MyList组件里面定义的props，数据从父组件传入-->
        <my-list v-for="item in items" :key="item.id" :data-list="item"></my-list>
    </ul>

    <p v-text="msg1"></p>
    <!--和下面效果一样-->
    <p>{{msg1}}</p>

    <!--v-html 内容不会被处理-->
    <p v-html="msg2"></p>
    <!--v-text 内容会被作为vue模板编译-->
    <p v-text="msg2"></p>

    <p v-show="flag" v-text="msg3"></p>

    <p v-if="flag1" v-text="msg4"></p>

    <p v-if="flag2" v-text="msg5"></p>
    <p v-else>我是穷逼</p>

    <p v-if="flag3 == 1">{{msg6}}</p>
    <p v-else-if="flag3 == 2">我假装我很有钱</p>
    <p v-else>我是穷逼</p>

    <!---->
    <div v-for="(item_,index_) in items2"  :key="index_">
        {{index_}} -- {{item_}}
    </div>
    


    <button @click="aClick">普通点击事件</button>
    <br><br>
    <button @click.stop="bClick">阻止冒泡事件</button>
    <br><br>
    <a href="https://www.qq.com/" @click.stop.prevent="cClick">阻止默认事件</a>
    <br><br>
    <button @click.once="dClick">执行一次事件</button>
    <br><br>
    <input @keyup.enter="eClick" placeholder="有本事按Enter"/>
    <br><br>
    <input @click.stop.ctrl="fClick" placeholder="有本事按Ctrl+Click"/>
    <br><br>
    <input @keydown.ctrl.alt="gClick" placeholder="有本事按Ctrl+Alt"/>
    <br><br>
    <button @click.stop.left="hClick">鼠标左键事件</button>


    <!--绑定src属性-->
    <img :src="imgSrc"/>
    <!--绑定class：数组方式-->
    <div :class="[myClass]"></div>
    <!--绑定class：class 存在与否将取决于数据属性 active-->
    <div :class="[myClass,{'area-active': active}]"></div>
    <div style="text-align: center">
        <!--:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名-->
        <span :style="{display: 'inline-block',width: width1 + 'px',height: width1 + 'px',backgroundColor: color1}"></span>
        <span :style="{display: 'inline-block',width: width2 + 'px',height: width2 + 'px',backgroundColor: color2}"></span>
        <!--:style 的数组语法-->
        <span :style="[styleObject]"></span>
    </div>


    <div>Message is: {{msg7}}</div>
    <br/>
    <input v-model="msg7"/>
    <br/><br/>
    <!--textarea绑定-->
    <textarea v-model="msg7" cols="80" rows="5"></textarea>
    <br/><br/>
    <!--复选-->
    <input type="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <br/><br/>
    <!--复选数组-->
    <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
    </div>
    <br/><br/>
    <!--单选数组-->
    <div>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
    </div>
    <br/><br/>
    <!--select的绑定-->
    <div>
        <select v-model="selected">
            <option v-for="option in options" v-bind:value="option.value"  :key="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>
    </div>
    
    <br/><br/>
    <!--自动将用户的输入值转为数值类型-->
    <input type="number" v-model.number="age"/>
    <span>{{typeof age}}</span>
    <br/><br/>
    <!--自动过滤用户输入的首尾空白字符-->
    <input v-model.trim="msgs">
    <p>{{msgs}}</p>

    <!--取消实时同步-->
    <input v-model.lazy="lmsgs">
    <p>{{lmsgs}}</p>
    <br/><br/>

    <div v-pre>{{这里面的内容不会被编译}}</div>

    <div v-once>{{msg8}}</div>
    <input v-model="msg8"/>
    <br/><br/>

    <my-button></my-button>
    <my-button></my-button>
    <my-button></my-button>


    <my-title v-for="t in items4" :blog="t"  :key="t.title" @enlarge-text="postFontSize += $event" @shrink-text="postFontSize -= $event"></my-title>

    <no-name-slot v-for="i in items5" :key="i.title">
        {{i.content}}
    </no-name-slot>


    <my-layout>
        <template slot="header">
            <h1>这里是标题啊！</h1>
        </template>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
        
        <template slot="footer">
            <h2>这里是脚丫子</h2>
        </template>
    </my-layout>


    <h3>按套路输出数据</h3>
    <my-scope-slot>
        <template slot-scope="childData">
            <ul>
                <li v-for="item in childData.items_" :key="item">{{item}}</li>
            </ul>
        </template>
    </my-scope-slot>
    <h3>一锅端</h3>
    <my-scope-slot>
        <template slot-scope="childData">
            {{childData.items_}}
        </template>
    </my-scope-slot>
    <h3>不使用子组件提供的数据</h3>
    <my-scope-slot>
        作用域插槽退化为匿名插槽
    </my-scope-slot>


    <button @click="next">下一个</button>
    <!--切换的关键，参数是组件的名字-->
    <component :is="view"></component>
    <!-- 失活的组件将会被缓存！
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
    -->

      
     <base-layout>
        <template v-slot:header>
            <h1>Header</h1>
        </template>

        <template v-slot:default>
            <p>Main</p>
        </template>

        <template v-slot:footer>
            <p>Footer</p>
        </template>
    </base-layout>
    

    <base-layout>
        <template #header>
            <h1>Header</h1>
        </template>

        <template #default>
            <p>Main</p>
        </template>

        <template #footer>
            <p>Footer</p>
        </template>
    </base-layout>

<base-layout>
        <template #header>
            <h1>Header</h1>
        </template>
        <!--slotProps可以使任意名字-->
        <template #default="slotProps">
        <strong style="color: crimson">{{slotProps.user.firstName}}</strong>
        </template>

        <template #footer>
            <p>Footer</p>
        </template>
    </base-layout>



    <!-- ********************作用域插槽的应用******************** -->
    <!--直接使用-->
    <my-table :headers="headersData" :items="itemsData" item-key="id"></my-table>
    <!--父组件利用插槽自定义-->
    <my-table :headers="headersData" :items="itemsData" item-key="id">
        <!--有了作用域插槽，可以由父组件来改变子组件的展示效果-->
        <!--在父级作用域中，我们可以给 v-slot 带一个【值】来定义我们提供的插槽 prop 的名字-->
        <!--【值】也就是那个 props，可以为任意名字-->
        <template v-slot:items="props">
            <tr>
                <td style="color: darkcyan">{{props.items.id}}</td>
                <td style="color: darkcyan">{{props.items.name}}</td>
                <td style="color: darkcyan">{{props.items.age}}</td>
            </tr>
        </template>
    </my-table>
    <!-- ********************作用域插槽的应用******************** -->



  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 引入组件
import MyList from './components/MyList.vue'
// 引入组件
import MyButton from './components/MyButton.vue'

import MyTitle from './components/MyTitle.vue'

import NoNameSlot from './components/NoNameSlot.vue'

import MyLayout from './components/MyLayout.vue'

import MyScopeSlot from './components/MyScopeSlot.vue'

import ComponentA from './components/ComponentA.vue'

import ComponentB from './components/ComponentB.vue'

import ComponentC from './components/ComponentC.vue'

import BaseLayout from './components/BaseLayout.vue'

import MyTable from './components/MyTable.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,MyList,MyButton,MyTitle,NoNameSlot,MyLayout,MyScopeSlot,ComponentA,ComponentB,ComponentC,BaseLayout,MyTable
  },
  computed:{
      // 这是一个计算属性，返回当前index对应的组件名字
      view: function () {
          return this.componentName[this.index];
      }
  },
  methods: {
      // 循环index
      next: function () {
          this.index = ++this.index % 3;
      },
      parentClick: function () {
          alert('父元素点击事件')
      },
      aClick: function () {
          alert('普通点击事件')
      },
      bClick: function () {
          alert('点击之后，不再继续冒泡到父元素')
      },
      cClick: function () {
          alert('点击之后，不再触发默认跳转事件')
      },
      dClick: function () {
          alert('只能点击一次，你再也不能看见我')
      },
      eClick: function () {
          alert('监听回车事件')
      },
      fClick: function () {
          alert('监听Ctrl+Click事件')
      },
      gClick: function () {
          alert('监听Ctrl+Alt事件')
      },
      hClick: function () {
          alert('监听鼠标左键事件')
      }
  },
  data: ()=> ({
    items: [
        {id:1,text:'Apple 苹果'},
        {id:2,text:'Banana香蕉'},
        {id:3,text:'Orange橘子'},
    ],
    msg1: '更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值。',
    msg2: '<h1>在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。</h1>' +'<h1>只在可信内容上使用 v-html，永不用在用户提交的内容上。</h1>',
    flag: true,
    msg3: '根据表达式之真假值，切换元素的 display CSS 属性',
    flag1: true,
    msg4: '根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。',
    flag2: false,
    msg5: '我很有钱',
    flag3: 2,
    msg6: '我很有钱',
    items2: ['鱼香肉丝','宫保鸡丁','炖排骨'],
    styleObject: {
        display: 'inline-block',
        width: '150px',
        height: '150px',
        'background-color': '#2990c4'
    },
    width1: 50,
    color1: '#12BC99',
    width2: 100,
    color2: '#9455bc',
    active: true,
    myClass: 'area',
    imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=935292084,2640874667&fm=27&gp=0.jpg',
    age: 10,
    selected: '',
    options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
    ],
    picked: [],
    checkedNames: [],
    checked: false,
    msg7: '你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。',
    msgs: '',
    lmsgs: '',
    msg8: '这里只编译一次',
    postFontSize: 1,
    items4:  [
                {title:'My journey with Vue',content:'every component must have a single root element (每个组件必须只有一个根元素)'},
                {title:'Blogging with Vue',content:'你可以将模板的内容包裹在一个父元素内，来修复这个问题'},
                {title:'Why Vue is so fun',content:'看起来当组件变得越来越复杂的时候，我们的博文不只需要标题和内容，还需要发布日期、评论等等。为每个相关的信息定义一个 prop 会变得很麻烦'}
            ],
    items5: [
                {title:'My journey with Vue',content:'当组件渲染的时候，这个 <slot></slot> 元素将会被替换为父组件传入的当前内容。'},
                {title:'Blogging with Vue',content:'插槽内可以包含任何模板代码，包括 HTML'},
                {title:'Why Vue is so fun',content:'嗯嗯嗯'},
            ],
    index:0,
    componentName:['ComponentA','ComponentB','ComponentC'],
    headersData: ["ID", "Name", "Age"],
            itemsData: [
                {id: 1, name: 'A', age: 10},
                {id: 2, name: 'B', age: 20},
                {id: 3, name: 'C', age: 12},
                {id: 4, name: 'D', age: 15}
            ]
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.area{
    margin: 8px auto;
    width: 50px;
    height: 50px;
    background-color: darkcyan;
}
.area-active{
    background-color: crimson;
}
</style>
