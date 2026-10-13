export interface Guide {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  publishedAt: string;
  content: string;
}

export const guides: Guide[] = [
  {
    id: "esp32-vs-stm32",
    slug: "esp32-vs-stm32",
    title: "ESP32 vs STM32: Choosing the Right Microcontroller",
    category: "Microcontrollers",
    excerpt:
      "A practical comparison of Espressif ESP32 and STMicroelectronics STM32 families — covering connectivity, performance, development ecosystem, and ideal use cases.",
    readTime: "8 min read",
    difficulty: "Beginner",
    tags: ["ESP32", "STM32", "Microcontrollers", "Embedded Systems"],
    publishedAt: "2026-10-01",
    content: `
## Overview

Choosing between ESP32 and STM32 is one of the most common decisions in embedded systems design. Both are capable platforms, but they target different strengths.

## ESP32 — Connectivity First

The ESP32 (Espressif Systems) integrates Wi-Fi and Bluetooth on-chip, making it the natural choice for IoT applications. The dual-core Xtensa LX6 running at up to 240 MHz offers solid performance for wireless applications.

**Best for:**
- Wi-Fi connected sensors
- MQTT IoT nodes
- BLE peripherals
- Rapid prototyping

## STM32 — Precision and Control

STM32 (STMicroelectronics) is a broad family of ARM Cortex-M microcontrollers ranging from the M0 (STM32F0) to the M7 (STM32H7). They excel in deterministic real-time control, rich peripheral sets, and low-power applications.

**Best for:**
- Motor control
- Industrial automation
- USB device applications
- Signal processing (with FPU)

## Comparison Table

| Feature | ESP32 | STM32F4 |
|---------|-------|---------|
| Core | Xtensa LX6 (dual) | ARM Cortex-M4F |
| Max Clock | 240 MHz | 180 MHz |
| Wi-Fi | Built-in | External module |
| Bluetooth | Built-in BLE | External module |
| Flash | 4–16 MB | 512 KB–2 MB |
| RTOS Support | FreeRTOS | FreeRTOS, Azure RTOS |
| Development | Arduino, ESP-IDF | HAL, LL, CubeMX |

## Conclusion

Use **ESP32** when you need wireless connectivity out of the box. Use **STM32** when you need deterministic real-time control, a wider peripheral range, or professional-grade development tools.
    `,
  },
  {
    id: "ina219-power-sensor",
    slug: "ina219-power-sensor",
    title: "How the INA219 Power Sensor Works",
    category: "Sensors",
    excerpt:
      "A deep-dive into the INA219 current and power monitor IC — explaining shunt resistor measurement, I2C communication, register layout, and practical wiring.",
    readTime: "10 min read",
    difficulty: "Intermediate",
    tags: ["INA219", "Sensors", "I2C", "Power Monitoring"],
    publishedAt: "2026-10-05",
    content: `
## Introduction

The INA219 from Texas Instruments is a versatile power monitoring IC used widely in battery management, energy logging, and embedded power measurement.

## How It Works

The INA219 measures voltage across a shunt resistor (typically 0.1Ω on breakout modules) to calculate current flow. It also measures the bus voltage directly.

**Key measurements:**
- Shunt voltage (Vshunt = I × Rshunt)
- Bus voltage (V_bus)
- Current (derived: I = Vshunt / Rshunt)
- Power (P = V_bus × I)

## I2C Interface

The INA219 communicates via I2C with up to 4 selectable addresses (A0/A1 pins):

| A1 | A0 | Address |
|----|----|---------| 
| GND | GND | 0x40 |
| GND | VS  | 0x41 |
| VS  | GND | 0x44 |
| VS  | VS  | 0x45 |

## Basic Wiring (ESP32)

\`\`\`
INA219 VCC → 3.3V
INA219 GND → GND
INA219 SDA → GPIO 21 (ESP32)
INA219 SCL → GPIO 22 (ESP32)
Load+ → V+
Load- → V-
\`\`\`

## Arduino / ESP32 Code Example

\`\`\`cpp
#include <Wire.h>
#include <Adafruit_INA219.h>

Adafruit_INA219 ina219;

void setup() {
  Serial.begin(115200);
  ina219.begin();
}

void loop() {
  float current_mA = ina219.getCurrent_mA();
  float voltage_V  = ina219.getBusVoltage_V();
  float power_mW   = ina219.getPower_mW();

  Serial.printf("Voltage: %.2f V | Current: %.2f mA | Power: %.2f mW\\n",
    voltage_V, current_mA, power_mW);
  delay(500);
}
\`\`\`

## Accuracy Notes

The INA219 offers ±1% typical accuracy. For high-precision measurements, use a precision shunt resistor and compensate for temperature drift.
    `,
  },
  {
    id: "intro-to-mqtt",
    slug: "intro-to-mqtt",
    title: "Introduction to MQTT for IoT Projects",
    category: "Connectivity",
    excerpt:
      "Learn how the MQTT publish-subscribe protocol works, how to set up a broker, and how to connect ESP32 devices to cloud dashboards.",
    readTime: "9 min read",
    difficulty: "Beginner",
    tags: ["MQTT", "IoT", "ESP32", "Networking"],
    publishedAt: "2026-10-08",
    content: `
## What is MQTT?

MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol designed for constrained devices and low-bandwidth networks. It is the de facto standard for IoT communication.

## Core Concepts

- **Broker** — Central server that receives and routes messages (e.g., Mosquitto, HiveMQ)
- **Publisher** — Device that sends data to a topic
- **Subscriber** — Device that listens to a topic
- **Topic** — Hierarchical string identifier (e.g., \`sensors/room1/temperature\`)
- **QoS** — Quality of service levels (0, 1, 2)

## Setting Up a Local Broker (Mosquitto)

\`\`\`bash
# Install on Ubuntu/Debian
sudo apt install mosquitto mosquitto-clients

# Test publish
mosquitto_pub -t test/topic -m "Hello MATRYNEX"

# Test subscribe
mosquitto_sub -t test/topic
\`\`\`

## ESP32 MQTT Example

\`\`\`cpp
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid     = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";
const char* broker   = "192.168.1.100";

WiFiClient   espClient;
PubSubClient client(espClient);

void setup() {
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);

  client.setServer(broker, 1883);
  client.connect("ESP32Client");
  client.publish("sensors/esp32/status", "online");
}

void loop() {
  client.loop();
  // Publish sensor reading every 5 seconds
  static unsigned long last = 0;
  if (millis() - last > 5000) {
    last = millis();
    client.publish("sensors/esp32/temperature", "25.3");
  }
}
\`\`\`

## Cloud Options

For production IoT deployments, consider HiveMQ Cloud, AWS IoT Core, or EMQX Cloud as managed MQTT brokers.
    `,
  },
  {
    id: "embedded-systems-fundamentals",
    slug: "embedded-systems-fundamentals",
    title: "Embedded Systems Fundamentals",
    category: "Education",
    excerpt:
      "A foundational guide covering what embedded systems are, key concepts like interrupts and memory maps, and how to start your first project.",
    readTime: "12 min read",
    difficulty: "Beginner",
    tags: ["Embedded Systems", "Education", "Microcontrollers", "Firmware"],
    publishedAt: "2026-09-20",
    content: `
## What is an Embedded System?

An embedded system is a dedicated computing system designed to perform one or more specific functions within a larger device. Unlike a general-purpose computer, it operates with constrained resources and strict real-time requirements.

## Key Concepts

### Microcontroller vs Microprocessor

A **microcontroller** (MCU) integrates CPU, RAM, Flash, and peripherals on a single chip. A **microprocessor** is just the CPU core — it needs external memory and peripherals.

### Memory Architecture

- **Flash** — Non-volatile program storage
- **SRAM** — Volatile working memory (stack, heap, variables)
- **EEPROM** — Non-volatile data storage (configuration, calibration)

### Interrupts

Interrupts allow the CPU to respond to events without polling. Common interrupt sources:
- GPIO pin change
- Timer overflow
- UART receive
- I2C transaction complete

### Peripheral Buses

| Bus | Speed | Wires | Use Case |
|-----|-------|-------|----------|
| I2C | 400 kHz (fast) | 2 | Sensors, displays |
| SPI | 10+ MHz | 4 | Fast ADC, SD cards |
| UART | Variable | 2 | Debug, GPS, BT |
| CAN | 1 Mbps | 2 | Automotive, industrial |

## Getting Started

1. Choose your MCU (ESP32 for IoT, STM32 for control)
2. Install the toolchain (Arduino IDE, PlatformIO, or STM32CubeIDE)
3. Write a blink LED program to verify your setup
4. Learn peripheral configuration progressively
    `,
  },
  {
    id: "selecting-components",
    slug: "selecting-components",
    title: "Selecting Components for Your Electronics Project",
    category: "Design",
    excerpt:
      "A systematic approach to choosing the right sensors, MCUs, regulators, and communication modules for your embedded project requirements.",
    readTime: "7 min read",
    difficulty: "Beginner",
    tags: ["Components", "Design", "Engineering", "Embedded Systems"],
    publishedAt: "2026-09-28",
    content: `
## Define Your Requirements First

Before searching for components, define:

1. **Power supply** — Battery or mains? Voltage? Current budget?
2. **Processing requirements** — Simple logic or complex computation?
3. **Connectivity** — Wi-Fi, BLE, LoRa, wired?
4. **Sensors needed** — Temperature, current, GPS, IMU?
5. **Form factor** — Prototype, enclosure, miniaturised PCB?

## MCU Selection Criteria

| Requirement | Recommended MCU |
|-------------|----------------|
| Wi-Fi IoT | ESP32 |
| BLE only | ESP32-C3, nRF52840 |
| Real-time control | STM32F4, STM32G4 |
| Ultra-low power | STM32L4, ESP32-S2 |
| Beginner friendly | Arduino Uno, ESP32 |

## Sensor Selection

Consider:
- **Interface** — I2C is easiest; SPI is fastest
- **Accuracy** — Match to your application (±0.5°C vs ±2°C)
- **Supply voltage** — 3.3V or 5V tolerance?
- **Library support** — Is there a well-maintained Arduino/ESP-IDF library?

## Power Supply Design

- Choose LDO (AMS1117, LD1117) for low current, low noise applications
- Choose switching regulators (LM2596, MP2307) for efficiency at higher currents
- Always add decoupling capacitors (100nF) near every IC VCC pin

## Documentation Checklist

Before ordering:
- [ ] Read the datasheet
- [ ] Check operating voltage ranges
- [ ] Verify maximum current ratings
- [ ] Check package availability for your PCB
    `,
  },
  {
    id: "pcb-design-basics",
    slug: "pcb-design-basics",
    title: "PCB Design Basics: From Schematic to Board",
    category: "PCB Design",
    excerpt:
      "Learn the fundamental workflow of PCB design — capturing schematics, placing components, routing traces, and preparing Gerber files for fabrication.",
    readTime: "11 min read",
    difficulty: "Intermediate",
    tags: ["PCB Design", "KiCad", "EasyEDA", "Hardware"],
    publishedAt: "2026-10-10",
    content: `
## PCB Design Workflow

1. **Schematic Capture** — Draw the electrical connections
2. **Component Selection** — Choose footprints matching physical components
3. **Board Layout** — Place components on the PCB canvas
4. **Routing** — Draw copper traces between pads
5. **Design Rule Check (DRC)** — Verify no violations
6. **Gerber Export** — Generate manufacturing files
7. **Send to Fab** — Upload to PCBWay, JLCPCB, OSH Park

## Recommended Free Tools

| Tool | Best For |
|------|----------|
| KiCad 7 | Professional open-source PCB design |
| EasyEDA | Online, integrated with JLCPCB |
| Fritzing | Beginners (limited capability) |

## Key Design Rules (2-Layer Prototype)

- **Minimum trace width:** 0.2 mm (0.3 mm recommended for power)
- **Minimum clearance:** 0.2 mm between conductors
- **Via drill:** 0.3 mm minimum
- **Copper pour:** Add GND pour on both layers for cleaner return paths

## Decoupling Capacitors

Place 100nF ceramic capacitors as close as possible to every IC VCC pin. They suppress high-frequency switching noise.

## Ground Plane

Use a continuous ground copper pour on the bottom layer. This reduces EMI, lowers impedance, and simplifies routing.

## Before You Send to Fab

- Run DRC — fix all errors
- Check component footprints against physical dimensions
- Verify board outline (Edge.Cuts layer in KiCad)
- Review 3D view to catch obvious placement errors
- Double-check polarity on diodes and electrolytic capacitors
    `,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
