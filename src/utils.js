import { MUTE, UNMUTE } from "./constants";

const ongoingMeetRegex = /meet.google.com\/[a-zA-Z]{3}\-[a-zA-Z]{4}\-[a-zA-Z]{3}.*/gm;

const isLiveGoogleMeetTab = (tab) => {
    return tab.url.match(ongoingMeetRegex);
};

const switchToMeetTab = async () => {
    try {
        let tab = await getMeetTab();
        console.log("Got meet tab:", tab);
        if (tab != null) {
            console.log("Updating tab to meet:", tab);
            chrome.tabs.update(tab.id, { selected: true, active: true });
            chrome.windows.update(tab.windowId, { drawAttention: true, focused: true });
        }
    } catch (err) {
        console.log("Error while getting meet tab");
    }
};

const setMeetMuteState = (muteState) => {
    let meetTab = getMeetTab();
    setMuteState(meetTab, muteState);
};

const changeFavicon = (microphoneCurrentState) => {
    document.querySelector('link[rel*="icon"]').href = "icon/" + microphoneCurrentState + ".png";
};

const setMuteState = async (tab, muteState) => {
    console.log("Requested mute state:", muteState);
    if (muteState === MUTE) {
        await chrome.tabs.update(tab.id, { muted: true });
    }
    else if (muteState === UNMUTE) {
        await chrome.tabs.update(tab.id, { muted: false });
    }
};

const isCurrentlyMuted = (tab) => {
    return tab.mutedInfo.muted;
};

const getMeetTab = () => {
    return new Promise((resolve, reject) => {
        try {
            chrome.tabs.query({}, (tabs) => {
                tabs.forEach((tab, index) => {
                    if (isLiveGoogleMeetTab(tab)) {
                        console.log("Found live Google Meet tab:", tab);
                        return tab;
                    }
                });
            });
        } catch (err) {
            reject(err);
        }
    })
};

const updateContextMenuTitle = (contextMenuId, newTitle) => {
    chrome.contextMenus.update(contextMenuId, {
        title: newTitle
    });
};

export { isLiveGoogleMeetTab, switchToMeetTab, changeFavicon, setMeetMuteState, updateContextMenuTitle, isCurrentlyMuted };