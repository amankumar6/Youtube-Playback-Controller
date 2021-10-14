chrome.runtime.sendMessage({todo: "showPageAction"});

const playBack = [1, 1.1, 1.15, 1.2, 1.30, 1.35, 1.40, 1.45, 1.55, 1.65, 1.85, 1.95, 2.25, 2.50, 2.75, 3];

$( document ).ready(function() {
    setTimeout(() => {
        $("#meta-contents").before(`<div class="selector-div"><select class="selector" aria-label="Default select example"></select></div>`);

        $(".selector").html(playBack.map((e) => `<option value="${e}"> x ${e} </option>`).join(''));

        chrome.storage.sync.get(['playbackRate'], (result) => {
            $("selector").val(result.playbackRate);
            document.getElementsByClassName('html5-main-video')[0].playbackRate = result.playbackRate;
        });
        
        $(".selector").change((e) => {
            if(e.target.value){
                document.getElementsByClassName('html5-main-video')[0].playbackRate = e.target.value;
                chrome.storage.sync.set({playbackRate: e.target.value});
            } 
        });
    }, 1000);
});