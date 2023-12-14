import { Connection } from 'axis-core';
import { DynamicTextOverlayOptions } from './dynamic-text-overlay';
import { DynamicTextOverlayRequest } from './dynamic-text-overlay/DynamicTextOverlayRequest';
import { TextIndex } from './dynamic-text-overlay/TTextIndex';

/**
 * Class responsible for running overlay operations on devices from Axis Communication.
 *
 * Dynamic text overlay can be inserted in the text overlay. Since dynamic text
 * is saved in the RAM memory only, it is removed on reboot.
 *
 * It is possible to use modifiers starting with % in this dynamic text.
 * However, modifiers starting with # can not be used.
 *
 * To use this functionality set Image.I#.Text.TextEnabled to yes and set Image.I#.Text.String to contain the modifier #D.
 *
 * For more information see:
 * https://www.axis.com/vapix-library/subjects/t10175981/section/t10007638/display?section=t10007638-t10007636
 */
export class Overlay {
    /**
     * Initializes a new instance of the class.
     * @param connection The connection to the device.
     */
    constructor(private readonly connection: Connection) {}

    /**
     * Get the dynamic text overlay. The returned promise is resolved when the
     * device accepts the dynamic text overlay request.
     * @param camera Selects the video source (1...n). If omitted the default
     * value camera 1 is used. This argument is only valid for Axis products
     * with more than one video source. That is cameras with multiple view areas
     * and video encoders with multiple video channels.
     * @param textIndex The text index to query. This is only
     * supported on devices with firmware v11 or higher.
     * @throws {UnauthorizedError} User is not authorized to perform operation.
     * @throws {RequestError} Request failed.
     * @throws {UnknownError} Error cause is unknown.
     */
    public async getDynamicTextOverlay(camera: number = 1, textIndex: TextIndex = null): Promise<string| null> {
        const options: DynamicTextOverlayOptions = { action:"gettext", camera: camera };
        if (textIndex) {
            options.text_index = textIndex;
        }
        const request = new DynamicTextOverlayRequest(this.connection, options);
        const response = await request.send();

        response.assertSuccess();

        return response.overlayText;
    }

    /**
     * Set the dynamic text overlay. The returned promise is resolved when the
     * device accepts the dynamic text overlay request.
     * @param text The overlay text to apply.
     * @param camera Selects the video source (1...n). If omitted the default
     * value camera 1 is used. This argument is only valid for Axis products
     * with more than one video source. That is cameras with multiple view areas
     * and video encoders with multiple video channels.
     * @param textIndex The text index to apply the text to. This is only
     * supported on devices with firmware v11 or higher.
     * @throws {UnauthorizedError} User is not authorized to perform operation.
     * @throws {RequestError} Request failed.
     * @throws {UnknownError} Error cause is unknown.
     */
    public async setDynamicTextOverlay(text: string, camera: number | null = null, textIndex: TextIndex = null): Promise<void> {
        const options: DynamicTextOverlayOptions = { action:"settext", text: text };
        if (camera) {
            options.camera = camera;
        }
        if (textIndex) {
            options.text_index = textIndex;
        }
        const request = new DynamicTextOverlayRequest(this.connection, options);
        const response = await request.send();

        response.assertSuccess();
    }
}
