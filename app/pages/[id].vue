<template>
    <div class="min-h-screen bg-dark py-12 px-4">
        <div class="max-w-4xl mx-auto">
            <!-- Back Button -->
            <button
                @click="navigateTo('/')"
                class="mb-8 text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Search
            </button>

            <!-- Certificate Not Found -->
            <div v-if="!certificate" class="bg-white/5 backdrop-blur-sm rounded-3xl p-12 text-center border-2 border-primary/30">
                <div class="w-20 h-20 mx-auto mb-6 text-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-white mb-4">Certificate Not Found</h2>
                <p class="text-gray-300 text-lg mb-8">
                    The certificate ID <span class="text-primary font-mono">{{ route.params.id }}</span> could not be found in our records.
                </p>
                <button
                @click="navigateTo('/')"
                class="bg-secondary hover:bg-secondary/80 text-white px-8 py-3 rounded-xl font-semibold transition-all"
                >
                Try Another ID
                </button>
            </div>

        <!-- Certificate Found -->
        <div v-else>
            <!-- Header with Success Badge -->
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-8 border-2 border-tertiary/30">
                <div class="flex items-center justify-center gap-3 mb-6">
                    <div class="w-12 h-12 text-tertiary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-full h-full">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-tertiary">Verified Certificate</h2>
                </div>

                <!-- Certificate Bio -->
                <div class="text-center">
                    <h1 class="text-4xl font-bold text-white mb-2">{{ certificate.name }}</h1>
                    <p class="text-gray-300 text-lg mb-6">
                    has successfully completed
                    </p>
                    <h3 class="text-3xl font-bold text-primary mb-6">
                    {{ certificate.course }}
                    </h3>
                    
                    <div class="flex flex-wrap justify-center gap-6 text-gray-300">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        {{ certificate.completionDate }}
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ certificate.duration }}
                    </div>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {{ certificate.location }}
                    </div>
                    </div>
                </div>
            </div>

            <!-- Course Details -->
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-secondary/30">
                <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7 text-secondary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    Course Curriculum & Skills Acquired
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                    v-for="(skill, index) in certificate.skills"
                    :key="index"
                    class="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-secondary/50 transition-all"
                    >
                    <div class="flex items-start gap-3">
                        <div class="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        <p class="text-gray-200">{{ skill }}</p>
                    </div>
                    </div>
                </div>

                <div class="mt-8 pt-8 border-t border-white/10 text-center">
                    <p class="text-gray-400">
                    Certificate issued by <span class="text-white font-semibold">{{ certificate.organization }}</span> on {{ certificate.issueDate }}
                    </p>
                    <p class="text-gray-500 text-sm mt-2 font-mono">
                    ID: {{ certificate.id }}
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

// Mock certificate data
    const certificates = [
        {
            id: '6775c3a4f1b29d3ad4c0e8f7',
            name: 'Adrian Kamau',
            course: 'Internet of Things (IoT) Bootcamp',
            completionDate: 'July 2025',
            duration: '5 Months',
            location: 'Online & On Campus',
            skills: [
                "Practical Electronics – Covered AC/DC circuit theory, RLC components, diodes, transistors, breadboarding, power supplies, and building basic IoT-ready circuits.",
                "Microcontrollers Principles & Practice (Arduino, ESP32, Raspberry Pi) – Learned microcontroller architecture, GPIO, timers, interrupts, ADC/DAC, serial communication, and hands-on development using Arduino, ESP32 (ESP-IDF & FreeRTOS), Raspberry Pi (Linux + GPIO), and MicroPython.",
                "C, C++, and Python Programming – Built foundations in C, C++, and Python including variables, data structures, control flow, OOP, functions, and completed practical coding projects like calculators, bank systems, and library management software.",
                "IoT Architecture Fundamentals – Studied IoT reference models, system components, edge–fog–cloud architecture, scalability and reliability patterns, and real-world IoT design case studies.",
                "IoT Hardware Communication Protocols – Learned UART/USART, I2C, SPI, OneWire, and CAN protocols, including implementation and hardware-level selection for IoT devices.",
                "Wireless Communication Protocols – Covered Wi-Fi, Bluetooth/BLE, LoRaWAN, Zigbee, Thread, and RF basics with a focus on range, power efficiency, and deployment scenarios.",
                "Network Protocols – Studied TCP/IP, HTTP/HTTPS, REST APIs, MQTT, CoAP, and WebSockets with emphasis on choosing appropriate protocols for IoT connectivity.",
                "IoT Devices, Sensors & Microcontrollers – Covered sensors, actuators, interfacing, power management, component integration, and microcontroller–sensor communication.",
                "Network Protocols & Connectivity – Practiced implementing connectivity layers, secure communication, API interactions, MQTT brokers, and efficient networking for IoT systems.",
                "Data Management & Analytics – Learned time-series data handling, real-time data streaming, dashboards, visualization tools, machine learning for IoT, and predictive maintenance.",
                "IoT Security & Privacy – Covered JSON, XML, Protocol Buffers, encryption, authentication, secure communication channels, and IoT security best practices.",
                "Edge Computing Implementation – Explored edge processing concepts, running computation near devices, integrating edge–cloud workflows, and deploying lightweight services.",
                "IoT Platforms (AWS, Azure, Google Cloud) – Built expertise in cloud IoT platforms, device provisioning, pipelines, data storage, and designing custom cloud IoT solutions.",
                "AI Integration with IoT Systems – Applied machine learning to IoT data, including anomaly detection, real-time analytics, and integrating ML models into cloud or device workflows.",
                "Smart Applications Development – Developed smart home, industrial, and cloud-connected applications combining sensors, wireless protocols, dashboards, and automation logic.",
                "Capstone Project – Designed and built a complete IoT system including architecture, device programming, cloud integration, testing, debugging, and final project presentation."
            ],
            issueDate: '5, July, 2025',
            organization: 'Atsba'
        },
        {
            id: '6775c3a4f1b29d3ad4c0e8f8',
            name: 'Jane Smith',
            course: 'Internet of Things (IoT) Bootcamp',
            completionDate: 'October 2024',
            duration: '4 Months',
            location: 'Online',
            skills: [
                'IoT Principles and Architecture',
                'IoT Devices, Sensors & Microcontrollers',
                'Network Protocols & Connectivity',
                'Data Management & Analytics',
                'IoT Security & Privacy',
                'Edge Computing Implementation',
                'IoT Platforms (AWS, Azure, Google Cloud)',
                'AI Integration with IoT Systems',
                'Smart Applications Development',
                'Advanced Topics: Blockchain, AR/VR, 5G'
            ],
            issueDate: 'November 2024',
            organization: 'Atsba'
        }
    ]

    const certificate = computed(() => {
        return certificates.find(cert => cert.id === route.params.id)
    })
</script>