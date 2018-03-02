import createIconSet from "react-native-vector-icons/lib/create-icon-set";
import glyphMap from '../../Iconfont.json';

const loadTabIcons = () => {
    const iconSet = createIconSet(glyphMap, 'Iconfont', 'Iconfont.ttf');

    return new Promise(function (resolve, reject) {
        Promise.all(
            [
                iconSet.getImageSource('shouye', 30),
                iconSet.getImageSource('activity', 30),
                iconSet.getImageSource('addressbook', 30)
            ]
        ).then((values) => {
            resolve(values);
        }).catch((error) => {
            console.log(error);
            reject(error);
        }).done();
    });
};

export default loadTabIcons;