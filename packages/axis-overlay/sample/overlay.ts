import { Connection } from 'axis-core';
import { Overlay } from '../src';

const get = async (overlay: Overlay): Promise<void> => {
    console.log(`> getting Dynamic Text Overlay...`);
    const text = await overlay.getDynamicTextOverlay();
    console.log(`>> current overlay text: ${text}`);
};

const set = async (overlay: Overlay): Promise<void> => {
    console.log(`> setting Dynamic Text Overlay...`);
    await overlay.setDynamicTextOverlay("Hello World");
    console.log(`>> overlay text set`);
};

export const run = async (connection: Connection): Promise<void> => {
    console.log('Overlay');
    console.log('============================================================');

    const overlay = new Overlay(connection);

    await set(overlay);
    console.log();
    await get(overlay);
    console.log();
};
