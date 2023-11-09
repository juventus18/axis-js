import { DeviceResponse, UnknownError } from 'axis-core';
import { DynamicTextOverlayOptions } from './DynamicTextOverlayOptions';

export class DynamicTextOverlayResponse extends DeviceResponse {
    private static readonly SuccessResponseGetDynamicTextOverlay = /Dynamic text overlay/i;
    private static readonly SuccessResponseSetDynamicTextOverlay = /OK/i;

    constructor(
        response: string,
        private readonly options: DynamicTextOverlayOptions,
    ) {
        super(response);
    }

    // we need to return the Dynamic Text Overlay text if the user called gettext
    // request
    public get overlayText(): string | null {
        if (this.options.action === 'gettext') {
            // remove the "Dynamic text overlay: " prefix from the response so
            // the caller just gets the Dynamic Text
            return this.response.replace("Dynamic text overlay: ", "").trim();
        }

        // if the user used settext, just return the text or null
        return this.options.text || null;
    }

    public assertSuccess(): void {
        if (this.options.action === 'gettext') {
            this.assertGetSuccess();
        } else {
            this.assertSetSuccess();
        }
    }

    private assertGetSuccess() {
        if (DynamicTextOverlayResponse.SuccessResponseGetDynamicTextOverlay.test(this.response)) {
            return;
        }

        this.throwUnknownError();
    }

    private assertSetSuccess() {
        if (DynamicTextOverlayResponse.SuccessResponseSetDynamicTextOverlay.test(this.response)) {
            return;
        }

        this.throwUnknownError();
    }

    private throwUnknownError() {
        let body: string | null = this.response;

        if (body !== null) {
            body = body.trim();
            if (body) {
                throw new UnknownError(body);
            }
        }

        throw new UnknownError('Request to dynamic text overlay was not successful');
    }
}
