// @flow

export default function (callback: (Vue: () => void) => void, Vue: () => void | null) {
  // is installed
  if (Vue) {
    callback(Vue)
    return
  }
  // install
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/vue/dist/vue.min.js'
  script.onload = script.onreadystatechange = function (): void {
    if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
      callback(window.Vue)
      script.onload = script.onreadystatechange = null
      document.getElementsByTagName('head')[0].removeChild(script)
    }
  }
  document.getElementsByTagName('head')[0].appendChild(script)
}
