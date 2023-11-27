chrome.runtime.onMessage.addListener((message) => {
  console.log('message received')

  if (message.command === 'copy-link-for-markdown'){
    navigator.clipboard.writeText(message.text).then(() => {
      console.log(`Copied!: ${message.text}`)
    }).catch((error) => {
      console.log('Failed to copy...', error)
    })
  }
})
