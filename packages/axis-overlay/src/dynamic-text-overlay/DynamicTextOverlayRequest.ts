import { Connection, DeviceRequest } from 'axis-core';
import { DynamicTextOverlayOptions } from './DynamicTextOverlayOptions';
import { DynamicTextOverlayResponse } from './DynamicTextOverlayResponse';
import { toQueryString } from './convert';

export class DynamicTextOverlayRequest extends DeviceRequest {
    constructor(
        connection: Connection,
        private readonly options: DynamicTextOverlayOptions,
    ) {
        super(connection);
    }

    public async send(): Promise<DynamicTextOverlayResponse> {
        const response = await this.get(this.relativePath);

        return new DynamicTextOverlayResponse(response.toString(), this.options);
    }

    public get relativePath(): string {
        let url = '/axis-cgi/dynamicoverlay.cgi';

        const queryString = toQueryString(this.options);
        if (queryString !== null) {
            url += '?' + queryString;
        }

        return url;
    }
}
