# Fix Discoloration
sudo raspi-gpio set 7 a2
sudo raspi-gpio set 8 a2

# Build App
USE_SYSTEM_FPM=true ./node_modules/.bin/electron-builder --linux --armv7l
./node_modules/.bin/electron-builder --prepackaged ./dist/linux-armv7l-unpacked/ --armv7l
./temp-monitor-client-1.0.0-armv7l.AppImage