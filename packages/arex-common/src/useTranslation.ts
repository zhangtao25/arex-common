export const useTranslation = (l:any) => {
  console.log(l)
  return {
    t: (key:any) => {
      return key
    }
  }
}
