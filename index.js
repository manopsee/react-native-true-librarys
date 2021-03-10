
import { NativeModules } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Ping from 'react-native-ping';
import ImageMarker from "react-native-image-marker"
import ImagesMerge from 'react-native-images-merge';

const { RNTrueLibrarys } = NativeModules;

class TrueLibs {

    static async DetectNetwork() {
        let result = '';
        await NetInfo.fetch().then(state => { 
            result = state;
        });
        return result;
    }

    static async SpeedTest() {
        try {
            const ms = await Ping.getTrafficStats('8.8.8.8',{ timeout: 1000 });
            let result = {
                download: ms.receivedNetworkSpeed,
                upload: ms.sendNetworkSpeed,
                pingTo: "google.com"
            }
            return result
          } catch (error) {
            console.log('special code',error.code, error.message);
            return error
          }
    }

    static async ImageMaker(uri,text,fontSize) {
        let result = ''
        await ImageMarker.markText({
            src: uri,
            text: text,
            position: 'center', 
            color: '#ffffff',
            fontName: 'Arial-BoldItalicMT', 
            fontSize: fontSize,
            shadowStyle: {
                dx: 5,
                dy: 5,
                radius: 20.9,
                color: '#4e4e4e'
            },
            scale: 1, 
            quality: 100
        }).then((res) => {
            if(Platform.OS === 'ios'){
                res = '/' +res
            }else{
                res = 'file://' +res
            }
            console.log("the path is : "+res)
            result = res
        }).catch((err) => {
            console.log(err)
            result = err
        })
        return result
    }

    static async MergeImage(uri1,uri2,orient) {
        let res = await ImagesMerge.mergeImages([{uri: uri1}, { uri: uri2 }],orient);
        if(res){
            res = 'data:image/png;base64,'+res
            return res
        }else{
            res = 'ERROR'
            return res
        }
    }

}

export default TrueLibs;
