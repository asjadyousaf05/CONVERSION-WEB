export class UtilService {
    // Method to convert text case
    public static convertTextCase(text: string, caseType: 'upper' | 'lower' | 'title'): string {
        switch (caseType) {
            case 'upper':
                return text.toUpperCase();
            case 'lower':
                return text.toLowerCase();
            case 'title':
                return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            default:
                return text;
        }
    }

    // Method to convert file sizes
    public static convertFileSize(size: number, fromUnit: 'MB' | 'GB' | 'KB' | 'TB', toUnit: 'MB' | 'GB' | 'KB' | 'TB'): number {
        const units = {
            MB: 1,
            GB: 1024,
            KB: 1 / 1024,
            TB: 1024 * 1024
        };

        // Convert from the original unit to MB
        const sizeInMB = size * units[fromUnit];

        // Convert from MB to the target unit
        return sizeInMB / units[toUnit];
    }
}