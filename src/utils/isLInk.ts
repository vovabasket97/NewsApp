export function isLink(text: string) {
  var urlRegex = /(https?:\/\/[^\s]+)/g
  return urlRegex.test(text)
}
