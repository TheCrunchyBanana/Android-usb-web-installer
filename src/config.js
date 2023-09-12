export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 4",
            model: "flame",
        },
        {
            name: "Pixel 4 XL",
            model: "coral",
        },
        {
            name: "Pixel 4a 5G",
            model: "bramble",
        },
        {
            name: "Pixel 5",
            model: "redfin",
        },
        {
            name: "Pixel 6",
            model: "oriole",
        },
        {
            name: "Pixel 6 Pro",
            model: "raven",
        },
    ],
    RELEASE_VARIANTS: {
        minimal: {
            description: "Minimal version without Google apps or services.",
            suffix: "",
        },
        gapps: {
            description:
                "Version with Google services included, so the apps you’re familiar with will work. Recommended for most users.",
            suffix: " with Google services",
        },
        test: {
            description: "Experimental version for testing only.",
            suffix: "experimental",
        },
        beta: {
            description: "Beta version for testing only.",
            suffix: "beta",
        },
    },
};
