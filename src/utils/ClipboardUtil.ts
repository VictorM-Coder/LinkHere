const ClipboardUtil = {
  async copyText(text: string) {
    await navigator.clipboard.writeText(text)
  },
  async pasteText() {
    return await navigator.clipboard.readText()
  },
}

export default ClipboardUtil
