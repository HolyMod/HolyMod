Object.assign(window, {
    HolyAPI: HolyNative.requireModule("API"),
    HolyIPC: HolyNative.requireModule("IPC")
});