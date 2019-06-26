const envType = 'dev-ms'; // 区分环境 开发环境dev  生产product   测试环境testing
// const host = 'https://' + envType + '.test.com';
const host = 'https://www.easy-mock.com/mock/5d12c5ee473f877bf1906746/example';
const config = {
  /** 模板列表 */
  getTempList: host + "/sysTempList",
};
export default config;
