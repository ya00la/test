<template>
  <div class="page-view content ng-scope" ui-view="">
    <div class="wrap1 ng-scope" ng-controller="listController">
      <div class="buttons-tab" ng-init="curMarket='BTC'">
        <!-- ngRepeat: m in markets -->
        <span v-for="m in tabList" :class="['button ng-binding ng-scope', {'active':curMarket==m}]" @click="setCurMarket(m)">{{m}} Markets</span>
      </div>

      <div class="content">
        <div class="container">
          <ul class="markets">
            <!-- ngRepeat: product in products | filter:{'quoteAsset':curMarket} -->
            <li v-for="product in filterProductsList" class="ng-scope">
             <index-item :product="product" :cur-market="curMarket"></index-item>
            </li>
          </ul>
        </div>
       </div> 
    </div>
  </div>
</template>

<script>
import {IndexData} from '../libs/DataSource.js'
import IndexItem from '../components/IndexItem'

export default {
  name: 'Index',
  data () {
    return {
      products: IndexData.data,
      tabList: ['BTC', 'ETH', 'USDT'],
      curMarket: 'BTC'
    }
  },
  components: {
    IndexItem
  },
  created () {
    console.log(IndexData)
  },
  computed: {
    filterProductsList: function () {
      var key = this.curMarket
      var products = this.products
      return products.filter(function (item) {
        return item.quoteAsset === key
      })
    }
  },
  methods: {
    setCurMarket (val) {
      this.curMarket = val
    }
  }
}
</script>
<style >

body, .page, .page-group,.page-view {
    background: #14171a;
    color: #f3f3f3;
}
.wrap1{font-size: 0.65rem;}
.wrap1 .button{color:#777777;}
.wrap1 .content{top: 2rem;}
.wrap1 .content>div{padding-bottom: 2.1rem;min-height:100%;}
.wrap1 .content .f-footer{height:2.1rem;line-height:2.1rem;text-align:center;border-top: 1px solid rgba(102,102,102,0.2);font-size: 0.65rem;position: absolute;bottom: 0;left: 0;width: 100%;}
.wrap1 .content .container{min-height: 100%;position: relative}
.wrap1 .content .container a{color:#777;}
.font-diannao{font-size: 0.8rem}
.f-cb:after{display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:".";}
.markets{margin:0;padding:0;list-style:none;}
.markets li:nth-child(even) a{background:#1a1e22;}

/*.markets li a{display:block;padding:0.8rem 0.5rem;line-height:100%;font-size:0.6rem;text-align:left;}
.markets li a .f-cb:first-of-type{margin-bottom:0.3rem;}
.markets li a .symbol,.markets li a .lastPrice{display:inline-block;color:#fff;vertical-align:middle;font-size:0.7rem;}
.markets li a .change{vertical-align:middle;margin-left:5px;}
.markets li a .symbol{margin-right:0.4rem;}
.markets li a .font{display:inline-block;width:0.55rem;vertical-align:top;margin-right:0;font-size:0.6rem;}
.markets li:nth-child(even) a{background:#1a1e22;}
.markets li a .transMoney{color:#777;font-size:0.6rem;    line-height: 100%;display: inline-block;vertical-align: middle;}*/

</style>