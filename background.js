chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'summarize') {
    chrome.tabs.executeScript(
      sender.tab.id,
      { file: 'content.js' },
      function () {
        chrome.tabs.sendMessage(sender.tab.id, message, sendResponse)
      }
    )
    return true
  }

  if (message.action === 'summarize-selection') {
    chrome.tabs.executeScript(
      sender.tab.id,
      { file: 'content_selection.js' },
      function () {
        chrome.tabs.sendMessage(sender.tab.id, message, sendResponse)
      }
    )
    return true
  }
})

chrome.commands.onCommand.addListener(function(command) {
  console.log(command)
  if (command === "_execute_action") {
    chrome.tabs.executeScript(
        sender.tab.id,
        { file: 'content_selection.js' },
        function () {
          chrome.tabs.sendMessage(sender.tab.id, message, sendResponse)
        }
    )
    return true
  } else if (command === "inne_polecenie") {
    // Kod do wykonania, gdy użytkownik naciska Ctrl+Shift+U (lub MacCtrl+Shift+U na Macu)
  }
});
