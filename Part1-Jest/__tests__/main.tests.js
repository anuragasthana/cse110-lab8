const formatVolumeIconPath = require('../assets/scripts/main');

describe("formatVolumeIconPath tests", () => {

    test("see what icon 75 returns", () => {
        expect(formatVolumeIconPath(75)).toMatch(`3`)
    });
    
    test("see what icon 66 returns", () => {
        expect(formatVolumeIconPath(66)).toMatch(`2`)
    });

    test("see what icon 50 returns", () => {
        expect(formatVolumeIconPath(50)).toMatch(`2`)
    });

    test("see what icon 33 returns", () => {
        expect(formatVolumeIconPath(33)).toMatch(`1`)
    });

    test("see what icon 25 returns", () => {
        expect(formatVolumeIconPath(25)).toMatch(`1`)
    });

    test("see what icon 0 returns", () => {
        expect(formatVolumeIconPath(0)).toMatch(`0`)
    });

});