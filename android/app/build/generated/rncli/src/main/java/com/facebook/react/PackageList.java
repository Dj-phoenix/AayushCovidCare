
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainPackageConfig;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

// @react-native-community/masked-view
import org.reactnative.maskedview.RNCMaskedViewPackage;
// react-native-appearance
import io.expo.appearance.RNCAppearancePackage;
// react-native-ble-manager
import it.innove.BleManagerPackage;
// react-native-ble-plx
import com.polidea.reactnativeble.BlePackage;
// react-native-device-info
import com.learnium.RNDeviceInfo.RNDeviceInfo;
// react-native-dialogflow
import de.innfactory.apiai.RNApiAiPackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
// react-native-maps
import com.airbnb.android.react.maps.MapsPackage;
// react-native-push-notification
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-screens
import com.swmansion.rnscreens.RNScreensPackage;
// react-native-svg
import com.horcrux.svg.SvgPackage;
// react-native-voice
import com.wenkesj.voice.VoicePackage;
// react-native-webview
import com.reactnativecommunity.webview.RNCWebViewPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  private MainPackageConfig mConfig;

  public PackageList(ReactNativeHost reactNativeHost) {
    this(reactNativeHost, null);
  }

  public PackageList(Application application) {
    this(application, null);
  }

  public PackageList(ReactNativeHost reactNativeHost, MainPackageConfig config) {
    this.reactNativeHost = reactNativeHost;
    mConfig = config;
  }

  public PackageList(Application application, MainPackageConfig config) {
    this.reactNativeHost = null;
    this.application = application;
    mConfig = config;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(mConfig),
      new RNCMaskedViewPackage(),
      new RNCAppearancePackage(),
      new BleManagerPackage(),
      new BlePackage(),
      new RNDeviceInfo(),
      new RNApiAiPackage(),
      new RNGestureHandlerPackage(),
      new MapsPackage(),
      new ReactNativePushNotificationPackage(),
      new ReanimatedPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
      new SvgPackage(),
      new VoicePackage(),
      new RNCWebViewPackage()
    ));
  }
}
