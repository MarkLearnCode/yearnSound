/**
 * 正式環境移除console.log
 */

export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === 'production') {
    console.log = () => null;
  }
});
