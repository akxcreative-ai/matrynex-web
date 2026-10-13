export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: "completed" | "in-development" | "concept";
  overview: string;
  objectives: string[];
  hardware: string[];
  specs: Record<string, string>;
  relatedProductSlugs: string[];
  tags: string[];
  publishedAt: string;
}

export const projects: Project[] = [
  {
    id: "powersense-v1",
    slug: "powersense-v1",
    title: "MATRYNEX PowerSense v1",
    subtitle: "Low-Voltage DC Power Monitor",
    status: "in-development",
    overview:
      "PowerSense v1 is a compact DC power monitoring module under active development. It uses the INA219 current/voltage sensor over I2C to measure voltage (0–26V), current, and power in real time. The primary use case is battery management and energy tracking in embedded systems and solar/battery projects. Data is displayed on a local OLED screen and optionally transmitted over UART or MQTT.",
    objectives: [
      "Measure DC bus voltage with ±0.5% accuracy",
      "Monitor bidirectional current flow using INA219 shunt measurement",
      "Calculate and log real-time power consumption",
      "Display readings on a 128×32 SSD1306 OLED",
      "Transmit data via UART for serial logging",
      "Future: MQTT reporting over Wi-Fi via ESP32",
    ],
    hardware: [
      "INA219 current/voltage sensor module",
      "ESP32-WROOM-32 development board",
      "SSD1306 0.91-inch OLED display (128×32)",
      "0.1Ω precision shunt resistor (on INA219 module)",
      "Breadboard or custom PCB",
      "3.3V power supply",
    ],
    specs: {
      "Voltage Measurement Range": "0 – 26 V (INA219 bus voltage)",
      "Current Measurement Range": "±3.2 A (with 0.1Ω shunt)",
      "Interface (Sensor)": "I2C (address 0x40)",
      MCU: "ESP32-WROOM-32",
      Display: "SSD1306 OLED 128×32",
      "Supply Voltage": "3.3 V (USB 5V → LDO)",
      "Sampling Rate": "~10 Hz (software-limited)",
    },
    relatedProductSlugs: ["ina219-sensor", "esp32-wroom-32"],
    tags: ["INA219", "ESP32", "Power Monitoring", "I2C", "OLED"],
    publishedAt: "2026-10-01",
  },
  {
    id: "iot-telemetry-system",
    slug: "iot-telemetry-system",
    title: "IoT Telemetry System",
    subtitle: "Remote Sensor Dashboard",
    status: "concept",
    overview:
      "This is a conceptual IoT telemetry architecture for collecting environmental sensor data (temperature, humidity, pressure) and forwarding it to a remote dashboard via MQTT over Wi-Fi. The design targets battery-powered sensor nodes that report periodically to a central broker and web dashboard. This project is in early concept phase and has not been physically built or tested.",
    objectives: [
      "Design a low-power sensor node using ESP32 deep-sleep",
      "Collect temperature and humidity data using DHT22 or SHT31",
      "Transmit data to a local Mosquitto MQTT broker",
      "Visualise data on a Grafana or Node-RED dashboard",
      "Achieve >72 hours battery life per charge (target, unverified)",
    ],
    hardware: [
      "ESP32-WROOM-32 or ESP32-S3 development board",
      "DHT22 or SHT31 temperature/humidity sensor",
      "3.7V LiPo battery (capacity TBD)",
      "TP4056 LiPo charging module",
      "Raspberry Pi or cloud server for MQTT broker",
    ],
    specs: {
      "Sensor Interface": "Single-wire (DHT22) or I2C (SHT31)",
      "Communication Protocol": "MQTT over Wi-Fi 802.11n",
      "Target Sleep Current": "<10 µA (deep sleep mode, target — unverified)",
      "Reporting Interval": "60 seconds (configurable)",
      "Data Visualisation": "Grafana / Node-RED (planned)",
    },
    relatedProductSlugs: ["esp32-wroom-32", "dht22-sensor", "sht31-sensor"],
    tags: ["MQTT", "IoT", "DHT22", "SHT31", "ESP32", "Dashboard"],
    publishedAt: "2026-10-05",
  },
  {
    id: "embedded-controller-suite",
    slug: "embedded-controller-suite",
    title: "Embedded Controller Suite",
    subtitle: "STM32 & ESP32 Firmware Experiments",
    status: "concept",
    overview:
      "A planned collection of reusable firmware modules and hardware experiments targeting STM32 and ESP32 platforms. This project will document practical bare-metal and HAL-level peripheral control — covering GPIO, timers, ADC, SPI, I2C, UART, PWM, and DMA. All firmware will be versioned on GitHub. This is a conceptual roadmap — individual modules will be developed and documented as engineering time allows.",
    objectives: [
      "Develop reusable peripheral driver templates for STM32 HAL",
      "Explore FreeRTOS task management on STM32F4",
      "Implement PWM-controlled MOSFET switching for DC loads",
      "Build an ADC data acquisition example with DMA",
      "Create a bare-metal UART logger for debug output",
    ],
    hardware: [
      "STM32F103C8T6 Blue Pill",
      "STM32F411 Black Pill",
      "ESP32-WROOM-32 dev board",
      "Logic analyser for protocol debugging",
      "Oscilloscope for signal verification",
    ],
    specs: {
      "Target MCUs": "STM32F103, STM32F411, ESP32",
      Toolchain: "STM32CubeIDE, PlatformIO",
      RTOS: "FreeRTOS (planned)",
      "Code Repository": "GitHub (placeholder — not yet published)",
    },
    relatedProductSlugs: [
      "stm32f103c8t6-blue-pill",
      "stm32f411-black-pill",
      "esp32-wroom-32",
      "irf540n-mosfet",
    ],
    tags: ["STM32", "ESP32", "Firmware", "FreeRTOS", "Bare-metal"],
    publishedAt: "2026-10-08",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
