import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Icons } from "../Assets/Components/icons";
import { useNavigation } from "@react-navigation/native";

import { style } from "../styles/MemberDashboardStyle";

const MemberProfileScreen = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const handleLogout = () => {
    Alert.alert("Logout", "You have been logged out.");
    // Add actual logout logic here
    navigation.navigate("MemberLoginScreen");
  };

  return (
    <SafeAreaView style={style.container}>
      {/* Header Bar */}
      <View style={style.header}>
        <TouchableOpacity onPress={openDrawer}>
          <Icons.menu />
        </TouchableOpacity>

        <Text style={style.headerTitle}>Profile</Text>

        <View style={style.spacer} />
      </View>

      {/* Profile Content */}
      <View style={style.content}>
        <Image
          style={styles.profileImage}
          source={require("../Assets/user.png")}
        />

        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
        <Text style={styles.profileDetail}>Membership: Active</Text>
        <Text style={styles.profileDetail}>Joined: January 2024</Text>

        <TouchableOpacity
                    onPress={handleLogout}
                    style={{
                        backgroundColor: "#e53935",
                        paddingVertical: 12,
                        paddingHorizontal: 30,
                        borderRadius: 25,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2,
                        elevation: 3,
                    }}
                >
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
  },
  profileDetail: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default MemberProfileScreen;
