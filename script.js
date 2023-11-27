chrome.runtime.onMessage.addListener((message) => {
  if (message.command === 'copy-link-for-markdown'){
    navigator.clipboard.writeText(message.text).then(() => {

    }).catch((error) => {
      console.log('Failed to copy: ', error)
    })
  }
})
