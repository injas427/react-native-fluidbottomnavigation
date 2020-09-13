# FluidBottomNavigation for React Native

[![NpmVersion](https://img.shields.io/npm/v/react-native-fluidbottomnavigation.svg?style=flat-square)](https://www.npmjs.com/package/react-native-fluidbottomnavigation)
[![NpmLicense](https://img.shields.io/npm/l/react-native-fluidbottomnavigation.svg?style=flat-square)](https://www.npmjs.com/package/react-native-fluidbottomnavigation)

This is a cloned version of [fluidbottomnavigation-rn](https://www.npmjs.com/package/fluidbottomnavigation-rn "fluidbottomnavigation-rn"). This package have some additional parameters. 

![Sample](https://raw.githubusercontent.com/10clouds/FluidBottomNavigation-rn/master/static/sample.gif)

## Example

To run the example project, clone the repo, and run `npm install` from the Example directory first.

## Installation

It is available through [npm](https://npmjs.com). To install just run

```
npm i -s react-native-fluidbottomnavigation
```

in your project directory. And then link it's native dependency with

```
npm i -s react-native-view-overflow
```

and you're done!

## Usage


```JSX

import TabBar, { iconTypes } from "react-native-fluidbottomnavigation";

<TabBar
	activeTab={activeTab}
    iconStyle={{ width: 50, height: 50 }}
    tintColor="blue"
    onPress={(tabIndex) => {
        console.warn(tabIndex);
    }}
    iconActiveTintColor="black"
    iconInactiveTintColor="blue"
    tintColor="#f5f5f7"
    titleColor="red"
    titleFontFamily="Europa-Regular"
    isRtl={ true }
    iconSize={25}
    values={[
        { title: "Home", icon: "alarm", tintColor: curTab == 0 ? "red" : "blue", isIcon: true, iconType: iconTypes.MaterialIcons },
        { title: "Home1", image: require("./home.png"), tintColor: curTab == 1 ? "red" : "blue", },
        { title: "Home2", image: require("./home.png"), tintColor: curTab == 2 ? "red" : "blue", },
        { title: "Home3", image: require("./home.png"), tintColor: curTab == 3 ? "red" : "blue", },
        { title: "Home4", image: require("./home.png"), tintColor: curTab == 4 ? "red" : "blue", },
    ]}
/>
```

## Customization

Optionally you can pass `tintColor` prop, to adjust styling to your app.

1. `iconStyle` => Now you can style your icon used in navigator without editing core module

2. `isRtl` => New feature for apps that requires rtl.

3.  `tintColor` => tintColor in values let's you add specific color for each icon

4. `activeTab` => Now you can set currently focused tab with `activeTab` prop 

5. `containerBackgroundColor` => Now you can change default container background color by passing color value to `containerBackgroundColor` prop

6. `itemMaskBackgroundColor` => Now you can change default mask color by passing color value to `itemMaskBackgroundColor` prop

7. `iconSize` => Now you can set icon size by passing integer value to `iconSize` prop

8. `isIcon` => Now you can choose either image or icon as tabbar icon by passing `isIcon` to each item prop

9. `iconType` => All icons from `react-native-vector-icons` are supported. Can import `iconTypes` to get all the supported types

10. `iconActiveTintColor` => Now you can change active icon tint color by passing `iconActiveTintColor` value

11. `iconInactiveTintColor` => Now you can change inactive icon tint color by passing `iconInactiveTintColor` value

12. `titleFontFamily` => Now you can change fontFamily of the title by passing font family to `titleFontFamily` 

13. `titleColor` => Now you can change color of the title by passing color to `titleColor` 

### Extra paramters added
| Property      | Type          | Default       | Description   | Required      |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| iconStyle  | ImageStyle  | { width: 20, height: 20 }  | iconStyle prop allows you to customize the icon used in bottom tab bar  | false  |
| isRtl  | Boolean  | false  | If you have rtl in your app, set valueto true and the bottom tab bar will show in reverse order  | false  |
| tintColor  | String  | Black  | You can assign custom color for each icon by passing tintColor prop along with title and icon. This can be used to assign unique color for active tab  | false  |
| activeTab | Number  | true  | Now default tab by passing `activeTab` prop  | null  |
| <span style="color:red;" >default **(replaced with activeTab)**</span> | <span style="color:red;" >Boolean</span>  | <span style="color:red;" >false</span>  | <span style="color:red;" >Now default tab can be set by passing default prop along with title and icon. This can be used to focus aspecific tab before any user interaction</span>  | <span style="color:red;" >true</span>  |
| containerBackgroundColor  | String  | white  | Now you can change default container background color by passing color value to `containerBackgroundColor` prop. It accespts string and hex values  | false  |
| itemMaskBackgroundColor  | String  | white  | Now you can change default mask color by passing color value to `itemMaskBackgroundColor` prop. It accespts string and hex values  | false  |
| iconSize  | Number  | 25  | Now you can set icon size by passing integer value to `iconSize` prop  | false  |
| isIcon  | Boolean  | false  | Now you can choose either image or icon as tabbar icon by passing `isIcon` to each item prop  | false  |
| iconType  | String  | false  | All icons from `react-native-vector-icons` are supported. Can import `iconTypes` to get all the supported types  | false  |
| icon  | Image or String  | false  | Valid image path or icon name if `isIcon` is set to true  | false  |
| iconActiveTintColor  | String  | black  | Valid color  | false  |
| iconinactiveTintColor  | String  | black  | Valid color  | false  |
| titleFontFamily  | String  | undefined  | Valid font family name  | false  |
| titleColor  | String  | black  | Color  | false  |

> Note: Either image or icon is accepted. By default, library checks for image. If you want to show **react native icon** as tabbar icon, you must set **isIcon** to **true** and set value to **icon** prop
## Author

[Injas M T P](https://github.com/injas427)

## License

`react-native-fluidbottomnavigation` Component is available under the MIT license. See the LICENSE file for more info.
