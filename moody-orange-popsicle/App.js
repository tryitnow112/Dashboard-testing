import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Image, 
  Switch, 
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [hvacEnabled, setHvacEnabled] = useState(true);
  const [evEnabled, setEvEnabled] = useState(true);
  const [sprinklerEnabled, setSprinklerEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9ff" />
      
      {/* TopAppBar */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image 
            source={{ uri: 'https://googleusercontent.com/profile/picture/0' }} 
            style={styles.profilePic} 
          />
          <Text style={styles.headerTitle}>EcoSync</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="notifications-none" size={28} color="#0b1c30" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.mainScroll} showsVerticalScrollIndicator={false}>
        
        {/* Centerpiece: Luminous Engine Dial */}
        <View style={styles.heroSection}>
          <View style={styles.dialContainer}>
            <View style={styles.dialRing}>
              <Text style={styles.dialValue}>12.4</Text>
              <Text style={styles.dialLabel}>KWH TODAY</Text>
              <View style={styles.dialSub}>
                <MaterialIcons name="water-drop" size={20} color="#0059bb" />
                <Text style={styles.dialSubText}>240L</Text>
              </View>
            </View>
          </View>

          {/* Stats Metadata */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>ENERGY EFFICIENCY</Text>
              <View style={styles.statValueRow}>
                <Text style={styles.statValuePrimary}>88%</Text>
                <MaterialIcons name="trending-up" size={16} color="#006d32" />
              </View>
            </View>
            <View style={[styles.statBox, { alignItems: 'flex-end' }]}>
              <Text style={styles.statLabel}>RESOURCE HEALTH</Text>
              <Text style={styles.statValueSecondary}>Optimal</Text>
            </View>
          </View>
        </View>

        {/* Active Appliances Section */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Active Appliances</Text>
            <Text style={styles.sectionSubtitle}>3 systems drawing power</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Horizontal Scroll Cards */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.horizontalScroll}
          contentContainerStyle={{ paddingRight: 24 }}
        >
          {/* HVAC Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: '#e5f3ea' }]}>
                <MaterialIcons name="ac-unit" size={24} color="#006d32" />
              </View>
              <Switch 
                value={hvacEnabled} 
                onValueChange={setHvacEnabled} 
                trackColor={{ false: '#d3e4fe', true: '#006d32' }}
                thumbColor="#fff"
              />
            </View>
            <Text style={styles.cardTitle}>HVAC</Text>
            <View style={styles.cardMetrics}>
              <View style={styles.cardMetricRow}>
                <Text style={styles.cardMetricLabel}>Current Draw</Text>
                <Text style={styles.cardMetricValue}>1.2 kW</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '66%', backgroundColor: '#006d32' }]} />
              </View>
            </View>
          </View>

          {/* EV Charger Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: '#e5f3ea' }]}>
                <MaterialIcons name="ev-station" size={24} color="#006d32" />
              </View>
              <Switch 
                value={evEnabled} 
                onValueChange={setEvEnabled} 
                trackColor={{ false: '#d3e4fe', true: '#006d32' }}
                thumbColor="#fff"
              />
            </View>
            <Text style={styles.cardTitle}>EV Charger</Text>
            <View style={styles.cardMetrics}>
              <View style={styles.cardMetricRow}>
                <Text style={styles.cardMetricLabel}>Current Draw</Text>
                <Text style={styles.cardMetricValue}>7.4 kW</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '85%', backgroundColor: '#006d32' }]} />
              </View>
            </View>
          </View>

          {/* Smart Sprinkler Card */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: '#e6f0fa' }]}>
                <MaterialIcons name="water" size={24} color="#0059bb" />
              </View>
              <Switch 
                value={sprinklerEnabled} 
                onValueChange={setSprinklerEnabled} 
                trackColor={{ false: '#d3e4fe', true: '#0059bb' }}
                thumbColor="#fff"
              />
            </View>
            <Text style={styles.cardTitle}>Smart Sprinkler</Text>
            <View style={styles.cardMetrics}>
              <View style={styles.cardMetricRow}>
                <Text style={styles.cardMetricLabel}>Water Flow</Text>
                <Text style={styles.cardMetricValue}>0 L/m</Text>
              </View>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBarFill, { width: '0%', backgroundColor: '#0059bb' }]} />
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bento Grid Insights */}
        <View style={styles.insightsContainer}>
          <View style={styles.insightCardPrimary}>
            <Text style={styles.insightTitle}>Peak Saving Window</Text>
            <Text style={styles.insightText}>Lower rates available between 11 PM and 5 AM. Schedule your EV charge now.</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Schedule Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.insightCardSecondary}>
            <MaterialIcons name="water-drop" size={32} color="#fff" />
            <Text style={styles.insightTitleSecondary}>Water Leak Alert</Text>
            <Text style={styles.insightTextSecondary}>No abnormal flow detected in the main line today.</Text>
            <Text style={styles.insightStatus}>Secure</Text>
          </View>
        </View>
        
        {/* Spacer for bottom nav */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Nav Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="dashboard" size={24} color="#006d32" />
          <Text style={[styles.navText, { color: '#006d32' }]}>DASHBOARD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="bar-chart" size={24} color="#6c7b6c" />
          <Text style={styles.navText}>USAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="bolt" size={24} color="#6c7b6c" />
          <Text style={styles.navText}>AUTOMATIONS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="settings" size={24} color="#6c7b6c" />
          <Text style={styles.navText}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'rgba(248, 249, 255, 0.9)',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e5eeff',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0b1c30',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  mainScroll: {
    flex: 1,
  },
  heroSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 40,
    paddingHorizontal: 24,
  },
  dialContainer: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialRing: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 6,
    borderColor: '#e5eeff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#00d166',
    borderRightColor: '#00d166',
  },
  dialValue: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#0b1c30',
  },
  dialLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#6c7b6c',
    letterSpacing: 1.5,
    marginTop: 4,
  },
  dialSub: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  dialSubText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0059bb',
    marginLeft: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
  },
  statBox: {
    flex: 1,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#6c7b6c',
    letterSpacing: 1,
  },
  statValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 4,
  },
  statValuePrimary: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006d32',
    marginRight: 4,
  },
  statValueSecondary: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0b1c30',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0b1c30',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6c7b6c',
    marginTop: 4,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#006d32',
  },
  horizontalScroll: {
    paddingLeft: 24,
    marginBottom: 32,
  },
  card: {
    width: 250,
    backgroundColor: '#eff4ff',
    borderRadius: 16,
    padding: 24,
    marginRight: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0b1c30',
  },
  cardMetrics: {
    marginTop: 12,
  },
  cardMetricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardMetricLabel: {
    fontSize: 13,
    color: '#6c7b6c',
  },
  cardMetricValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0b1c30',
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#d3e4fe',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  insightsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  insightCardPrimary: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#e5eeff',
  },
  insightTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0b1c30',
  },
  insightText: {
    fontSize: 14,
    color: '#6c7b6c',
    marginTop: 8,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#006d32',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  insightCardSecondary: {
    backgroundColor: '#0059bb',
    borderRadius: 16,
    padding: 24,
  },
  insightTitleSecondary: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  insightTextSecondary: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 8,
  },
  insightStatus: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 24,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(248, 249, 255, 0.95)',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5eeff',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#6c7b6c',
    marginTop: 4,
    letterSpacing: 1,
  },
});