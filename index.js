/*global require*/

import React, { Component } from "react";
import {
	TouchableWithoutFeedback,
	Animated,
	Easing,
	Image,
	ImageStyle,
	ImagePropertiesSourceOptions,
} from "react-native";
import PropTypes from "prop-types";
import ViewOverflow from "react-native-view-overflow";
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Fontisto from "react-native-vector-icons/Fontisto"
import Foundation from "react-native-vector-icons/Foundation"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Octicons from "react-native-vector-icons/Octicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Zocial from "react-native-vector-icons/Zocial"
import { Icon } from "native-base";

const AnimatedViewOverflow = Animated.createAnimatedComponent(ViewOverflow);

export const iconTypes = {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	FontAwesome5,
	Fontisto,
	Foundation,
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
	Octicons,
	SimpleLineIcons,
	Zocial
}

interface valuesProp {
	title: String,
	icon: ImagePropertiesSourceOptions,
	tintColor: String,
	default: Boolean,
	isIcon: Boolean,
	iconType: String
}

interface TabBarProps {
	iconStyle: ImageStyle,
	values: Array<valuesProp>,
	isRtl: Boolean,
	containerBackgroundColor: String,
	itemMaskBackgroundColor: String,
	iconSize: Number
}

class TabBar extends Component<TabBarProps> {
	constructor(props) {
		super(props);

		this.state = {
			lastSelectedIndex: null
		};

		this.animatedItemValues = [];
		this.animatedBubbleValues = [];
		this.animatedMiniBubbleValues = [];
		this.animatedImageValues = [];
		this.props.values.forEach((item, index) => {
			this.animatedItemValues[index] = new Animated.Value(item.default ? -30 : 0);
			this.animatedBubbleValues[index] = new Animated.Value(item.default ? 1 : 0);
			this.animatedImageValues[index] = new Animated.Value(item.default ? 1 : 0);
			this.animatedMiniBubbleValues[index] = new Animated.Value(item.default ? 1 : 0);
			item.default && (this.state = { lastSelectedIndex: index })
		});
	}

	static defaultProps = {
		tintColor: "rgb(76, 83, 221)",
		iconStyle: { width: 20, height: 20 },
		isRtl: false,
		containerBackgroundColor: "white",
		itemMaskBackgroundColor: "white",
		iconSize: 25,
	};

	renderIcon(type, icon, tintColor) {
		switch (type) {
			case iconTypes.AntDesign:
				return <AntDesign name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.Entypo:
				return <Entypo name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.EvilIcons:
				return <EvilIcons name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.Feather:
				return <Feather name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.FontAwesome:
				return <FontAwesome name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.FontAwesome5:
				return <FontAwesome5 name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.Fontisto:
				return <Fontisto name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.Foundation:
				return <Foundation name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.Ionicons:
				return <Ionicons name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.MaterialCommunityIcons:
				return <MaterialCommunityIcons name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.MaterialIcons:
				return <MaterialIcons name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.Octicons:
				return <Octicons name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.SimpleLineIcons:
				return <SimpleLineIcons name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			case iconTypes.Zocial:
				return <Zocial name={icon} style={{ color: tintColor, fontSize: this.props.iconSize }} />
			
			default:
				return <AntDesign name="question" style={{ color: tintColor, fontSize: this.props.iconSize }} />
		}
	}

	_renderButtons = () => {
		const { iconStyle, values } = this.props
		return values.map((item: valuesProp, index) => {
			const animatedItemStyle = {
				transform: [{ translateY: this.animatedItemValues[index] }]
			};

			const animatedBubbleScaleValues = this.animatedBubbleValues[
				index
			].interpolate({
				inputRange: [0, 0.25, 0.4, 0.525, 0.8, 1],
				outputRange: [0.01, 3, 1.65, 1.65, 3.2, 3]
			});

			const animatedColorValues = this.animatedImageValues[index].interpolate({
				inputRange: [0, 1],
				outputRange: [this.props.tintColor, "rgb(255, 255, 255)"]
			});

			const animatedBubbleStyle = {
				transform: [{ scale: animatedBubbleScaleValues }]
			};

			const animatedImageStyle = {
				tintColor: animatedColorValues
			};

			const animatedMiniBubbleTranslateValues = this.animatedMiniBubbleValues[
				index
			].interpolate({
				inputRange: [0, 1],
				outputRange: [13, 0]
			});

			const animatedMiniBubbleHeightValues = this.animatedMiniBubbleValues[
				index
			].interpolate({
				inputRange: [0, 0.01, 1],
				outputRange: [0, 1, 1]
			});

			const animatedMiniBubbleStyle = {
				opacity: animatedMiniBubbleHeightValues,
				transform: [{ translateY: animatedMiniBubbleTranslateValues }]
			};

			const animatedTitleValues = this.animatedBubbleValues[index].interpolate({
				inputRange: [0, 1],
				outputRange: [60, 60]
			});

			const animatedTitleStyle = {
				transform: [{ translateY: animatedTitleValues }]
			};

			return (
				<TouchableWithoutFeedback
					key={index}
					onPress={() => {
						if (index === this.state.lastSelectedIndex) {
							return;
						}

						this.startAnimation(index);

						if (this.state.lastSelectedIndex !== null) {
							this.endAnimation(this.state.lastSelectedIndex);
						}

						this.setState({
							lastSelectedIndex: index
						});

						this.props.onPress(index);
					}}
				>
					<AnimatedViewOverflow style={[styles.item, animatedItemStyle]}>
						<Image
							style={[styles.itemMask, { tintColor: this.props.itemMaskBackgroundColor }]}
							source={require("./assets/mask.png")}
						/>
						<Animated.View
							style={[
								styles.bubble,
								{ backgroundColor: this.props.tintColor },
								animatedBubbleStyle
							]}
						/>
						<Animated.View
							style={[
								styles.miniBubble,
								{ backgroundColor: this.props.tintColor },
								animatedMiniBubbleStyle
							]}
						/>
						{/* <Animated.Text>ooooo {JSON.stringify(item.default)}</Animated.Text> */}
						{!item.isIcon ? <Animated.Image source={item.icon} style={[animatedImageStyle, iconStyle, { tintColor: item.tintColor }]} resizeMode="contain" /> :
							this.renderIcon(item.iconType, item.icon, item.tintColor,)
						}
						{/* <Icon type={item.iconType.} name="ios-home" style={{color: item.tintColor}} /> */}
						<Animated.View style={[styles.titleContainer, animatedTitleStyle]}>
							<Animated.Text
								numberOfLines={1}
								adjustsFontSizeToFit={true}
								style={{
									color: this.props.tintColor
								}}
							>
								{item.title}
							</Animated.Text>
						</Animated.View>
					</AnimatedViewOverflow>
				</TouchableWithoutFeedback>
			);
		});
	};

	startAnimation = index => {
		Animated.parallel([
			Animated.timing(this.animatedItemValues[index], {
				toValue: -30,
				duration: 500,
				delay: 300,
				easing: Easing.in(Easing.elastic(1.5)),
				useNativeDriver: true
			}),
			Animated.timing(this.animatedMiniBubbleValues[index], {
				toValue: 1,
				duration: 1000,
				delay: 300,
				useNativeDriver: true
			}),
			Animated.timing(this.animatedBubbleValues[index], {
				toValue: 1,
				duration: 800,
				easing: Easing.inOut(Easing.out(Easing.ease)),
				useNativeDriver: true
			}),
			Animated.timing(this.animatedImageValues[index], {
				toValue: 1,
				duration: 800
			})
		]).start();
	};

	endAnimation = index => {
		Animated.parallel([
			Animated.timing(this.animatedItemValues[index], {
				toValue: 0,
				duration: 400,
				delay: 350,
				useNativeDriver: true
			}),
			Animated.timing(this.animatedMiniBubbleValues[index], {
				toValue: 0,
				duration: 1,
				useNativeDriver: true
			}),
			Animated.timing(this.animatedBubbleValues[index], {
				toValue: 0,
				duration: 750,
				easing: Easing.out(Easing.ease),
				useNativeDriver: true
			}),
			Animated.timing(this.animatedImageValues[index], {
				toValue: 0,
				duration: 400,
				delay: 350
			})
		]).start();
	};

	render() {
		const { isRtl } = this.props
		return (
			<AnimatedViewOverflow style={[styles.container, { flexDirection: `row${!isRtl ? "" : "-reverse"}`, backgroundColor: this.props.containerBackgroundColor }]}>
				{this._renderButtons()}
			</AnimatedViewOverflow>
		);
	}
}

TabBar.propTypes = {
	onPress: PropTypes.func.isRequired,
	values: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			icon: PropTypes.number.isRequired,
			tintColor: PropTypes.string.isRequired,
			default: PropTypes.bool
		})
	),
	tintColor: PropTypes.string,
	isRtl: PropTypes.bool
};

const styles = {
	container: {
		height: 60,
		width: "100%",
		justifyContent: "space-around",
		alignItems: "center"
	},
	item: {
		backgroundColor: "transparent",
		borderRadius: 30,
		height: 60,
		width: 60,
		alignItems: "center",
		justifyContent: "center"
	},
	itemMask: {
		position: "absolute"
	},
	bubble: {
		position: "absolute",
		alignSelf: "center",
		height: 17,
		width: 17,
		backgroundColor: "#4C53DD",
		borderRadius: 8.5
	},
	miniBubble: {
		position: "absolute",
		alignSelf: "center",
		width: 22,
		height: 22,
		backgroundColor: "#4C53DD",
		borderRadius: 11
	},
	titleContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
};

export default TabBar;
