
# react-native-true-librarys

## Getting started

`$ npm install react-native-true-librarys --save`

<!-- ### Mostly automatic installation

`$ react-native link react-native-true-librarys`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-true-librarys` and add `RNTrueLibrarys.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNTrueLibrarys.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNTrueLibrarysPackage;` to the imports at the top of the file
  - Add `new RNTrueLibrarysPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-true-librarys'
  	project(':react-native-true-librarys').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-true-librarys/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-true-librarys')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNTrueLibrarys.sln` in `node_modules/react-native-true-librarys/windows/RNTrueLibrarys.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using True.Librarys.RNTrueLibrarys;` to the usings at the top of the file
  - Add `new RNTrueLibrarysPackage()` to the `List<IReactPackage>` returned by the `Packages` method
 -->

## Please install

 - `$ npm i @react-native-community/netinfo --save`
 - `$ npm install react-native-ping --save`
 - `$ npm install react-native-image-marker --save`
 - `$ npm install @manopsee/react-native-images-merge@1.1.5`

## Usage
```javascript
import TrueLibs from 'react-native-true-librarys';

// TODO: What to do with the module?
TrueLibs.DetectNetwork();

TrueLibs.SpeedTest();

TrueLibs.ImageMaker(ImageUri,Text,FontSize);

TrueLibs.MergeImage(uri1,uri2,orient);
//uri1,uri2 : base64;
//orient : string "vertical","horizontal" default "horizontal" for Android

```

  