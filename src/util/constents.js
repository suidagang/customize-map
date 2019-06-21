/** 
 * 这个js 专门用于存储枚举值
 * 使用方式import Constents from '@/util/constents.js'
 * 获取全部值Constents.mallStats.get()
 * 获取单独值Constents.mallStats.get(0)
 * */ 

//  商品中心 基础数据 -- > 数据启用，停用状态
let mallStateMap = new Map();
mallStateMap.set(0, "停用");
mallStateMap.set(1, "启用");
mallStateMap.set('all', [{
  laleb: '停用',
  value: 0
}, {
  laleb: '启用',
  value: 1
}]);
const constents = {
  mallStats: mallStateMap,
};
export default constents
