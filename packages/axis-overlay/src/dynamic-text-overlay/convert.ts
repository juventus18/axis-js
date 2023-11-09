import * as expect from '@fantasticfiasco/expect';
import { DynamicTextOverlayOptions } from './DynamicTextOverlayOptions';

export function toQueryString(options: DynamicTextOverlayOptions): string | null {
    expect.toBeTrue(options.action === undefined || options.action.length > 0, 'action cannot be an empty string');

    if (options === undefined) {
        return null;
    }

    const parameters = Object.entries(options);
    if (parameters.length === 0) {
        return null;
    }

    return parameters.map(([key, value]) => (value ? `${key}=${encodeURIComponent(value)}`: null)).join('&');
}
