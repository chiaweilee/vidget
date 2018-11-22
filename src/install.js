// @flow

export default function (
  callback: (Vue: (options: Object | null, Vue: () => void | null) => void) => void,
  Vue: () => void
) {
  // is installed
  if (Vue) {
    callback(Vue)
  } else {
    // install
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/vue/dist/vue.min.js'
    script.onload = script.onreadystatechange = function (): void {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        script.onload = script.onreadystatechange = null
        document.getElementsByTagName('head')[0].removeChild(script)
        callback(window.Vue)
      }
    }
    document.getElementsByTagName('head')[0].appendChild(script)
  }
}
