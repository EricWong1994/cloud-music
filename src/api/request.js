import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get('/banner');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized');
}

export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
}

// export const getSingerListRequest = (category, alpha, count) => {
//   return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
// }

export const categoryMap = new Map([
  ['-1', { type: -1, area: -1 }],
  ['1001', { type: 1, area: 7 }],
  ['1002', { type: 2, area: 7 }],
  ['1003', { type: 3, area: 7 }],
  ['2001', { type: 1, area: 96 }],
  ['2002', { type: 2, area: 96 }],
  ['2003', { type: 3, area: 96 }],
  ['6001', { type: 1, area: 8 }],
  ['6002', { type: 2, area: 8 }],
  ['6003', { type: 3, area: 8 }],
  ['7001', { type: 1, area: 16 }],
  ['7002', { type: 2, area: 16 }],
  ['7003', { type: 3, area: 16 }],
  ['4001', { type: 1, area: 0 }],
  ['4002', { type: 2, area: 0 }],
  ['4003', { type: 3, area: 0 }],
]);


/**
 * 
 * @param {*} type -1:全部 1:男歌手 2:女歌手 3:乐队
 * @param {*} area -1:全部 7华语 96欧美 8:日本 16韩国 0:其他
 * @param {*} alpha 按首字母索引查找参数,字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传 0
 * @param {*} offset offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns 
 */
export const getSingerListRequest = (type, area, alpha, offset) => {
  return axiosInstance.get(
    `/artist/list?${type ? `type=${type}&area=${area}` : ''
    }&initial=${typeof alpha === 'string' ? alpha.toLowerCase() : alpha}&offset=${offset}`
  );
}