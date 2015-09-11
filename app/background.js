// Generated by CoffeeScript 1.9.3
(function() {
  var clickHandler, contextMenuParams;

  clickHandler = function(info) {
    return chrome.history.deleteUrl({
      url: info.linkUrl
    }, function() {});
  };

  contextMenuParams = {
    "title": "Unpurple",
    "contexts": ["link"],
    "onclick": clickHandler
  };

  chrome.contextMenus.create(contextMenuParams, function() {
    if (chrome.runtime.lastError) {
      return console.log("" + chrome.runtime.lastError);
    }
  });

}).call(this);
