chrome.commands.onCommand.addListener(() => {
   chrome.tabs.query({active: true, currentWindow: true},tabs =>{
    const currentTab = tabs[0]
    const linkForMd = `[${currentTab.title}](${currentTab.url})`

    const promise = chrome.tabs.sendMessage(
      currentTab.id,
      {
        command:"copy-link-for-markdown",
        text: linkForMd
      }
    )
    promise.then(() => {
      console.log("Copied!")
    }).catch((error) => {
      console.log('Failed to copy...', error)
    })
  })
})