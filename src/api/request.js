import { axiosInstance } from "./config";

export const getBannerRequest = () => {
  return axiosInstance.get('/banner');
}

export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized');
}

// 热门歌手列表
// https://neteasecloudmusicapi.vercel.app/#/?id=%e7%83%ad%e9%97%a8%e6%ad%8c%e6%89%8b
export const getHotSingerListRequest = (count, limit = 50) => {
  return axiosInstance.get(`/top/artists?offset=${count}&limit=${limit}`);
}

// export const getSingerListRequest = (category, alpha, count) => {
//   return axiosInstance.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
// }

/**
 * 歌手分类列表 https://neteasecloudmusicapi.vercel.app/#/?id=%e6%ad%8c%e6%89%8b%e5%88%86%e7%b1%bb%e5%88%97%e8%a1%a8
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

export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

export const getAlbumDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};