const envType = 'dev-ms'; // 区分环境 开发环境dev  生产product   测试环境testing
// const host = 'https://' + envType + '.test.com';
const host = 'http://localhost:5556';
const config = {
  /** 测试接口 */
  getTest: host + "/test",
};
export default config;
