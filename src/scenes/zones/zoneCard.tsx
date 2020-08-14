import { Text, View } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

import { TopNavigation,TopNavigationAction } from '@ui-kitten/components';

import { MenuIcon } from '../../components/icons';
const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: 'black',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: 'green',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: 'blue',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: 'red',
      },
    ],
  },
];
const beautifyNumber = (num) => {
  if (!isNaN(Number(num))) {
    num = Number(num);
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num);
  } else {
    return num;
  }
};
const CustomMarker = (props) => {
  const { analysis } = props.data;
  return (
    <View style={analysis.stylo}>
      <Text style={{ color: '#FFF' }}></Text>
    </View>
  );
};
const CurrentLocationMarker = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View
      style={{
        height: 20,
        width: 20,
        borderRadius: 20 / 2,
        backgroundColor: 'white',
        elevation: 5,
      }}>
      <View
        style={{
          height: 15,
          width: 15,
          paddingVertical: 0,
          paddingHorizontal: 0,
          backgroundColor: '#2BABF7',
          borderColor: '#2BABF7',
          borderRadius: 15 / 2,
          marginTop: 2.5,
          marginLeft: 2.5,
          opacity: 1,
        }}>
        <Text style={{ color: '#FFF' }}></Text>
      </View>
    </View>
  </View>
);
const MarkerMan = (props) => {
  const { zone, zoneGpsCode, cases } = props.data;
  const { latitude, longitude } = zoneGpsCode;
  const shake = aAyusAnalyser(props.data);
  return (
    <Marker coordinate={{ latitude: latitude, longitude: longitude }}>
      <CustomMarker data={shake} />
      <Callout style={{ width: 90 }}>
        <View
          style={
            {
              // backgroundColor: '#90e0ef',
              // flexDirection: 'row',
              // alignItems: 'center',
            }
          }>
          <Text
            style={{
              color: '#353535',
            }}>
            {zone}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>
            Cases: {beautifyNumber(cases.ActiveCount)}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>
            Recover: {beautifyNumber(cases.RecoverCount)}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>
            Testing: {beautifyNumber(cases.TestingCount)}
          </Text>
        </View>
      </Callout>
    </Marker>
  );
};
const aAyusAnalyser = (data) => {
  let tupple = { ...data },
    analysis = {type:'',colorCode:'',score:0,density:0,mortalityRate:0,safetyGaurd:0,recoveryRate:0,stylo:{}},
    stylo = {
      width: 20,
      height: 20,
      backgroundColor: '#FF1600',
      borderColor: '#FF1600',
      borderRadius: 10,
      elevation: 10,
      opacity: 0.3,
    };
  let { cases } = tupple;
  let {
    TotalCount,
    DeathCount,
    ActiveCount,
    RecoverCount,
    TestingCount,
    ApxPopulationCount,
  } = cases;
  const Grammer = {
    Danger: {
      threshold: 60,
      color: '#FC0003',
    },
    SemiDanger: {
      threshold: 25,
      color: '#FF7B00',
    },
    Warning: {
      threshold: 1,
      color: '#FFC800',
    },
    Safe: {
      threshold: 0,
      color: '#72BB0F',
    },
  };
  TotalCount = Number(TotalCount);
  DeathCount = Number(DeathCount);
  ActiveCount = Number(ActiveCount);
  RecoverCount = Number(RecoverCount);
  ApxPopulationCount = Number(ApxPopulationCount);
  TotalCount = DeathCount + ActiveCount + RecoverCount;
  //This algo based upon calculating a score for a particular zone.
  let density = ((DeathCount + ActiveCount) / TotalCount) * 100;
  let mortalityRate = (DeathCount / TotalCount) * 100;
  let safetyGaurd = ((TestingCount - TotalCount) / ApxPopulationCount) * 100;
  let recoveryRate = (RecoverCount / TotalCount) * 100;
  let score = 0;
  score += density > recoveryRate ? 20 : 10;
  score += mortalityRate > recoveryRate ? 10 : 5;
  score += safetyGaurd > 0.01 ? 40 : 5;
  score += recoveryRate > density ? 15 : 5;
  
  for (let key in Grammer) {
    if (density >= Grammer[key].threshold) {
      analysis.type = key;
      analysis.colorCode = Grammer[key].color;
      stylo.backgroundColor = Grammer[key].color;
      stylo.width += score;
      stylo.height += score;
      stylo.borderRadius = stylo.width / 2;
      stylo.opacity += stylo.borderRadius / 100;
      break;
    }
  }
  analysis.score = score;
  analysis.density = density;
  analysis.mortalityRate = mortalityRate;
  analysis.safetyGaurd = safetyGaurd;
  analysis.recoveryRate = recoveryRate;
  analysis.stylo = stylo;
  tupple = { ...tupple, analysis };
  return { ...tupple };
};

const ZoneCard = ({navigation}) => {
    const renderDrawerAction = (): React.ReactElement => (
        <TopNavigationAction
          icon={MenuIcon}
          onPress={navigation.toggleDrawer}
        />
      );
  const [region, setRegion] = React.useState({
    latitude: 28.656473,
    longitude: 77.242943,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [db, setdb] = React.useState({
    zones: [
      {
        zoneId: 'zone1',
        zone: 'Noida',
        zoneGpsCode: {
          latitude: 28.5355,
          longitude: 77.391,
        },
        cases: {
          DeathCount: '3000',
          ActiveCount: '10000',
          RecoverCount: '2000',
          TestingCount: '20000',
          TotalCount: '15000',
          ApxPopulationCount: '30000000',
        },
      },
      {
        zoneId: 'zone2',
        zoneGpsCode: {
          latitude: 28.651952,
          longitude: 77.231495,
        },
        zone: 'Delhi',
        cases: {
          DeathCount: '3000',
          ActiveCount: '50000',
          RecoverCount: '2000',
          TestingCount: '1000000',
          TotalCount: '55000',
          ApxPopulationCount: '50000000',
        },
      },
      {
        zoneId: 'zone3',
        zoneGpsCode: {
          latitude: 28.457523,
          longitude: 77.026344,
        },
        zone: 'Gurugram',
        cases: {
          DeathCount: '3000',
          ActiveCount: '60000',
          RecoverCount: '12000',
          TestingCount: '10000',
          TotalCount: '750000',
          ApxPopulationCount: '120000000',
        },
      },
      {
        zoneId: 'zone4',
        zoneGpsCode: {
          latitude: 28.984644,
          longitude: 77.705956,
        },
        zone: 'Meerut',
        cases: {
          DeathCount: '0',
          ActiveCount: '0',
          RecoverCount: '300',
          TestingCount: '10000',
          TotalCount: '300',
          ApxPopulationCount: '20000000',
        },
      },
      {
        zoneId: 'zone5',
        zoneGpsCode: {
          latitude: 28.55616,
          longitude: 77.100281,
        },
        zone: 'Indra gandhi international airport',
        cases: {
          DeathCount: '20000',
          ActiveCount: '40000',
          RecoverCount: '2000',
          TestingCount: '15000',
          TotalCount: '62000',
          ApxPopulationCount: '6000000',
        },
      },
      {
        zoneId: 'zone6',
        zoneGpsCode: {
          latitude: 28.656,
          longitude: 77.231,
        },
        zone: 'Chandni chowk',
        cases: {
          DeathCount: '500',
          ActiveCount: '1000',
          RecoverCount: '98500',
          TestingCount: '120000',
          TotalCount: '100000',
          ApxPopulationCount: '8500000',
        },
      },
      {
        zoneId: 'zone7',
        zoneGpsCode: {
          latitude: 28.6675,
          longitude: 77.228,
        },
        zone: 'kashmiri gate',
        cases: {
          TotalCount: '30',
          DeathCount: '2',
          ActiveCount: '13',
          RecoverCount: '15',
          TestingCount: '10000',
          ApxPopulationCount: '9000000',
        },
      },
      {
        zoneId: 'zone9',
        zoneGpsCode: {
          latitude: 28.6314512,
          longitude: 77.21666720000007,
        },
        zone: 'Connaught Place',
        cases: {
          DeathCount: '10',
          ActiveCount: '90',
          RecoverCount: '50',
          TestingCount: '10000',
          TotalCount: '150',
          ApxPopulationCount: '5000000',
        },
      },
    ],
  });
  const MarkerList = () => {
    return (
      <View>
        {db.zones.map((zone,i) => {
          return <MarkerMan key={i} data={zone} />;
        })}
      </View>
    );
  };
  return (
    <>
    <TopNavigation
    title='Aayush Covid Care'
    leftControl={renderDrawerAction()}
  />
    <View style={{ marginTop: 0, marginBottom: 0, height: '100%' }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType="standard"
        style={{ flex: 1 }}
        customMapStyle={mapStyle}
        region={region}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}>
        <Marker coordinate={region}>
          <CurrentLocationMarker />
        </Marker>
        <MarkerList />
      </MapView>
    </View>
    </>
  );
};

export default ZoneCard;
