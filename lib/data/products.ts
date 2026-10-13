export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  specs: Record<string, string>;
  imagePlaceholder: string;
  datasheetUrl?: string;
  manufacturer: string;
  supplier: string;
  price?: number;
  currency?: string;
  priceVerified: boolean;
  externalUrl: string;
  affiliateUrl?: string;
  availability: "in-stock" | "check-supplier" | "discontinued";
}

export const PRODUCT_CATEGORIES = [
  "All",
  "Microcontrollers",
  "Sensors",
  "Communication",
  "Power Electronics",
  "PCB & Tools",
] as const;

export const products: Product[] = [
  {
    id: "esp32-wroom-32",
    name: "ESP32-WROOM-32 Dev Board",
    slug: "esp32-wroom-32",
    category: "Microcontrollers",
    shortDescription: "Dual-core Xtensa LX6, Wi-Fi & Bluetooth, 4MB flash",
    description:
      "The ESP32-WROOM-32 is a powerful, generic Wi-Fi+BT+BLE MCU module that targets a wide variety of applications, ranging from low-power sensor networks to the most demanding tasks. Dual-core Xtensa LX6 clocked at up to 240 MHz with integrated Wi-Fi and Bluetooth makes it ideal for IoT prototyping and embedded systems.",
    specs: {
      CPU: "Dual-core Xtensa LX6, up to 240 MHz",
      "Flash Memory": "4 MB",
      RAM: "520 KB SRAM",
      Wireless: "802.11 b/g/n Wi-Fi + Bluetooth 4.2 / BLE",
      GPIO: "34 programmable GPIO pins",
      "Operating Voltage": "3.3 V (USB 5V input via LDO)",
      "USB Interface": "Micro-USB (CP2102 / CH340 depending on variant)",
      Dimensions: "~51.4 × 28.6 mm (typical dev board)",
    },
    imagePlaceholder: "#1a3a5c",
    datasheetUrl:
      "https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf",
    manufacturer: "Espressif Systems",
    supplier: "Various (AliExpress, Amazon, Mouser, DigiKey)",
    price: 4.99,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-esp32-wroom-32",
    availability: "check-supplier",
  },
  {
    id: "esp32-s3-devkitc",
    name: "ESP32-S3-DevKitC-1",
    slug: "esp32-s3-devkitc",
    category: "Microcontrollers",
    shortDescription: "Dual-core Xtensa LX7, USB-OTG, AI acceleration",
    description:
      "The ESP32-S3-DevKitC-1 is Espressif's latest-generation development board featuring the ESP32-S3 SoC. It adds AI acceleration instructions, native USB-OTG support, larger memory, and more GPIO than the original ESP32. Ideal for machine learning at the edge, USB HID devices, and advanced IoT projects.",
    specs: {
      CPU: "Dual-core Xtensa LX7, up to 240 MHz",
      "Flash Memory": "8 MB / 16 MB (variant dependent)",
      PSRAM: "8 MB PSRAM (N8R8 variant)",
      Wireless: "802.11 b/g/n Wi-Fi + Bluetooth 5 (LE)",
      GPIO: "45 programmable GPIO",
      "USB Support": "USB-OTG / USB Serial/JTAG",
      "AI Features": "Vector instructions for neural network inference",
      "Operating Voltage": "3.3 V",
    },
    imagePlaceholder: "#1a4a6a",
    datasheetUrl:
      "https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf",
    manufacturer: "Espressif Systems",
    supplier: "Various (Mouser, DigiKey, AliExpress)",
    price: 7.99,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-esp32-s3-devkitc",
    availability: "check-supplier",
  },
  {
    id: "stm32f103c8t6-blue-pill",
    name: "STM32F103C8T6 Blue Pill",
    slug: "stm32f103c8t6-blue-pill",
    category: "Microcontrollers",
    shortDescription: "ARM Cortex-M3, 72 MHz, 64KB flash, ultra-low-cost",
    description:
      "The STM32F103C8T6 'Blue Pill' is one of the most popular entry points into ARM Cortex-M microcontrollers. Running at 72 MHz with a rich peripheral set including SPI, I2C, USART, CAN, and USB, it offers exceptional performance per dollar. Widely used in embedded systems prototyping and custom firmware development.",
    specs: {
      CPU: "ARM Cortex-M3, 72 MHz",
      "Flash Memory": "64 KB",
      SRAM: "20 KB",
      Peripherals: "SPI, I2C, USART, CAN, USB 2.0 (full speed)",
      ADC: "12-bit ADC, 10 channels",
      "Operating Voltage": "2.0 – 3.6 V",
      GPIO: "37 general-purpose I/O pins",
      Timers: "3x 16-bit timers, 1x 24-bit SysTick",
    },
    imagePlaceholder: "#1a2a4a",
    datasheetUrl:
      "https://www.st.com/resource/en/datasheet/stm32f103c8.pdf",
    manufacturer: "STMicroelectronics",
    supplier: "Various (AliExpress, Amazon, Mouser)",
    price: 3.49,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-stm32f103c8t6-blue-pill",
    availability: "check-supplier",
  },
  {
    id: "stm32f411-black-pill",
    name: "STM32F411 Black Pill",
    slug: "stm32f411-black-pill",
    category: "Microcontrollers",
    shortDescription: "ARM Cortex-M4F, 100 MHz, USB-C, FPU, 512KB flash",
    description:
      "The STM32F411 'Black Pill' upgrades the classic Blue Pill form-factor with a more powerful Cortex-M4F core featuring hardware floating-point, running at 100 MHz with 512 KB flash and native USB-C. Popular for signal processing, advanced control systems, and projects requiring FPU performance.",
    specs: {
      CPU: "ARM Cortex-M4F, 100 MHz (FPU)",
      "Flash Memory": "512 KB",
      SRAM: "128 KB",
      USB: "USB 2.0 Full Speed (USB-C connector)",
      "Clock Source": "External 25 MHz crystal",
      ADC: "12-bit, up to 16 channels",
      "Operating Voltage": "1.7 – 3.6 V",
      GPIO: "50 GPIO pins",
    },
    imagePlaceholder: "#0d1a2e",
    datasheetUrl:
      "https://www.st.com/resource/en/datasheet/stm32f411ce.pdf",
    manufacturer: "STMicroelectronics",
    supplier: "WeAct Studio (primary), AliExpress",
    price: 5.99,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-stm32f411-black-pill",
    availability: "check-supplier",
  },
  {
    id: "arduino-uno-r3",
    name: "Arduino Uno R3",
    slug: "arduino-uno-r3",
    category: "Microcontrollers",
    shortDescription: "ATmega328P, 16 MHz, beginner-friendly prototyping board",
    description:
      "The Arduino Uno R3 is the world's most popular open-source microcontroller board. Based on the ATmega328P running at 16 MHz, it provides 14 digital I/O pins and 6 analog inputs. The extensive library ecosystem and beginner-friendly IDE make it the standard starting point for electronics education and prototyping.",
    specs: {
      Microcontroller: "ATmega328P",
      "Clock Speed": "16 MHz",
      "Flash Memory": "32 KB (0.5 KB used by bootloader)",
      SRAM: "2 KB",
      EEPROM: "1 KB",
      "Digital I/O": "14 pins (6 PWM outputs)",
      "Analog Inputs": "6 pins (10-bit ADC)",
      "Input Voltage": "7 – 12 V (recommended)",
    },
    imagePlaceholder: "#0f3a1a",
    datasheetUrl:
      "https://store.arduino.cc/products/arduino-uno-rev3",
    manufacturer: "Arduino",
    supplier: "Arduino Official, Amazon, element14",
    price: 22.0,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-arduino-uno-r3",
    availability: "check-supplier",
  },
  {
    id: "ina219-sensor",
    name: "INA219 Current/Voltage Sensor Module",
    slug: "ina219-sensor",
    category: "Sensors",
    shortDescription: "I2C power monitor, ±3.2A current, 0–26V voltage",
    description:
      "The INA219 is a high-side current and power monitor with an I2C interface. It measures both shunt voltage drop and bus supply voltage, reporting current, voltage, and calculated power. Operates from 3V to 5.5V and requires only 2 wires for communication. Used in battery management, power monitoring, and energy measurement projects.",
    specs: {
      Interface: "I2C (4 selectable addresses)",
      "Voltage Range": "0 to 26 V (bus voltage)",
      "Current Range": "±3.2 A (with 0.1Ω shunt on module)",
      Resolution: "12-bit ADC",
      "Supply Voltage": "3.0 V to 5.5 V",
      Accuracy: "±1% (typical)",
      Package: "SOT-23-8 (on breakout PCB)",
      "I2C Addresses": "0x40, 0x41, 0x44, 0x45",
    },
    imagePlaceholder: "#2a1a3a",
    datasheetUrl:
      "https://www.ti.com/lit/ds/symlink/ina219.pdf",
    manufacturer: "Texas Instruments",
    supplier: "Various (AliExpress, Amazon, Adafruit)",
    price: 1.99,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-ina219-sensor",
    availability: "check-supplier",
  },
  {
    id: "dht22-sensor",
    name: "DHT22 Temperature & Humidity Sensor",
    slug: "dht22-sensor",
    category: "Sensors",
    shortDescription: "±0.5°C accuracy, 0–100% RH, single-wire digital output",
    description:
      "The DHT22 (AM2302) is a calibrated digital temperature and humidity sensor with a single-wire serial interface. It delivers higher accuracy and a wider measurement range than the DHT11, making it suitable for weather stations, HVAC monitoring, and environmental control systems.",
    specs: {
      "Temperature Range": "-40°C to +80°C",
      "Temperature Accuracy": "±0.5°C",
      "Humidity Range": "0 – 100% RH",
      "Humidity Accuracy": "±2–5% RH",
      Interface: "Single-wire digital (custom protocol)",
      "Supply Voltage": "3.3 V to 6 V",
      "Sampling Rate": "0.5 Hz (one reading per 2 seconds)",
      "Output Format": "40-bit serial (16b humidity + 16b temp + 8b checksum)",
    },
    imagePlaceholder: "#1a3a2a",
    datasheetUrl:
      "https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf",
    manufacturer: "AOSONG Electronics",
    supplier: "Various (AliExpress, SparkFun, Adafruit)",
    price: 2.49,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-dht22-sensor",
    availability: "check-supplier",
  },
  {
    id: "sht31-sensor",
    name: "SHT31 Temperature & Humidity Sensor",
    slug: "sht31-sensor",
    category: "Sensors",
    shortDescription: "I2C, ±0.3°C accuracy, industrial-grade reliability",
    description:
      "The SHT31 is Sensirion's high-accuracy digital temperature and humidity sensor with I2C interface. With ±0.3°C temperature accuracy and ±2% RH humidity accuracy, it outperforms basic DHT sensors and is suitable for industrial monitoring, precision climate control, and calibrated instrumentation projects.",
    specs: {
      Interface: "I2C (2 selectable addresses)",
      "Temperature Range": "-40°C to +125°C",
      "Temperature Accuracy": "±0.3°C (typical)",
      "Humidity Range": "0 – 100% RH",
      "Humidity Accuracy": "±2% RH (typical)",
      "Supply Voltage": "2.4 V to 5.5 V",
      "Response Time": "<8 s (63% step response)",
      Package: "DFN-8 (on breakout PCB)",
    },
    imagePlaceholder: "#1a3a35",
    datasheetUrl:
      "https://sensirion.com/media/documents/213E6A3B/63A5A569/Datasheet_SHT3x_DIS.pdf",
    manufacturer: "Sensirion",
    supplier: "Adafruit, Mouser, DigiKey",
    price: 3.99,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-sht31-sensor",
    availability: "check-supplier",
  },
  {
    id: "ra-02-lora-sx1278",
    name: "Ra-02 LoRa SX1278 Module",
    slug: "ra-02-lora-sx1278",
    category: "Communication",
    shortDescription: "433 MHz LoRa, 3km+ range, SPI interface, ultra-low power",
    description:
      "The Ra-02 is a compact LoRa transceiver module based on the Semtech SX1278 chip, operating at 433 MHz. It supports spread-spectrum communication with a theoretical range of several kilometers in open areas. Ideal for IoT sensor networks, GPS trackers, remote monitoring, and long-range data links.",
    specs: {
      "RF Frequency": "433 MHz",
      Modulation: "LoRa spread-spectrum",
      "Output Power": "+20 dBm (adjustable)",
      "Receiver Sensitivity": "-148 dBm",
      "Typical Range": "3+ km (open terrain, directional antenna)",
      Interface: "SPI",
      "Supply Voltage": "3.3 V",
      "Data Rate": "0.018 – 37.5 kbps (LoRa mode)",
    },
    imagePlaceholder: "#2a1a1a",
    datasheetUrl:
      "https://www.semtech.com/products/wireless-rf/lora-connect/sx1278",
    manufacturer: "AI-Thinker / Semtech SX1278",
    supplier: "AliExpress, Banggood, Amazon",
    price: 4.99,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-ra-02-lora-sx1278",
    availability: "check-supplier",
  },
  {
    id: "neo-6m-gps",
    name: "NEO-6M GPS Module",
    slug: "neo-6m-gps",
    category: "Communication",
    shortDescription: "UART GPS receiver, 2.5m accuracy, built-in antenna",
    description:
      "The NEO-6M GPS module from u-blox is a compact, high-performance GPS receiver with a built-in ceramic patch antenna and UART interface. Provides latitude, longitude, altitude, speed, and time data via NMEA sentences. Popular for drone navigation, asset tracking, and outdoor IoT projects.",
    specs: {
      Protocol: "NMEA 0183, UBX binary",
      Interface: "UART (9600 baud default)",
      "Position Accuracy": "2.5 m CEP (horizontal)",
      "Cold Start": "<27 s (typical)",
      "Hot Start": "<1 s",
      "Operating Voltage": "3.3 V – 5 V (with onboard LDO)",
      "Tracking Channels": "50",
      "Update Rate": "Up to 5 Hz",
    },
    imagePlaceholder: "#1a2a1a",
    datasheetUrl:
      "https://www.u-blox.com/sites/default/files/products/documents/NEO-6_DataSheet_(GPS.G6-HW-09005).pdf",
    manufacturer: "u-blox",
    supplier: "AliExpress, Amazon, eBay",
    price: 6.99,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-neo-6m-gps",
    availability: "check-supplier",
  },
  {
    id: "irf540n-mosfet",
    name: "IRF540N N-Channel MOSFET",
    slug: "irf540n-mosfet",
    category: "Power Electronics",
    shortDescription: "100V, 33A, 44mΩ, TO-220, logic-level compatible",
    description:
      "The IRF540N is a popular N-channel power MOSFET in TO-220 package. With a 100V drain-source voltage rating, 33A continuous drain current, and low on-resistance of 44mΩ, it is widely used in motor drivers, DC load switching, PWM speed control, and power supply design.",
    specs: {
      "Drain-Source Voltage (Vds)": "100 V",
      "Continuous Drain Current (Id)": "33 A",
      "Gate-Source Voltage (Vgs)": "±20 V",
      "On-Resistance (Rds-on)": "44 mΩ @ Vgs=10V",
      "Gate Threshold Voltage": "2.0 – 4.0 V",
      Package: "TO-220",
      "Power Dissipation": "150 W (with heatsink)",
      Type: "N-Channel Enhancement Mode",
    },
    imagePlaceholder: "#1a1a2a",
    datasheetUrl:
      "https://www.infineon.com/dgdl/irf540npbf.pdf?fileId=5546d462533600a4015355e396cb0e05",
    manufacturer: "Infineon (IR)",
    supplier: "Mouser, DigiKey, AliExpress",
    price: 0.89,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-irf540n-mosfet",
    availability: "check-supplier",
  },
  {
    id: "lm2596-buck-converter",
    name: "LM2596 Buck Converter Module",
    slug: "lm2596-buck-converter",
    category: "Power Electronics",
    shortDescription: "Adjustable 3A step-down, 4–40V input, 1.25–37V output",
    description:
      "The LM2596-based adjustable buck converter module is a versatile step-down power supply solution. With a multi-turn potentiometer for precise voltage adjustment, it can supply up to 3A of continuous current. Useful for powering 3.3V and 5V microcontroller systems from higher voltage sources.",
    specs: {
      "Input Voltage": "4 – 40 V DC",
      "Output Voltage": "1.25 – 37 V DC (adjustable)",
      "Output Current": "3 A continuous (4A peak)",
      Efficiency: "Up to 92%",
      "Switching Frequency": "150 kHz",
      "Ripple Voltage": "30 mV (typical, at 5V/3A output)",
      "Operating Temperature": "-40°C to +85°C",
      "Module Size": "~45 × 20 × 14 mm",
    },
    imagePlaceholder: "#2a1a0a",
    datasheetUrl:
      "https://www.ti.com/lit/ds/symlink/lm2596.pdf",
    manufacturer: "Texas Instruments (LM2596 IC)",
    supplier: "AliExpress, Amazon, Banggood",
    price: 1.29,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-lm2596-buck-converter",
    availability: "check-supplier",
  },
  {
    id: "ams1117-33-regulator",
    name: "AMS1117-3.3 Voltage Regulator",
    slug: "ams1117-33-regulator",
    category: "Power Electronics",
    shortDescription: "LDO linear regulator, 1A, 4.75–12V input → 3.3V",
    description:
      "The AMS1117-3.3 is a low-dropout 3.3V linear regulator in SOT-223 package. Providing up to 1A of output current from a 4.75–12V input, it is the standard 3.3V supply solution used on most ESP8266, ESP32, and STM32 development boards. The SOT-223 package provides a thermal tab for improved heat dissipation.",
    specs: {
      "Output Voltage": "3.3 V (fixed)",
      "Input Voltage": "4.75 – 12 V",
      "Output Current": "1 A (maximum)",
      "Dropout Voltage": "~1.1 V (at full load)",
      Package: "SOT-223, TO-252",
      "Quiescent Current": "5 mA",
      "Line Regulation": "0.2% (typical)",
      "Load Regulation": "0.4% (typical)",
    },
    imagePlaceholder: "#1a0a1a",
    datasheetUrl:
      "https://www.advanced-monolithic.com/pdf/ds1117.pdf",
    manufacturer: "Advanced Monolithic Systems",
    supplier: "AliExpress, Mouser, DigiKey",
    price: 0.49,
    currency: "USD",
    priceVerified: false,
    externalUrl: "#buy-ams1117-33-regulator",
    availability: "check-supplier",
  },
  {
    id: "pcbway-10pcs-pcb",
    name: "PCB Fabrication — 10-Piece Service",
    slug: "pcbway-10pcs-pcb",
    category: "PCB & Tools",
    shortDescription: "Professional PCB manufacturing, 2-layer, 10cm × 10cm",
    description:
      "Professional PCB fabrication service for custom-designed boards. Typically includes 10 pieces of 2-layer PCBs at 10cm × 10cm size in standard green soldermask. Lead times vary by supplier. Recommended for prototype boards designed in KiCad, EasyEDA, or Altium Designer. Price varies significantly by supplier, quantity, and specifications.",
    specs: {
      Layers: "2 (standard); 4+ available at higher cost",
      "Max Size": "100 × 100 mm (standard tier)",
      "Copper Weight": "1 oz (default)",
      Soldermask: "Green (other colors available)",
      Silkscreen: "White",
      "Surface Finish": "HASL (lead-free available)",
      "Min Trace/Space": "6/6 mil",
      Quantity: "10 pieces (standard tier)",
    },
    imagePlaceholder: "#0a2a1a",
    manufacturer: "Various (PCBWay, JLCPCB, etc.)",
    supplier: "PCBWay, JLCPCB, OSH Park, Eurocircuits",
    priceVerified: false,
    externalUrl: "#buy-pcbway-10pcs-pcb",
    availability: "check-supplier",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}
