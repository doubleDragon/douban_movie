import Toast from "react-native-root-toast";

export const hideDelay = (toast, delay=500) => {
    setTimeout(() => {
        Toast.hide(toast)
    }, delay);
};

export const show = (text) => {
    let toast = Toast.show(text, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: false,
        animation: false,
        delay: 0,
    });

    hideDelay(toast);

    return toast;
};

