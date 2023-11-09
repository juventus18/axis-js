import { TextIndex } from "./TTextIndex";

/**
 * Snapshot options overriding the video stream configuration. Not specifying any options will
 * get you the characteristics of the video stream.
 */
export type DynamicTextOverlayOptions = {
    /**
     * gettext = Get the dynamic text overlay.
     * settext = Set the dynamic text overlay.
     */
    action: 'settext' | 'gettext';

    /**
     * The overlay text to apply, only applicable with action=settext.
     */
    text?: string;

    /**
     * The text index to apply the text to. This is only supported on devices
     * with firmware v11 or higher.
     *
     * A text index for a slot maps text to the modifiers #D1...#D16. For
     * example, text_index=3&text=Hello means that Hello will be mapped to #D3.
     */
    text_index?: TextIndex;

    /**
     * Selects the video source (1...n). If omitted the default value camera 1 is used.
     * This argument is only valid for Axis products with more than one video source. That is
     * cameras with multiple view areas and video encoders with multiple video channels.
     */
    camera?: number;
}
