class Settings {
    constructor() {
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);
        this.userSettings = new Map();
    }

    setSettings(name, value) {
        this.userSettings.set(name, value);
    }

    get settings() {
        const result = new Map(this.defaultSettings);
        for (const [key, value] of this.userSettings) {
            result.set(key, value);
        }
        return result;
    }
}


const settings = new Settings();

settings.setSettings('theme', 'light');
settings.setSettings('music', 'rock');

console.log(settings.settings); 