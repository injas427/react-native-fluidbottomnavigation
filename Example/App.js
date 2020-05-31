/*global require*/

import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TabBar, { iconTypes } from "react-native-fluidbottomnavigation";

const App = (props) => {
	const [curTab, setCurTab] = useState(0)
	return (
		<View style={styles.container}>
			<View />
			<TabBar
				iconSize={25}
				iconStyle={{ width: 50, height: 50 }}
				tintColor="blue"
				onPress={tabIndex => {
					setCurTab(tabIndex)
				}}
				values={[
					{ title: "News", image: require("./assets/news.png"), tintColor: curTab == 0 ? "red" : "blue", default: true, },
					{ title: "Requests", image: require("./assets/requests.png"), tintColor: curTab == 1 ? "red" : "blue", },
					{ title: "Events", image: require("./assets/events.png"), tintColor: curTab == 2 ? "red" : "blue", },
					{ title: "Members", image: require("./assets/members.png"), tintColor: curTab == 3 ? "red" : "blue", },
					{ title: "Notification", icon: "notification", tintColor: curTab == 4 ? "red" : "blue", isIcon: true, iconType: iconTypes.Entypo, }
				]}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#4C53DD"
	}
});

export default App