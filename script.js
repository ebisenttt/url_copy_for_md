function onClickCopyButton() {
  chrome.tabs.query({active: true, lastFocusedWindow: true},tabs =>{
    const currentTab = tabs[0]
    const title = currentTab.title
    console.log({currentTab})
    const url = location.href
    const linkForMd = `[${title}](${url})`
    navigator.clipboard.writeText(linkForMd).then(() => {
      alert(`Copied!: ${linkForMd}`)
    }).catch(() => {
      alert('Failed to copy...')
    })
  }) 
}

document.addEventListener('DOMContentLoaded',()=>{
  const copyUrlButton = document.querySelector('#copy-button')
  copyUrlButton.addEventListener('click', onClickCopyButton)
})