<template>
<div style="height: 100%;position: relative" data-ng-controller="chartController" class="ng-scope">
  <div ng-show="showKline" style="height:100%" class="">
    <div class="chartDetail" id="chartCtrlFixed" hidden="">
      <div>
        <lable class="ng-binding">O</lable><span id="open"></span>
        <lable class="ng-binding">H</lable><span id="high"></span>
        <lable class="ng-binding">L</lable><span id="low"></span>
        <lable class="ng-binding">C</lable><span id="close"></span>
        <lable class="ng-binding">Inc</lable><span id="updownPercent"></span>
      </div>
      <div id="showPage" style="height:100%;position:relative;">
        <ul ng-init="jszbLists=false" class="filter" ng-click="jszbLists=false;">
                <li ng-class="{true:'cur',false:''}[curIndex==0]" class="cur"><span ng-click="slideLine();setTimeLine(0);" class="ng-binding">Time</span></li>
                <li ng-class="{true:'cur',false:''}[curIndex==6]"><span ng-click="slideLine();getByInterval('86400',6);" class="ng-binding">1Day</span></li>
                <li ng-class="{true:'cur',false:''}[curIndex==7]"><span ng-click="slideLine();getByInterval('604800',7);" class="ng-binding">1Week</span></li>
                <li ng-class="{true:'cur',false:''}[curIndex<6&amp;&amp;curIndex>0]">
            <span ng-click="jszbLists=!jszbLists;stopPropagation1($event);">
               <div style="display:inline" ng-switch="curIndex">
                  <!-- ngSwitchWhen: 1 -->
                  <!-- ngSwitchWhen: 2 -->
                  <!-- ngSwitchWhen: 3 -->
                  <!-- ngSwitchWhen: 4 -->
                  <!-- ngSwitchWhen: 5 -->
                  <!-- ngSwitchDefault:  -->
                  <label ng-switch-default="" class="ng-binding ng-scope">Min</label>
               </div>
              <div style="display:inline">
                <img id="iconshowM" ng-class="{true:'rotat',false:''}[jszbLists]" src="/exchange/resources/img/down1.png">
              </div>
            </span>
                    <div class="jszb-lists clearBottom jszbListsHide" ng-click="stopPropagation1($event)">
                        <!-- <div  class="arrow"></div> -->
                        <img class="arrow" src="/exchange/resources/img/jian.png">
                        <span class="btn ng-binding" ng-class="{true:'cur',false:''}[curIndex==1]" ng-click="getByInterval1('60',1);">1Min</span>
                        <span class="btn ng-binding" ng-class="{true:'cur',false:''}[curIndex==2]" ng-click="getByInterval1('300',2)">5Mins</span>
                        <span class="btn ng-binding" ng-class="{true:'cur',false:''}[curIndex==3]" ng-click="getByInterval1('900',3)">15Mins</span>
                        <span class="btn ng-binding" ng-class="{true:'cur',false:''}[curIndex==4]" ng-click="getByInterval1('1800',4)">30Mins</span>
                        <span class="btn ng-binding" style="margin-bottom: 0px;    border-bottom:0px" ng-class="{true:'cur',false:''}[curIndex==5]" ng-click="getByInterval1('3600',5)">60Mins</span>
                    </div>
                </li>
                <div class="border-line" style="left: 15px; width: 86px;"></div>
            </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import {IndexData} from '../libs/DataSource.js'
// import IndexItem from '../components/IndexItem'

export default {
  name: 'Candle',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style >



        * {
            outline: 0px solid transparent;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-touch-callout: none;
        }


        #depth canvas,
        #chart_container canvas {
            position: absolute;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
        }

        #chart_container {
            width: 100%;
            height: 100%;

        }

        ul,
        li {
            list-style: none;
        }

        .filter {
            height: calc(14% - 0.5rem);
            width: 100%;
            margin:0 0.1rem 0.2rem 0;
            padding: 0 0.75rem;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            position: relative;
        }

        .filter li {
            float: left;
            width: 25%;
            position: relative;
            text-align: center;
            margin-right: 0;
        }

        .filter li.cur>span {
            /*border-bottom: 2px solid #008fdb;*/
            font-weight: bold;
        }

        .filter li>span {
            display: inline-block;
            font-size: 14px;
            vertical-align: middle;
            width: 100%;
            height: 1.7rem;
            line-height: 1.7rem;
            text-align: center;
            color: #999;
        }

        .filter li.cur>span {
            color: #f0b90b;
        }

        .filter li:last-child {
            margin-right: 0;
        }

        .middleMain {
            height: 86%;
            padding: 0 8px 0 8px;
            top: 2.2rem;
            bottom: 0;
            left: 0;
        }

        #showPage .jszb-lists {
            top: 2.8rem;
            border: 1px solid #32373d;
            opacity: 0;
            position: absolute;
            z-index: 9000;
            padding: 10px 5px;
            padding-bottom: 10px;
            text-align: center;
            width: 4rem;
            background: #20252b;
            transition: all 0.2s ease-in-out;
        }

        .filter img {
            width: 0.5rem;
            vertical-align: middle;
            -moz-transition: ease-out 0.5s;
            -o-transition: ease-out 0.5s;
            -webkit-transition: ease-out 0.5s;
            transition: ease-out 0.5s;
        }

        .rotat {
            transform: rotate(180deg);
        }

        .jszb-lists span {
            font-size: 0.65rem;
            display: block;
            padding-bottom: 8px;
            padding-top: -3px;
            border-bottom: 1px solid #32373d;
            color: #999999;
            width: 100%;
            margin-bottom: 10px;
            cursor: pointer;
        }

        .jszb-lists span:hover {
            color: #ddac36;
        }

        #showPage  .jszbListsShow {
            z-index: 999;
            opacity: 1;
            top: 2rem;
        }

        #showPage  .jszbListsHide {
            z-index: -1;
            opacity: 0;
            top: 2.6rem;
        }


        .green {
            color: #98c64a
        }

        .red {
            color: #be3877;
        }


        .overchart {
            z-index: 200;
            height: 100%;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .jszb-lists .arrow {
            position: absolute;
            right: 1.2rem;
            top: -13px;
            width: 19px;
            height: 13px;
        }

        #iconshowM {
            margin-left: 2px
        }

        .jszb-lists .cur {
            color: #fcaf3b;
            font-weight: bold;
        }


        .chartDetail {
            position: absolute;
            top: 0;
            width: 100%;
            height: 12%;
            z-index: 999;
            background-color: #1a1e22;
            font-size: 0.4rem;
            line-height: 12%;
            padding-left: 10px;
            color: #fff;
        }

        .chartDetail span {
            margin-right: 0px;
            margin-left: 2px;
            width: 14%;
            line-height: 1.6rem;
            display: inline-block;
            white-space: nowrap;
        }

        .border-line {
            width: 60px;
            position: absolute;
            bottom: -3px;
            transition: all 0.1s ease-in-out;
            border-bottom: 2px solid #fcaf3b;
        }

        .tab li {
            transition: all 0.2s ease-in-out;
        }

        #showPage {
            position: relative;
            /* Safari */
        }

        .header {
            font-size: 16px;
            color: #f9b13b;
            background-color: #262d33;
            padding: 10px;
            border-bottom: 2px #f9b13b solid;
        }

        .wrap {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
        /*loading 动画*/

        .spinner {
            width: 100px;
            height: 60px;
            text-align: center;
            font-size: 10px;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        .spinner>div {
            background-color: #ff4056;
            height: 100%;
            width: 6px;
            display: inline-block;
            margin: 0 5px;
            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }

        .spinner .rect2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }

        .spinner .rect3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }

        .spinner .rect4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }

        .spinner .rect5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }

        @-webkit-keyframes stretchdelay {
            0%,
            40%,
            100% {
                -webkit-transform: scaleY(0.4)
            }
            20% {
                -webkit-transform: scaleY(1.0)
            }
        }

        @keyframes stretchdelay {
            0%,
            40%,
            100% {
                transform: scaleY(0.4);
                -webkit-transform: scaleY(0.4);
            }
            20% {
                transform: scaleY(1.0);
                -webkit-transform: scaleY(1.0);
            }
        }

        .wrap {
            background-color: #000000;
            z-index: 2000;
        }
        

</style>