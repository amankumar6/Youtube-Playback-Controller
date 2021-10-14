chrome.storage.sync.get(['playbackRate'], (result) => {
    $(".selector").val(result.playbackRate);
    document.getElementsByClassName('html5-main-video')[0].playbackRate = result.playbackRate;
});